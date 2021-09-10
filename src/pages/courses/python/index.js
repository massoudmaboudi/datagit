import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../styles.module.css';

import FeatureCard from '../../../components/Feature/FeatureCard';

const sectionsItems = [
    {
        title: 'آموزش ها',
        description: 'آموزش های پروژه محور، بهترین روش برای یادگیری هستن.',
        path: './python/tutorials',
        cover: '/img/general/pathway.svg'
    },
    {
        title: 'مثال ها',
        description: 'بهترین راه برای یادگیری، تمرین و کدنویسیه!',
        path: 'docs/',
        cover: '/img/general/console.svg'
    },
    {
        title: 'مرجع',
        description: 'گاهی اوقات باید لبه‌ی دانشمون رو با مرور مفاهیم تیز کنیم.',
        path: 'docs/',
        cover: '/img/general/steps.svg'
    }
]

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

const TITLE = 'پایتون'
const DESCRIPTION = "وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم."
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
    'آموزش رایگان پایتون']

const SECTION_TITLE = TITLE
const SECTION_SUBTITLE = `پایتون یک زبان برنامه نویسی بسیار قدرتمند هست که در زمنیه های مختلف مثل علم داده، ساخت وبسایت و حتی طراحی نرم افزار کاربرد داره.

خوشبختانه این زبان قواعد ساده ای داره و برای همین یکی از بهترین گزینه ها برای شروع برنامه نویسی هست`

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
                            <img className={styles.header_logo__img} src="/img/python/python-logo.svg" />
                        </div>
                        <div className={clsx(styles.header_desc, "col col--6")}>
                            <img className={styles.header_desc__img_mobile} src="/img/python/python-logo.svg" />
                            <div>
                                <h1 className={styles.header_desc__title}>{SECTION_TITLE}</h1>
                                <p className={styles.header_desc__subtitle}>{SECTION_SUBTITLE}</p>
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
