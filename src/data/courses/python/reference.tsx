

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
    | 'built_in_functions'
    | 'string_methods'
    | 'list_methods'
    | 'dictionary_methods'
    | 'tuple_methods'
    | 'set_methods'
    | 'file_methods'
    | 'keywords'
    | 'exceptions'
    | 'random_module'
    | 'requests_module'
    | 'math_module';

export type Course = {
    title: string;
    description: string;
    // img: any;
    path: string;
    tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to the course
export const Tags: Record<TagType, Tag> = {

    built_in_functions: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.built_in_functions.label",
            message: "توابع از پیش تعریف شده",
            description: "The label of built-in functions tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.built_in_functions.description",
            message: "توابع از پیش تعریف شده در پایتون",
            description: "The description of built-in functions tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    string_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.string_methods.label",
            message: "متدهای رشته",
            description: "The label of string methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.string_methods.description",
            message: "متدهای رشته در پایتون",
            description: "The description of string methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    list_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.list_methods.label",
            message: "متدهای لیست",
            description: "The label of list methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.list_methods.description",
            message: "متدهای لیست در پایتون",
            description: "The description of list methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    dictionary_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.dictionary_methods.label",
            message: "متدهای دیکشنری",
            description: "The label of dictionary methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.dictionary_methods.description",
            message: "متدهای دیکشنری در پایتون",
            description: "The description of dictionary methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    tuple_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.tuple_methods.label",
            message: "متدهای تاپل",
            description: "The label of tuple methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.tuple_methods.description",
            message: "متدهای تاپل در پایتون",
            description: "The description of tuple methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    set_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.set_methods.label",
            message: "متدهای مجموعه",
            description: "The label of set methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.set_methods.description",
            message: "متدهای مجموعه در پایتون",
            description: "The description of set methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    file_methods: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.file_methods.label",
            message: "متدهای کار با فایل",
            description: "The label of file methods tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.file_methods.description",
            message: "متدهای کار با فایل در پایتون",
            description: "The description of file methods tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    keywords: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.keywords.label",
            message: "کلمات کلیدی",
            description: "The label of keywords tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.keywords.description",
            message: "کلمات کلیدی در پایتون",
            description: "The description of keywords tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    exceptions: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.exceptions.label",
            message: "استثناها",
            description: "The label of exceptions tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.exceptions.description",
            message: "استثناها در پایتون",
            description: "The description of exceptions tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    random_module: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.random_module.label",
            message: "ماژول Random",
            description: "The label of random module tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.random_module.description",
            message: "ماژول Random در پایتون",
            description: "The description of random module tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    requests_module: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.requests_module.label",
            message: "ماژول Requests",
            description: "The label of requests module tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.requests_module.description",
            message: "ماژول Requests در پایتون",
            description: "The description of requests module tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
    math_module: {
        label: translate({
            id: "src.data.courses.python.reference.Tags.math_module.label",
            message: "ماژول Math",
            description: "The label of math module tag in the reference data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Tags.math_module.description",
            message: "ماژول Math در پایتون",
            description: "The description of math module tag in the reference data of Python course"
        }),
        // icon: <></>,
    },
};

// Add the course to this list
// prettier-ignore
const Courses: Course[] = [
    {
        title: translate({
            id: "src.data.courses.python.reference.Courses.built_in_functions.abs.title",
            message: "تابع ()abs در پایتون",
            description: "The title of Python Advanced course in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.reference.Courses.built_in_functions.abs.description",
            message: "قدر مطلق یک عدد را برمیگرداند",
            description: "The title of Python Advanced course in the tutorials data of Python course"
        }),
        // preview: require('../../../static/img/general/massoudmaboudi.png'),
        path: baseURL.concat('docs/courses/python/tutorials/introduction'),
        tags: ['built_in_functions'],
    },

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
    // result = sortBy(result, (course) => !course.tags.includes('favorite'));
    return result;
}

export const SortedCourses = sortCourses();

// Fail-fast on common errors
function ensureCourseValid(course: Course) {
    function checkFields() {
        const keys = Object.keys(course);
        const validKeys = [
            'title',
            'description',
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

    function checkDescription() {
        if (!course.description) {
            throw new Error('Course description is missing');
        }
    }

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
        checkDescription();
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
