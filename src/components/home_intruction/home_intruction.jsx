import React from 'react';
import styles from './home_intruction.module.css';

const HomeIntruction = () => {
  return (
    <section className={styles.intruction}>
      <div className={styles.title}>Intruction</div>
      <div className={styles.info}>나의 아이디어를 현실로</div>
      <iframe
        className={styles.video}
        id="ytplayer"
        type="text/html"
        width="700px"
        height="400px"
        src="https://www.youtube.com/embed/Jd2GK0qDtRg"
        frameBorder="0"
        allowFullScreen
      />
      <div className={styles.moreBtn}>
        <span className={styles.btnTitle}>더보기</span>
        <img src="icon/next.svg" alt="more" />
      </div>
    </section>
  );
};

export default HomeIntruction;
