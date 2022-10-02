import React from 'react';
import HomeSolutionsItem from '../home_solutions_item/home_solutions_item';
import styles from './home_solutions.module.css';

const HomeSolutions = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.title}>Solutions</div>
      <div className={styles.info}>간편하게 AR 리디자인부터 제조까지</div>
      <ul className={styles.list}>
        <div className={styles.solution1}>
          <HomeSolutionsItem
            img={'images/solution1.png'}
            title={'설계 자동 견적'}
            info={
              '3D 모델을 업로드하여 색상, 재료, 생산공정 등에 따른 설계 모델의 예상단가 및 기간을 확인하세요'
            }
          />
        </div>
        <div className={styles.solution2}>
          <HomeSolutionsItem
            className={styles.solution2}
            img={'images/solution2.png'}
            title={'증강현실 뷰'}
            info={
              '증강현실 상에서 모델의 위치와 크기를 조정하고 색을 변경하며 현실감 높은 프리뷰를 경험하세요'
            }
          />
        </div>
        <div className={styles.solution3}>
          <HomeSolutionsItem
            className={styles.solution3}
            img={'images/solution3.png'}
            title={'3D 프린팅 제작'}
            info={
              '3D 프린터를 활용하여 원하는 재질, 크기, 색상, 모습의 제품을 보다 빠르게 제작하여 고객에게 배송합니다'
            }
          />
        </div>
      </ul>
      {/* <div className={styles.inquireBtn}>
        <span className={styles.btnTitle}>1대1 문의</span>
      </div> */}
    </section>
  );
};

export default HomeSolutions;
