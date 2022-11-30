import React from 'react';
import styles from './findid_main.module.css';

const FindidMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>아이디/비밀번호 찾기
                <div className={styles.box}>
                    <div className={styles.find}>
                        <div className={styles.idpw}>
                        <div className={styles.id}>아이디 찾기</div>
                        <div className={styles.pw}>비밀번호 찾기</div>
                        </div>
                    </div>
                    <div className={styles.method}>아이디를 찾는 방법을 선택해 주세요</div>
                    <div className={styles.methodbox}>
                        <div className={styles.phoneemail}>
                            <div className={styles.phone}>휴대폰으로 찾기</div>
                            <div className={styles.email}>이메일로 찾기</div>
                        </div>
                    </div>
                    <div className={styles.inputname}>
                        <input
                            className={styles.input}
                            placeholder="이름을 입력하세요"/>
                    </div>
                    <div className={styles.inputnumber}>
                        <input 
                            className={styles.input}
                            placeholder="휴대폰 번호를 입력하세요"/>
                    </div>
                    <div>
                        <button className={styles.nextbtn}>다음</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindidMain;