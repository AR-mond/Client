import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './changepw_main.module.css';

const ChangepwMain = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.main}>
            <div className={styles.check}></div>
            <div className={styles.changepw}>고객님의 비밀번호가 변경되었습니다.</div>
            <div className={styles.thank}>저희 서비스를 이용해주셔서 감사합니다.</div>
            <div>
                <button 
                    onClick={() => {
                        navigate('/login');
                    }}
                    className={styles.loginbtn}>로그인
                </button>
            </div>
        </section>
    );
};

export default ChangepwMain;