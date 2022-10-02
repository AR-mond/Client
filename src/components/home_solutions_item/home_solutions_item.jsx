import React from 'react';
import styles from './home_solutions_item.module.css';

const HomeSolutionsItem = ({ img, title, info }) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" className={styles.itemImg} />
      </div>

      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.title}>{title}</div>
          <p className={styles.info}>{info}</p>
        </div>
        <div className={styles.moreBtn}>
          <span className={styles.btnTitle}>더보기</span>
          <img src="icon/more.svg" alt="more" />
        </div>
      </div>
    </li>
  );
};

export default HomeSolutionsItem;
