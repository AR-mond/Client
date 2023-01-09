import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './resetpw_main.module.css';

const ResetpwMain = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.main}>
            <div className={styles.container}>비밀번호 재설정
                <div className={styles.box}>
                    <div className={styles.reset}>비밀번호를 재설정 하세요.</div>
                    <div className={styles.inputpw}>
                        <input
                            className={styles.input}
                            placeholder="비밀번호"/>
                    </div>
                    <div className={styles.inputnewpw}>
                        <input 
                            className={styles.input}
                            placeholder="비밀번호 재입력"/>
                    </div>
                    <div>
                        <button 
                            onClick={() => {
                                navigate('/changepw');
                            }}
                            className={styles.pwbtn}>비밀번호 재설정</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResetpwMain;