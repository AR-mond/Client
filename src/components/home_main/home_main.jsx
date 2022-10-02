import React from 'react';
import styles from './home_main.module.css';

const HomeMain = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <p className={styles.p1}>
          3D 모델 AR프리뷰와
          <br /> 설계제작까지
        </p>
        <p className={styles.p2}>
          아몬드 <span className={styles.highlight}>ArToArt</span>에서
        </p>
        <p className={styles.p3}>
          완성도 높고 신뢰할 만한 품질의 <br />
          설계 모델 자동 분석, 증강현실 프리뷰와
          <br />
          실제 제작을 아몬드에서 해결하세요
        </p>
        <div className={styles.startBtn}>
          <span className={styles.btnTitle}>바로가기</span>
          <img src="icon/next.svg" />
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
