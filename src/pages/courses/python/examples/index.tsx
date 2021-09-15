import React, { useState, useMemo, useCallback, useEffect } from 'react';

import Layout from '@theme/Layout';
import FeatureCheckbox from '../../../../components/Feature/FeatureCheckbox';
// import FeatureSelect from '../../../../components/Feature/FeatureSelect';
import FeatureCardNoImgNoDesc from '../../../../components/Feature/FeatureCardNoImgNoDesc';
import styles from '../styles.module.css';
import index from './index.module.css';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

import { useHistory, useLocation } from '@docusaurus/router';

import { sortBy, toggleListItem } from '../../../../utils/jsUtils';
import { SortedCourses, Tags, Tag, TagList, Course, TagType } from '../../../../data/courses/python/examples';

type Operator = 'OR' | 'AND';

const TITLE = translate({
    id: "pages.courses.python.examples.main.title",
    message: "مثال‌های پایتون",
    description: "The main title in the examples page in Python course"
})

const DESCRIPTION = translate({
    id: "pages.courses.python.examples.main.description",
    message: "بهترین راه برای یادگیری، تمرین و کدنویسیه",
    description: "The main description in the examples page in Python course"
})

const NOTHING_FOUND = translate({
    id: "pages.courses.python.examples.main.nothing_found",
    message: "هیچ مثالی پیدا نشد!",
    description: "The Nothing Found message in the examples page in Python course"
})

// function TagIcon({ label, description, icon }: Tag) {
//     return (
//         <span
//             className={styles.tagIcon}
//             // TODO add a proper tooltip
//             title={`${label}: ${description}`}>
//             {icon}
//         </span>
//     );
// }

// function FeatureTagIcons({ tags }: { tags: TagType[] }) {
//     const tagObjects = tags
//         .map((tag) => ({ tag, ...Tags[tag] }))
//         .filter((tagObject) => !!tagObject.icon);

//     // Keep same order of icons for all tags
//     const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
//         TagList.indexOf(tagObject.tag),
//     );

//     return (
//         <>
//             {tagObjectsSorted.map((tagObject, index) => (
//                 <TagIcon key={index} {...tagObject} />
//             ))}
//         </>
//     );
// }

function filterCourses(
    courses: Course[],
    selectedTags: TagType[],
    operator: Operator,
) {
    if (selectedTags.length === 0) {
        return courses;
    }
    return courses.filter((course) => {
        if (course.tags.length === 0) {
            return false;
        }
        if (operator === 'AND') {
            return selectedTags.every((tag) => course.tags.includes(tag));
        } else {
            return selectedTags.some((tag) => course.tags.includes(tag));
        }
    });
}

function useFilteredCourses(
    courses: Course[],
    selectedTags: TagType[],
    operator: Operator,
) {
    return useMemo(() => filterCourses(courses, selectedTags, operator), [
        courses,
        selectedTags,
        operator,
    ]);
}

const TagQueryStringKey = 'tags';

function readSearchTags(search: string) {
    return new URLSearchParams(search).getAll(TagQueryStringKey) as TagType[];
}

function replaceSearchTags(search: string, newTags: TagType[]) {
    const searchParams = new URLSearchParams(search);
    searchParams.delete(TagQueryStringKey);
    newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
    return searchParams.toString();
}

function useSelectedTags() {
    // The search query-string is the source of truth!
    const location = useLocation();
    const { push } = useHistory();

    // On SSR / first mount (hydration) no tag is selected
    const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

    // Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
    useEffect(() => {
        const tags = readSearchTags(location.search);
        setSelectedTags(tags);
    }, [location, setSelectedTags]);

    // Update the QS value
    const toggleTag = useCallback(
        (tag: TagType) => {
            const tags = readSearchTags(location.search);
            const newTags = toggleListItem(tags, tag);
            const newSearch = replaceSearchTags(location.search, newTags);
            push({ ...location, search: newSearch });
            // no need to call setSelectedTags, useEffect will do the sync
        },
        [location, push],
    );

    return { selectedTags, toggleTag };
}

