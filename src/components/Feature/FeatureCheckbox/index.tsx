import React, { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface Props extends ComponentProps<'input'> {
  label: ReactNode;
}

function FeatureCheckbox({ title, className, label, ...props }: Props) {
  const id = `feature_checkbox_id_${props.name};`;
  return (
    <div className={clsx(className, styles.checkboxContainer)} title={title}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default FeatureCheckbox;