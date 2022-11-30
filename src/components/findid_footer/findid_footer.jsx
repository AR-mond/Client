import React from 'react';
import styles from './findid_footer.module.css';

const FindidFooter = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>COMPANY</li>
        <li className={styles.menu_item}>SERVICES</li>
        <li className={styles.menu_item}>ABOUT</li>
        <li className={styles.menu_item}>REVIEWS</li>
      </ul>
      <ul className={styles.info}>
        <li className={styles.info_item}>상호 : (주)000 | 대표자명 : 000 </li>
        <li className={styles.info_item}>사업자등록번호 : 000-00-000000</li>
        <li className={styles.info_item}>연락처 : 000-0000-0000</li>
        <li className={styles.info_item}>
          이메일 : 00000@0000.com 주소: 00시 000 000 0000 00
        </li>
      </ul>
      <ul className={styles.terms}>
        <li className={styles.terms_item}>이용약관</li>
        <li className={styles.terms_item}>개인정보처리방침</li>
      </ul>
    </footer>
  );
};

export default FindidFooter;