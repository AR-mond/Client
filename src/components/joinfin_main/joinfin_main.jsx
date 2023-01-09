import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './joinfin_main.module.css';

const JoinfinMain = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.main}>
            <div className={styles.check}></div>
            <div className={styles.changepw}>회원가입이 완료 되었습니다.</div>
            <div className={styles.thank}>저희 서비스를 이용해주셔서 감사합니다.</div>
            <div>
                <button className={styles.loginbtn}
                    onClick={() => {
                        navigate('/login');
                    }}>로그인
                </button>
            </div>
        </section>
    );
};

export default JoinfinMain;