import React from 'react';
import styles from './title_subtitle.module.css';

export default function TitleSubtitle({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <img src="icon/step1.svg" alt="language"></img>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
