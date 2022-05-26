import React, { memo } from 'react';

import styles from './styles.module.css';
import clsx from 'clsx';

const FeatureCardNoImgNoDesc = memo(function ({ course }: { course: any }) {
  return (
    <a className={styles.course_feature_link} href={course.path}>
      <div className={clsx('card', styles.featureCard)}>
        {/* <div className={clsx('card__image', styles.featureCardImage)}>
          <Image img={course.preview} alt={course.title} />
        </div> */}
        <div className="card__body">
          <div className="avatar">
            <div className="avatar__intro margin-left--none">
              <div className={styles.titleIconsRow}>
                <div className={clsx(styles.counter)}>{course.id}</div>
                <div className={styles.titleIconsRowTitle}>
                  <div className="avatar__name">{course.title}</div>
                  {/* <p className={clsx(styles.titleIconsRowSubTitle, "avatar__subtitle")}>{course.title}</p> */}
                </div>
                {/* <div className={styles.titleIconsRowIcons}>
                  <FeatureTagIcons tags={course.tags} />
                </div> */}
              </div>
              {/* <small className="avatar__subtitle">{course.description}</small> */}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
});

export default FeatureCardNoImgNoDesc;