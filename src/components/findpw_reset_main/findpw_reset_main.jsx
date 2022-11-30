import React from 'react';
import styles from './findpw_reset_main.module.css';

const FindpwResetMain = () => {
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
                    <div className={styles.check}></div>
                    <div className={styles.linktitle}>휴대폰 인증링크 발송 완료</div>
                    <div className={styles.link}>비밀번호 재설정을 위한 링크가 고객님의 휴대폰 번호로 전송되었습니다.</div>
                </div>
            </div>
        </section>
    );
};

export default FindpwResetMain;