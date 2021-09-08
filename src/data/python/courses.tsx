

import React from 'react';
import { difference, sortBy } from '../../utils/jsUtils';

export type Tag = {
    label: string;
    description: string;
    // icon: JSX.Element;
};

export type TagType =
    | 'favorite'
    | 'beginner'
    | 'advance'
    | 'matplotlib'
    | 'pandas';

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
        label: 'Favorite',
        description:
            'Our favorite courses that you must absolutely check-out!',
        // icon: <></>,
    },
    beginner: {
        label: 'Beginner',
        description:
            'Our favorite courses that you must absolutely check-out!',
        // icon: <></>,
    },

    advance: {
        label: 'Advance',
        description: 'Open-Source courses can be useful for inspiration!',
        // icon: <></>,
    },

    matplotlib: {
        label: 'Matplotlib',
        description: 'courses associated to a commercial product!',
        // icon: <></>,
    },

    pandas: {
        label: 'Pandasssss',
        description:
            'Beautiful courses, polished and standing out from the initial template!',
        // icon: <></>,
    },
};

// Add the course to this list
// prettier-ignore
const Courses: Course[] = [
    {
        title: 'Aide Jeune',
        description: 'French Discord server that helps young people who have been bullied or feel bad about themselves',
        // preview: require('../../../static/img/general/massoudmaboudi.png'),
        path: 'https://aidejeune.fr',
        tags: ['beginner'],
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
            'preview',
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
        const isHttpUrl =
            course.path.startsWith('http://') || course.path.startsWith('https://');
        if (!isHttpUrl) {
            throw new Error(
                `Course path does not look like a valid url: ${course.path}`,
            );
        }
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
