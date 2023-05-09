import React from "react";
import styles from './guide_main.module.css';


const GuideMain = () => {


    return (
        <div className={styles.main}>
            <div className={styles.intro}>
                <div className={styles.introe}>Guide</div>
                <div className={styles.introk}>가이드</div>
            </div>
            <div className={styles.com}>
                <div className={styles.title}>이용 가이드</div>
                <img style={{height:'15px'}}src="icon/more2.svg" alt="more" />
            </div>
            <div className={styles.com}>
                <div className={styles.title}>재료 가이드</div>
                <img style={{height:'15px'}}src="icon/more2.svg" alt="more" />
            </div>
            <div className={styles.com}>
                <div className={styles.title}>설계 디자인 가이드</div>
                <img style={{height:'15px'}}src="icon/more2.svg" alt="more" />
            </div>
        </div>
    );
};

export default GuideMain;