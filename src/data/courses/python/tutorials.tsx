

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
    | 'matplotlib'
    | 'pandas'
    | 'numpy';

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
    // DO NOT USE THIS TAG: I choose courses to add to favorites
    favorite: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.favorite.label",
            message: "ویژه",
            description: "The label of favorite tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.favorite.description",
            message: "دوره‌های آموزشی‌ای که حتما باید ببینید",
            description: "The description of favorite tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
    beginner: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.beginner.label",
            message: "مقدماتی",
            description: "The label of beginner tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.beginner.description",
            message: "دوره‌های مقدماتی آموزش پایتون",
            description: "The description of beginner tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
    advanced: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.advanced.label",
            message: "پیشرفته",
            description: "The label of advanced tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.advanced.description",
            message: "دوره‌های پیشرفته آموزش پایتون",
            description: "The description of advanced tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
    matplotlib: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.matplotlib.label",
            message: "Matplotlib",
            description: "The label of matplotlib tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.matplotlib.description",
            message: "دوره‌های آموزشی Matplotlib در پایتون",
            description: "The description of matplotlib tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
    pandas: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.pandas.label",
            message: "Pandas",
            description: "The label of pandas tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.pandas.description",
            message: "دوره‌های آموزشی Pandas در پایتون",
            description: "The description of pandas tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
    numpy: {
        label: translate({
            id: "src.data.courses.python.tutorials.Tags.numpy.label",
            message: "NumPy",
            description: "The label of numpy tag in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Tags.numpy.description",
            message: "دوره‌های آموزشی NumPy در پایتون",
            description: "The description of numpy tag in the tutorials data of Python course"
        }),
        // icon: <></>,
    },
};

// Add the course to this list
// prettier-ignore
const Courses: Course[] = [
    // {
    //     title: translate({
    //         id: "src.data.courses.python.tutorials.Courses.python_advanced.title",
    //         message: "آموزش پیشرفته پایتون",
    //         description: "The title of Python Advanced course in the tutorials data of Python course"
    //     }),
    //     description: translate({
    //         id: "src.data.courses.python.tutorials.Courses.python_advanced.description",
    //         message: "یادگیری مفاهیم پیشرفته برنامه‌نویسی در زبان پایتون",
    //         description: "The description of Python Advanced course in the tutorials data of Python course"
    //     }),
    //     // preview: require('../../../static/img/general/massoudmaboudi.png'),
    //     path: baseURL.concat('docs/courses/python/tutorials/introduction'),
    //     tags: ['advanced'],
    // },
    // {
    //     title: translate({
    //         id: "src.data.courses.python.tutorials.Courses.oop.title",
    //         message: "آموزش شی گرایی در پایتون",
    //         description: "The title of Python Object Oriented Programming (OOP) course in the tutorials data of Python course"
    //     }),
    //     description: translate({
    //         id: "src.data.courses.python.tutorials.Courses.oop.description",
    //         message: "آموزش برنامه نویسی شی گرا در پایتون به زبان ساده",
    //         description: "The description of Python Object Oriented Programming (OOP) course in the tutorials data of Python course"
    //     }),
    //     // preview: require('../../../static/img/general/massoudmaboudi.png'),
    //     path: baseURL.concat('docs/courses/python/tutorials/introduction'),
    //     tags: ['advanced'],
    // },
    {
        title: translate({
            id: "src.data.courses.python.tutorials.Courses.python_beginner.title",
            message: "آموزش مقدماتی پایتون",
            description: "The title of Python Beginner course in the tutorials data of Python course"
        }),
        description: translate({
            id: "src.data.courses.python.tutorials.Courses.python_beginner.description",
            message: "دوره‌ای متفاوت برای یادگیری مفاهیم اولیه برنامه‌نویسی پایتون",
            description: "The description of Python Beginner course in the tutorials data of Python course"
        }),
        // preview: require('../../../static/img/general/massoudmaboudi.png'),
        path: baseURL.concat('docs/courses/python/tutorials/beginner/'),
        tags: ['beginner', 'favorite'],
    },
    // {
    //     title: translate({
    //         id: "src.data.courses.python.tutorials.Courses.matplotlib_beginner.title",
    //         message: "آموزش مقدماتی Matplotlib",
    //         description: "The title of Matplotlib Beginner course in the tutorials data of Python course"
    //     }),
    //     description: translate({
    //         id: "src.data.courses.python.tutorials.Courses.matplotlib_beginner.description",
    //         message: "آموزش مفاهیم اولیه کتابخانه قدرتمند Matplotlib برای رسم نمودار در پایتون",
    //         description: "The description of Matplotlib Beginner course in the tutorials data of Python course"
    //     }),
    //     // preview: require('../../../static/img/general/massoudmaboudi.png'),
    //     path: baseURL.concat('docs/courses/python/tutorials/introduction'),
    //     tags: ['matplotlib', 'favorite'],
    // },
    // {
    //     title: translate({
    //         id: "src.data.courses.python.tutorials.Courses.numpy_beginner.title",
    //         message: "آموزش مقدماتی NumPy",
    //         description: "The title of Numpy Beginner course in the tutorials data of Python course"
    //     }),
    //     description: translate({
    //         id: "src.data.courses.python.tutorials.Courses.numpy_beginner.description",
    //         message: "دوره آموزش مقدماتی کار با کتابخانه NumPy در پایتون",
    //         description: "The description of Numpy Beginner course in the tutorials data of Python course"
    //     }),
    //     // preview: require('../../../static/img/general/massoudmaboudi.png'),
    //     path: baseURL.concat('docs/courses/python/tutorials/introduction'),
    //     tags: ['numpy', 'favorite'],
    // },
    // {
    //     title: translate({
    //         id: "src.data.courses.python.tutorials.Courses.pandas_beginner.title",
    //         message: "دوره مقدماتی آموزش Pandas",
    //         description: "The title of Pandas Beginner course in the tutorials data of Python course"
    //     }),
    //     description: translate({
    //         id: "src.data.courses.python.tutorials.Courses.pandas_beginner.description",
    //         message: "آموزش مفاهیم مقدماتی مورد نیاز برای کار با کتابخانه Pandas",
    //         description: "The description of Pandas Beginner course in the tutorials data of Python course"
    //     }),
    //     // preview: require('../../../static/img/general/massoudmaboudi.png'),
    //     path: baseURL.concat('docs/courses/python/tutorials/introduction'),
    //     tags: ['pandas', 'favorite'],
    //  },

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
Courses.forEach(ensureCourseValid);
