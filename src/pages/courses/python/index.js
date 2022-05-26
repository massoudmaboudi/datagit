import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

import FeatureCard from '../../../components/Feature/FeatureCardNoNum';

const sectionsItems = [
    {
        title: translate({
            id: "pages.courses.python.main.sectionsItems.tutorials.title",
            message: "آموزش‌ها",
            description: "The title of section of tutorials in the Python course"
        }),
        description: translate({
            id: "pages.courses.python.main.sectionsItems.tutorials.description",
            message: "یادگیری هیچ چیزی سخت نیست!",
            description: "The description of section of tutorials in the Python course"
        }),
        path: './python/tutorials',
        cover: '/img/general/pathway.svg'
    },
    {
        title: translate({
            id: "pages.courses.python.main.sectionsItems.examples.title",
            message: "مثال‌ها",
            description: "The title of section of examples in the Python course"
        }),
        description: translate({
            id: "pages.courses.python.main.sectionsItems.examples.description",
            message: "بهترین راه برای یادگیری، تمرین و کدنویسیه!",
            description: "The description of section of examples in the Python course"
        }),
        path: './python/examples',
        cover: '/img/general/console.svg'
    },
    {
        title: translate({
            id: "pages.courses.python.main.sectionsItems.reference.title",
            message: "مرجع",
            description: "The title of section of reference in the Python course"
        }),
        description: translate({
            id: "pages.courses.python.main.sectionsItems.reference.description",
            message: "گاهی اوقات باید لبه‌ی دانشمون رو با مرور مفاهیم تیز کنیم",
            description: "The description of section of reference in the Python course"
        }),
        path: './python/reference',
        cover: '/img/general/steps.svg'
    }
]


const TITLE = translate({
    id: "pages.courses.python.main.title",
    message: "پایتون",
    description: "The main title in the Python course"
})

const DESCRIPTION = translate({
    id: "pages.courses.python.main.description",
    message: "وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم.",
    description: "The main description in the Python course"
})

const KEYWORDS = [
    'مسعود معبودی',
    'Massoud Maboudi',
    'دیتاگیت',
    'datagit',
    'datagit.ir',
    'مسعود معبودی رزومه',
    'رزومه مسعود معبودی',
    'Massoud Maboudi profile',
    'دیتا گیت',
    'مسعود معبودی دیتا گیت',
    'آموزش پایتون',
    'آموزش رایگان پایتون'
]

const HEADER_TITLE =
    <Translate
        id="pages.courses.python.main.headerTitle"
        description="The header title in the Python course"
        values={{ TITLE: TITLE }}>
        {'{TITLE}'}
    </Translate>

const HEADER_SUBTITLE = translate({
    id: "pages.courses.python.main.headerSubtitle",
    message: "پایتون یک زبان برنامه نویسی بسیار قدرتمند هست که در زمینه‌های مختلف مثل علم داده، ساخت وبسایت و حتی طراحی نرم افزار کاربرد داره.\n\nخوشبختانه این زبان قواعد ساده ای داره و برای همین یکی از بهترین گزینه‌ها برای شروع برنامه نویسی هستش.",
    description: "The header subtitle in the Python course"
})

function FeatureCards({ sections }) {
    return (
        <section className="container">
            <div className="row">
                {sections.map((section) => (
                    <div key={section.title} className={clsx(styles.main_card_col, "col col--4 margin-bottom--lg")}>
                        <FeatureCard
                            key={section.title} // Title should be unique
                            course={section}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

function SectionsInner() {
    return (
        <Layout
            title={TITLE}
            description={DESCRIPTION}
            keywords={KEYWORDS}
        >
            <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className={clsx(styles.header_logo, "col col--4")}>
                            <img className={styles.header_logo__img} src="/img/logos/python-logo.svg" />
                        </div>
                        <div className={clsx(styles.header_desc, "col col--6")}>
                            <img className={styles.header_desc__img_mobile} src="/img/logos/python-logo.svg" />
                            <div>
                                <h1 className={styles.header_desc__title}>{HEADER_TITLE}</h1>
                                <p className={styles.header_desc__subtitle}>{HEADER_SUBTITLE}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <main className="container margin-vert--lg">
                <FeatureCards sections={sectionsItems} />
            </main>
        </Layout >
    );
}

export default SectionsInner;