function FeatureHeader() {

    const { selectedTags, toggleTag } = useSelectedTags();
    const [operator, setOperator] = useState<Operator>('OR');

    return (
        <div className={clsx(styles.header, "hero shadow--lw")}>
            <div className="container">
                <h1>{TITLE}</h1>
                <p className="padding-horiz--md">{DESCRIPTION}</p>
                {/* <div className="search">
                    <input
                        className={clsx("shadow--lw")}
                        type="text"
                        // onChange={(event) => setSearchTerm(event.currentTarget.value)}
                        placeholder="🔍 جستجو..." />
                </div> */}
                <main className="container margin-top--lg">
                    <FeatureFilters
                        selectedTags={selectedTags}
                        toggleTag={toggleTag}
                        operator={operator}
                        setOperator={setOperator}
                    />
                </main>
            </div>
        </div>
    );
}

interface Props {
    selectedTags: TagType[];
    toggleTag: (tag: TagType) => void;
    operator: Operator;
    setOperator: (op: Operator) => void;
}

function FeatureFilters({
    selectedTags,
    toggleTag,
    operator,
    setOperator,
}: Props) {
    return (
        <div className="margin-top--l margin-bottom--md">
            <div className="row">
                {TagList.map((tag) => {
                    const { label, description } = Tags[tag];
                    // const { label, description, icon } = Tags[tag];
                    return (
                        <div key={tag} className={clsx("col col--4", styles.header_filter_col)}>
                            <FeatureCheckbox
                                // TODO add a proper tooltip
                                title={`${label}: ${description}`}
                                name={tag}
                                // label={
                                //     icon ? (
                                //         <>
                                //             {icon} {label}
                                //         </>
                                //     ) : (
                                //         label
                                //     )
                                // }
                                label={
                                    (
                                        label
                                    )
                                }
                                onChange={() => toggleTag(tag)}
                                checked={selectedTags.includes(tag)}
                            />
                        </div>
                    );
                })}
                {/* <div className="col col--2">
                    <FeatureSelect
                        name="operator"
                        label="Filter: "
                        value={operator}
                        onChange={(e) => setOperator(e.target.value as Operator)}>
                        <option value="OR">OR</option>
                        <option value="AND">AND</option>
                    </FeatureSelect>
                </div> */}
            </div>
        </div>
    );
}

function FeatureCards({ filteredCourses }: { filteredCourses: Course[] }) {

    const getUniqueBy = (prop, list) => {
        const objUniq = list.reduce((res, item) => ({ ...res, [item[prop]]: item }), {})
        return Object.keys(objUniq).map(item => objUniq[item])
    }

    const uniqueFilteredCourses = getUniqueBy('tags', filteredCourses)

    let row_idx = 0
    let course_idx = 0
    return (
        <section className="container">
            {/* <h2>
                {filteredCourses.length} دوره{filteredCourses.length > 1 ? 's' : ''}
            </h2> */}
            <div >
                {filteredCourses.length > 0 ? (
                    <div>
                        {TagList.map((tag, index) => {
                            const { label, description } = Tags[tag];
                            // let course_idx = 1
                            if (uniqueFilteredCourses.find(course => course.tags.includes(tag))) {
                                row_idx += 1;
                                // course_idx = 0;
                                return (
                                    <div key={label} className={clsx(styles.main_row_container)}>
                                        <div className="container row">
                                            <h3>{label}</h3>
                                        </div>
                                        <div className="row">
                                            {filteredCourses.map((course) => {
                                                if (course.tags.includes(tag)) {
                                                    course_idx += 1;
                                                    course['id'] = course_idx;
                                                    return (
                                                        <div key={course.title} className={clsx("col col--6 margin-bottom--lg", styles.main_card_col)}>
                                                            <FeatureCardNoImgNoDesc
                                                                key={course.title} // Title should be unique
                                                                course={course}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                        {/* {row_idx !== uniqueFilteredCourses.length ? (
                                            <div className={clsx(styles.main_row__divider, styles.main_row__div_transparent)}></div>
                                        ) : (
                                            <></>
                                        )} */}
                                    </div>
                                )
                            }
                        })}
                    </div>
                ) : (
                    <div className={clsx('padding-vert--md text--center')}>
                        <h3>{NOTHING_FOUND}</h3>
                    </div>
                )}
            </div>
        </section >
    );
}

function Feature() {
    const { selectedTags } = useSelectedTags();
    const [operator] = useState<Operator>('OR');
    const filteredCourses = useFilteredCourses(SortedCourses, selectedTags, operator);
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <header>
                <FeatureHeader />
            </header>
            <main className="container margin-top--md margin-bottom--lg">
                <FeatureCards filteredCourses={filteredCourses} />
            </main>
        </Layout>
    );
}

export default Feature;