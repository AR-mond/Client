import React, { useState } from "react";
import styles from './support_main.module.css';
import SupportNotice from "../support_notice/support_notice";
import SupportFaq from "../support_faq/support_faq";


const SupportMain = () => {
    const [showNotice, setShowNotice] = useState(false);
    const [showFaq, setShowFaq] = useState(false);

    function handleNoticeClick() {
        setShowNotice(true);
        setShowFaq(false);
    }

    function handleFaqClick() {
        setShowNotice(false);
        setShowFaq(true);
    }

    return (
        <div className={styles.main}>
            <div className={styles.intro}>
                <div className={styles.introe}>Customer Support</div>
                <div className={styles.introk}>고객 지원</div>
            </div>
            <div className={styles.com}>
                <div className={styles.title}>공지사항</div>
                <div className={styles.com2}>
                    <div className={styles.littletitle} onClick={handleNoticeClick}>공지사항</div>
                    <div className={styles.littletitle}> | </div>
                    <div className={styles.littletitle} onClick={handleFaqClick}>FAQ</div>
                </div>
                {showNotice && <SupportNotice />}
                {showFaq && <SupportFaq />}
            </div>
        </div>
    );
};

export default SupportMain;