import React from 'react';
import styles from './home_header.module.css';

const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span>하이쓰리디</span>
        <ul className={styles.menu}>
          <li>SERVICES</li>
          <li>RESOURCES</li>
          <li>CONTACTS</li>
          <li>REVIEWS</li>
          <li>NEWS LETTER</li>
        </ul>
      </div>
      <ul className={styles.setting}>
        <li>
          <img></img>
          <span>Account</span>
        </li>
        <li>
          <img></img>
          <span>Language</span>
        </li>
      </ul>
    </header>
  );
};

export default HomeHeader;
