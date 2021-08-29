import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="صفحه اصلی"
      description="وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم."
      keywords={['مسعود معبودی', 'Massoud Maboudi', 'دیتاگیت', 'datagit', 'datagit.ir', 'مسعود معبودی رزومه', 'رزومه مسعود معبودی', 'Massoud Maboudi profile', 'دیتا گیت', 'مسعود معبودی دیتا گیت', 'آموزش پایتون', 'آموزش رایگان پایتون']}>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={clsx(styles.custom_row, "row")}>
            <div className={clsx(styles.custom_col__4_col__offset_1, "col col--4 col--offset-1")}>
              <h1 className={styles.hero__title}>{siteConfig.title}</h1>
              <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--primary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  از کجا شروع کنم؟
                </Link>
              </div>
            </div>
            <div className={clsx(styles.custom_col__6_col__offset_1, "col col--6 col--offset-1")}>
              <img className={styles.heroImg} src="img/general/programmer.svg" alt='Programmer' />
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
