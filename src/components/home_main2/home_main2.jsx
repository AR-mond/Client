import React from 'react';
import HomeMain2Item from '../home_main2_item/home_main2_item';
import styles from './home_main2.module.css';

const HomeMain2 = () => {
  return (
    <>
      <ul className={styles.list}>
        <HomeMain2Item
          img={'images/sample_img_ar.jpg'}
          title={'설계 모델 자동 견적'}
        />
        <HomeMain2Item
          img={'images/sample_img_ar.jpg'}
          title={'증강현실 프리뷰'}
        />
        <HomeMain2Item
          img={'images/sample_img_ar.jpg'}
          title={'3D 프린팅/CNC 제조'}
        />
      </ul>
      {/* <div className={styles.inquireBtn}>
        <span className={styles.btnTitle}>1대1 문의</span>
      </div> */}
    </>
  );
};

export default HomeMain2;
