import React from 'react';
import styles from './home_header.module.css';

const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span>하이쓰리디</span>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>SERVICES</li>
          <li className={styles.menu_item}>RESOURCES</li>
          <li className={styles.menu_item}>CONTACTS</li>
          <li className={styles.menu_item}>REVIEWS</li>
          <li className={styles.menu_item}>NEWS LETTER</li>
        </ul>
      </div>
      <ul className={styles.setting}>
        <li className={styles.setting_item}>
          <img></img>
          <span>Account</span>
        </li>
        <li className={styles.setting_item}>
          <img></img>
          <span>Language</span>
        </li>
      </ul>
    </header>
  );
};

export default HomeHeader;
