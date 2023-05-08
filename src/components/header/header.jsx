import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span
          className={styles.team_name}
          onClick={() => {
            navigate('/');
          }}
        >
          <span className={styles.team_name_highlight}>AR</span>MOND
        </span>
        <ul className={styles.menu}>
          <li
            className={styles.menu_item}
            onClick={() => {
              navigate('/services');
            }}
            >소개</li>
          <li className={styles.menu_item}
            onClick={() => {
              navigate('/guide');
            }}
            >가이드</li>
          <li className={styles.menu_item}
            onClick={() => {
              navigate('/support');
            }}>고객 지원</li>
          <li className={styles.menu_item}
            onClick={() => {
              navigate('/portfolio');
            }}>포트폴리오</li>
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
