

import React from 'react';
import { translate } from '@docusaurus/Translate';
import { difference, sortBy } from '../../../utils/jsUtils';

const baseURL = '../../../';

export type Tag = {
    label: string;
    description: string;
    // icon: JSX.Element;
};

export type TagType =
    | 'favorite'
    | 'beginner'
    | 'advanced'
    | 'object_oriented'
    | 'decision_making_and_loops'
    | 'functions'
    | 'data_types'
    | 'files';

export type Course = {
    title: string;
    // description: string;
    // img: any;
    path: string;
    tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to the course
export const Tags: Record<TagType, Tag> = {
    // DO NOT USE THIS TAG: I choose courses to add to favorites
    favorite: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.favorite.label",
            message: "ویژه",
            description: "The label of favorite tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.favorite.description",
            message: "مثال‌هایی که حتما باید ببینید",
            description: "The description of favorite tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    beginner: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.beginner.label",
            message: "مقدماتی",
            description: "The label of beginner tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.beginner.description",
            message: "مثال‌های مقدماتی پایتون",
            description: "The description of beginner tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    advanced: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.advanced.label",
            message: "پیشرفته",
            description: "The label of advanced tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.advanced.description",
            message: "مثال‌های پیشرفته پایتون",
            description: "The description of advanced tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    object_oriented: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.object_oriented.label",
            message: "شی گرایی",
            description: "The label of object oriented tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.object_oriented.description",
            message: "مثال‌های شی گرایی در پایتون",
            description: "The description of object oriented tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    decision_making_and_loops: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.decision_making_and_loops.label",
            message: "توابع شرطی و حلقه های تکرار",
            description: "The label of decision making and loops tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.decision_making_and_loops.description",
            message: "مثال‌های توابع شرطی و حلقه های تکرار پایتون",
            description: "The description of decision making and loops tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    functions: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.functions.label",
            message: "توابع",
            description: "The label of functions tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.functions.description",
            message: "مثال‌های توابع در پایتون",
            description: "The description of functions tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    data_types: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.data_types.label",
            message: "انواع داده",
            description: "The label of data types tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.data_types.description",
            message: "مثال‌های انواع داده در پایتون",
            description: "The description of data types tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
    files: {
        label: translate({
            id: "src.data.courses.python.examples.Tags.files.label",
            message: "کار با فایل",
            description: "The label of files tag in the examples data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.examples.Tags.files.description",
            message: "مثال‌های انواع فایل در پایتون",
            description: "The description of files tag in the examples data of Python course"
        }),
        // icon: <></>,
    },
};

// Add the course to this list
// prettier-ignore
const Courses: Course[] = [
    {
        title: translate({
            id: "src.data.courses.python.examples.Courses.print_hello_world.title",
            message: "برنامه چاپ Hello World در پایتون",
            description: "The title of Print Hello World example in the examples data of Python course"
        }),
        // description: 'دوره‌ای متفاوت برای یادگیری مفاهیم اولیه و متوسط برنامه‌نویسی به زبان پایتون',
        // preview: require('../../../static/img/general/massoudmaboudi.png'),
        path: baseURL.concat('docs/courses/python/tutorials/introduction'),
        tags: ['beginner'],
    }

    /*
    Pro Tip: add the course in alphabetical order.
    Appending the course here (at the end) is more likely to produce Git conflicts.
     */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortCourses() {
    let result = Courses;
    // Sort by site name
    result = sortBy(result, (course) => course.title.toLowerCase());
    // Sort by favorite tag, favorites first
    result = sortBy(result, (course) => !course.tags.includes('favorite'));
    return result;
}

export const SortedCourses = sortCourses();

// Fail-fast on common errors
function ensureCourseValid(course: Course) {
    function checkFields() {
        const keys = Object.keys(course);
        const validKeys = [
            'title',
            // 'description',
            // 'preview',
            'path',
            'tags',
        ];
        const unknownKeys = difference(keys, validKeys);
        if (unknownKeys.length > 0) {
            throw new Error(
                `Course contains unknown attribute names=[${unknownKeys.join(',')}]`,
            );
        }
    }

    function checkTitle() {
        if (!course.title) {
            throw new Error('Course title is missing');
        }
    }

    // function checkDescription() {
    //     if (!course.description) {
    //         throw new Error('Course description is missing');
    //     }
    // }

    function checkPath() {
        if (!course.path) {
            throw new Error('Course path is missing');
        }
        // const isHttpUrl =
        //     course.path.startsWith('http://') || course.path.startsWith('https://');
        // if (!isHttpUrl) {
        //     throw new Error(
        //         `Course path does not look like a valid url: ${course.path}`,
        //     );
        // }
    }

    function checkTags() {
        if (
            !course.tags ||
            !(course.tags instanceof Array) ||
            (course.tags as string[]).includes('')
        ) {
            throw new Error(`Bad course tags=[${JSON.stringify(course.tags)}]`);
        }
        const unknownTags = difference(course.tags, TagList);
        if (unknownTags.length > 0) {
            throw new Error(
                `Unknown tags=[${unknownTags.join(
                    ',',
                )}\nThe available tags are ${TagList.join(',')}`,
            );
        }
    }

    try {
        checkFields();
        checkTitle();
        // checkDescription();
        checkPath();
        checkTags();
    } catch (e) {
        throw new Error(
            `Course site with title=${course.title} contains errors:\n${e.message}`,
        );
    }
}
console.log(require('@site/docs/courses/python/tutorials/beginner/introduction.md').default)
Courses.forEach(ensureCourseValid);
