import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const profilePicture = [
  {
    title: 'مسعود معبودی',
    description: 'یک انسان عادی که از کمک کردن به بقیه خوشحال میشه.',
    imageUrl: '/img/general/massoudmaboudi.png',
    alt: 'Massoud Maboudi'
  }
]

const socialMedia = [
  {
    imageUrl: '/img/socialMedia/telegram.png',
    href: 'https://t.me/massoudmaboudi',
    alt: 'Telegram ID'
  },
  {
    imageUrl: '/img/socialMedia/whatsapp.png',
    href: 'http://wa.me/905380471631',
    alt: 'WhatsApp ID'
  },
  {
    imageUrl: '/img/socialMedia/email.png',
    href: 'mailto:massoud.maboudi@gmail.com',
    alt: 'Email ID'
  },
  {
    imageUrl: '/img/socialMedia/linkedin.png',
    href: 'https://linkedin.com/in/massoud-maboudi',
    alt: 'LinkedIn Profile'
  }
]

function ProfilePicture({ title, description, imageUrl, alt }) {
  return (
    <div className={"avatar avatar--vertical"}>
      <img
        className={clsx(styles.profile__picture, "avatar__photo avatar__photo--xl")}
        src={useBaseUrl(imageUrl)}
        alt={alt}
      />
      {/* <Image className={clsx(styles.profile__picture, "avatar__photo avatar__photo--xl")} img={imageUrl} /> */}
      <div className={"avatar__intro"}>
        <h2 className={styles.avatar__title}>{title}</h2>
        <small className={styles.avatar__subtitle}>{description}</small>
      </div>
    </div>
  );
}

function SocialMedia({ imageUrl, href, alt }) {
  return (
    <div className={"avatar"}>
      <a
        href={href}
      >
        <img
          className={clsx(styles.social__media_pic, "avatar__photo avatar__photo--sm")}
          src={useBaseUrl(imageUrl)}
          alt={alt}
        />
      </a>
    </div>
  );
}

function Support() {
  return (
    <Layout
      title="تماس با من"
      description="توی این صفحه میتونید راه های ارتباط با من رو پیدا کنید. میتونید نظرتون رو بهم بگید یا اینکه یه آموزش جدید درخواست بدید. راستی، راجع به همکاری هم میتونیم صحبت کنیم."
      keywords={['مسعود معبودی', 'Massoud Maboudi', 'دیتاگیت', 'datagit', 'datagit.ir', 'مسعود معبودی رزومه', 'رزومه مسعود معبودی', 'Massoud Maboudi profile', 'دیتا گیت', 'مسعود معبودی دیتا گیت', 'آموزش پایتون', 'آموزش رایگان پایتون']}>
      <div className={clsx(styles.custom_container)}>
        <header className={clsx(styles.heroBanner_contactus, 'hero hero--primary')}>
          <div className='container'>
            <h1 className={styles.hero__title_contactus}>دیتاگیت</h1>
            <p className={styles.hero__subtitle_contactus}>توی این صفحه میتونید راه های ارتباط با من رو پیدا کنید. میتونید نظرتون رو بهم بگید یا اینکه یه آموزش جدید درخواست بدید.</p>
            <p className={styles.hero__subtitle_contactus}>راستی، راجع به همکاری هم میتونیم صحبت کنیم.</p>
          </div>
        </header>
        <main className={styles.main_features}>
          {profilePicture && profilePicture.length > 0 && (
            <section className={styles.profile__picture_features}>
              <div className={"container"}>
                {profilePicture.map((props, idx) => (
                  <ProfilePicture key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
          {socialMedia && socialMedia.length > 0 && (
            <section className={styles.social__media_features}>
              <div className={"container"}>
                <div className={clsx("row", styles.center__row)}>
                  {socialMedia.map((props, idx) => (
                    <SocialMedia key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default Support;
