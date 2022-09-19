import React from 'react';
import styles from './home_footer.module.css';

const HomeFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>상호 : (주)000 | 대표자명 : 000 </div>
      <div className={styles.footer_text}>사업자등록번호 : 000-00-000000</div>
      <div className={styles.footer_text}>연락처 : 000-0000-0000</div>
      <div className={styles.footer_text}>
        이메일 : 00000@0000.com 주소: 00시 000 000 0000 00
      </div>
    </footer>
  );
};

export default HomeFooter;
