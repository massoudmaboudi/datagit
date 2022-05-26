import React, { ComponentProps } from 'react';

import styles from './styles.module.css';

interface Props extends ComponentProps<'select'> {
  label: string;
}

function CourseSelect({ label, ...props }: Props) {
  const id = `course_select_id_${props.name};`;
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...props}>
        {props.children}
      </select>
    </div>
  );
}

export default CourseSelect;
