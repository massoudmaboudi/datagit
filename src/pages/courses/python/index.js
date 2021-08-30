import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';


const courseItems = [
    {
        title: 'آموزش ها',
        href: 'docs/',
        desc: 'آموزش های پروژه محور، بهترین روش برای یادگیری هستن.\n\nآموزش های مقدماتی دیتاگیت به شما کمک میکنه تا شروع راحتی داشته باشید و آموزش های پیشرفته هم مفاهیم و کتابخانه های مختلف رو به شما معرفی میکنه.',
        img: '/img/general/undraw_Through_the_desert_re_1q2x.svg'
    },
    {
        title: 'مثال ها',
        href: 'docs/',
        desc: 'بهترین راه برای یادگیری پایتون، تمرین و کدنویسی هست.\n\nتوی این قسمت میتونید مثال های مختلفی رو پیدا کنید که مفاهیم مختلف پایتون رو به صورت پروژه توضیح میدن. پیشنهاد میکنم که این مثال ها ببینید ولی سعی کنید خودتون کدنویسی کنید.',
        img: '/img/general/undraw_product_iteration_kjok.svg'
    },
    {
        title: 'مرجع',
        href: 'docs/',
        desc: 'گاهی اوقات باید لبه دانشمون رو با مرور مفاهیم تیز کنیم.\n\nاین قسمت منبع خوبی برای مرور توابع اصلی پایتون هست و کاربرد هر مورد رو میتونید با مثال بررسی کنید.',
        img: '/img/general/undraw_camping_noc8.svg'
    }
]

function CourseItems({ title, desc, href, img }) {
    return (
        <div className={clsx("col ", styles.custom_col_course)}>
            <div className={clsx("card", styles.custom_card)}>
                <div className={clsx("card__image", styles.custom_card__image)}>
                    <img
                        src={img}
                        alt={title}
                        title={title}
                    />
                </div>
                <div class="card__body">
                    <h3>{title}</h3>
                    <small className={styles.custom_small}>{desc}</small>
                </div>
                <div className={clsx("card__footer", styles.custom_card__footer)}>
                    <Link
                        class="button button--primary button--outline"
                        to={useBaseUrl(href)}>
                        ادامه
                    </Link>
                </div>
            </div>
        </div >
    );
}

function CourseInner() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="پایتون"
            description="وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم."
            keywords={['مسعود معبودی', 'Massoud Maboudi', 'دیتاگیت', 'datagit', 'datagit.ir', 'مسعود معبودی رزومه', 'رزومه مسعود معبودی', 'Massoud Maboudi profile', 'دیتا گیت', 'مسعود معبودی دیتا گیت', 'آموزش پایتون', 'آموزش رایگان پایتون']}
        >
            <header className={styles.courseHeader}>
                <div className="container">
                    <div className="row">
                        <div className={clsx(styles.course_logo_div, "col col--4")}>
                            <img className={styles.headerImg} src="/img/python/python-logo.svg" />

                        </div>
                        <div className={clsx(styles.course_desc_div, "col col--6")}>
                            <img className={styles.headerImgMobile} src="/img/python/python-logo.svg" />
                            <div>
                                <h2 className={styles.course__title}>آموزش زبان برنامه نویسی پایتون</h2>
                                <p className={styles.course__subtitle}>پایتون یک زبان برنامه نویسی بسیار قدرتمند هست که در زمنیه های مختلف مثل علم داده، ساخت وبسایت و حتی طراحی نرم افزار کاربرد داره.<br /><br />خوشبختانه این زبان قواعد ساده ای داره و برای همین یکی از بهترین گزینه ها برای شروع برنامه نویسی هست.</p>
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
            <div className="container">
                <div class={styles.card_item_container}>
                    <div class="row">
                        {courseItems.map((props, idx) => (
                            <CourseItems key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default CourseInner;
