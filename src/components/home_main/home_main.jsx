import React from 'react';
import styles from './home_main.module.css';

const HomeMain = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>설계 모델 증강현실 자동 견적 서비스</h1>
        <p className={styles.info}>
          설계 모델 자동 분석과 증강현실 프리뷰를 하이쓰리디에서 한번에
          해결하세요.
        </p>
        <div className={styles.startBtn}>
          <span className={styles.btnTitle}>지금 시작하기</span>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
