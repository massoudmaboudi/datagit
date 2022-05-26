import React, { useState, useMemo, useCallback, useEffect } from 'react';

import Layout from '@theme/Layout';
import FeatureCheckbox from '../../../../components/Feature/FeatureCheckbox';
// import FeatureSelect from '../../../../components/Feature/FeatureSelect';
import FeatureCardNoImage from '../../../../components/Feature/FeatureCardNoImgNoNum';
import styles from '../styles.module.css';
import index from './index.module.css';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

import { useHistory, useLocation } from '@docusaurus/router';

import { sortBy, toggleListItem } from '../../../../utils/jsUtils';
import { SortedCourses, Tags, Tag, TagList, Course, TagType } from '../../../../data/courses/python/tutorials';

type Operator = 'OR' | 'AND';

const TITLE = translate({
    id: "pages.courses.python.tutorials.main.title",
    message: "آموزش‌های پایتون",
    description: "The main title in the tutorials page in Python course"
})

const DESCRIPTION = translate({
    id: "pages.courses.python.tutorials.main.description",
    message: "آموزش‌های پروژه محور، بهترین روش برای یادگیری هستن",
    description: "The main description in the tutorials page in Python course"
})

const NOTHING_FOUND = translate({
    id: "pages.courses.python.tutorials.main.nothing_found",
    message: "هیچ دوره‌ای پیدا نشد!",
    description: "The Nothing Found message in the tutorials page in Python course"
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
                        <div key={tag} className={clsx("col col--3", styles.header_filter_col)}>
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
    return (
        <section className="container">
            {/* <h2>
                {filteredCourses.length} دوره{filteredCourses.length > 1 ? 's' : ''}
            </h2> */}
            <div>
                {filteredCourses.length > 0 ? (
                    <div className={clsx("row", styles.main_row_container)}>
                        {filteredCourses.map((course) => (
                            <div key={course.title} className={clsx("col col--4 margin-bottom--lg", styles.main_card_col)}>
                                <FeatureCardNoImage
                                    key={course.title} // Title should be unique
                                    course={course}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={clsx('padding-vert--md text--center')}>
                        <h3>{NOTHING_FOUND}</h3>
                    </div>
                )}
            </div>
        </section>
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