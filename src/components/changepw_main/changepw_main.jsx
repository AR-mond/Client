import React from 'react';
import styles from './changepw_main.module.css';

const ChangepwMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.check}></div>
            <div className={styles.changepw}>고객님의 비밀번호가 변경되었습니다.</div>
            <div className={styles.thank}>저희 서비스를 이용해주셔서 감사합니다.</div>
            <div>
                <button className={styles.loginbtn}>로그인</button>
            </div>
        </section>
    );
};

export default ChangepwMain;