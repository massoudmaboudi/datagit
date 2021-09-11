import React, { memo } from 'react';

import styles from './styles.module.css';
import clsx from 'clsx';

const FeatureCard = memo(function ({ course }: { course: any }) {
  return (
      <a className={styles.course_feature_link} href={course.path}>
        <div className={clsx('card', styles.featureCard)}>
          <div className={clsx('card__image', styles.featureCardImage)}>
            <img src={course.cover} alt={course.title} />
          </div>
          <div className="card__body">
            <div className="avatar">
              <div className="avatar__intro margin-left--none">
                <div className={styles.titleIconsRow}>
                  <div className={styles.titleIconsRowTitle}>
                    <div className="avatar__name">{course.title}</div>
                  </div>
                  {/* <div className={styles.titleIconsRowIcons}>
                  <FeatureTagIcons tags={course.tags} />
                </div> */}
                </div>
                <small className="avatar__subtitle">{course.description}</small>
              </div>
            </div>
          </div>
        </div>
      </a>
  );
});

export default FeatureCard;