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
        href: 'https://t.me/massoudmaboudi',
        desc: 'Telegram IDTelegram IDTelegram IDTelegram IDTelegram IDTelegram IDTelegram IDTelegram ID',
        img: '/img/general/undraw_Through_the_desert_re_1q2x.svg'
    },
    {
        title: 'مثال ها',
        href: 'http://wa.me/905380471631',
        desc: 'WhatsApp ID',
        img: '/img/general/undraw_product_iteration_kjok.svg'
    },
    {
        title: 'مرجع',
        href: 'mailto:massoud.maboudi@gmail.com',
        desc: 'Email ID',
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
                    <small>{desc}</small>
                </div>
                <div className={clsx("card__footer", styles.custom_card__footer)}>
                    <button class="button button--primary button--outline">ادامه</button>
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
                        <div className="col col--6">
                            <img className={styles.headerImgMobile} src="/img/python/python-logo.svg" />
                            <div>
                                <h2 className={styles.course__title}>آموزش زبان برنامه نویسی پایتون</h2>
                                <p className={styles.course__subtitle}>با توجه به اینکه پایتون در حال حاضر یکی از بهترین زبان های برنامه نویسی دنیا هستش، اگر الان نخواید یاد بگیریدش، پس کِی میخواید برید سراغش؟</p>
                                <p className={styles.course__subtitle}>آموزش ها و مثال های کاربردی دیتاگیت به شما کمک میکنه تا قدم به قدم خودتون رو توی پایتون قوی تر کنید.  </p>
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
