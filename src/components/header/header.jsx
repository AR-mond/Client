import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.team_name}>
          <span className={styles.team_name_highlight}>AR</span>MOND
        </span>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>SERVICES</li>
          <li className={styles.menu_item}>RESOURCES</li>
          <li className={styles.menu_item}>CONTACTS</li>
          <li className={styles.menu_item}>REVIEWS</li>
          <li className={styles.menu_item}>NEWS LETTER</li>
        </ul>
      </div>

      <ul className={styles.setting}>
        <li
          className={styles.setting_item}
          onClick={() => {
            navigate('/login');
          }}
        >
          <img src="icon/account.svg" alt="account"></img>
        </li>
        <li className={styles.setting_item}>
          <img src="icon/language.svg" alt="language"></img>
        </li>
      </ul>
    </header>
  );
};

export default Header;