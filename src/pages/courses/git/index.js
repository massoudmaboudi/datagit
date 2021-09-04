import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

const sectionsItems = [
    {
        title: 'آموزش ها',
        href: 'docs/',
        desc: 'آموزش های پروژه محور، بهترین روش برای یادگیری هستن.',
        img: '/img/general/courseway.svg'
    },
    {
        title: 'مثال ها',
        href: 'docs/',
        desc: 'بهترین راه برای یادگیری، تمرین و کدنویسی هست.',
        img: '/img/general/console.svg'
    },
    {
        title: 'مرجع',
        href: 'docs/',
        desc: 'گاهی اوقات باید لبه دانشمون رو با مرور مفاهیم تیز کنیم.',
        img: '/img/general/steps.svg'
    }
]

function SectionsItems({ title, desc, href, img }) {
    return (
        <div className={clsx("col col--4", "item shadow--lw", styles.course_feature_card)} >
            <a className={styles.course_feature_link} href={href}>
                <div>
                    <img className={styles.course_svg_icon} src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{desc}</small>
            </a>
        </div>
    );
}

function SectionsInner() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="پایتون"
            description="وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم."
            keywords={['مسعود معبودی', 'Massoud Maboudi', 'دیتاگیت', 'datagit', 'datagit.ir', 'مسعود معبودی رزومه', 'رزومه مسعود معبودی', 'Massoud Maboudi profile', 'دیتا گیت', 'مسعود معبودی دیتا گیت', 'آموزش پایتون', 'آموزش رایگان پایتون']}
        >
            <header className={styles.sectionsHeader}>
                <div className="container">
                    <div className="row">
                        <div className={clsx(styles.sections_logo_div, "col col--4")}>
                            <img className={styles.headerImg} src="/img/python/python-logo.svg" />

                        </div>
                        <div className={clsx(styles.sections_desc_div, "col col--6")}>
                            <img className={styles.headerImgMobile} src="/img/python/python-logo.svg" />
                            <div>
                                <h2 className={styles.sections__title}>آموزش زبان برنامه نویسی پایتون</h2>
                                <p className={styles.sections__subtitle}>پایتون یک زبان برنامه نویسی بسیار قدرتمند هست که در زمنیه های مختلف مثل علم داده، ساخت وبسایت و حتی طراحی نرم افزار کاربرد داره.<br /><br />خوشبختانه این زبان قواعد ساده ای داره و برای همین یکی از بهترین گزینه ها برای شروع برنامه نویسی هست.</p>
                                {/* <div className="search"> */}
                                {/* <input
                                    className={classnames("shadow--lw", styles.cookbookSearch)}
                                    type="text"
                                    onChange={(event) => setSearchTerm(event.currentTarget.value)}
                                    placeholder="🔍 Search..." /> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <main>
                <div className={styles.course_features}>
                    <div class="container">
                        <div className={clsx("row", styles.course_features_row)}>
                            {sectionsItems.map((props, idx) => (
                                <SectionsItems key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}

export default SectionsInner;
