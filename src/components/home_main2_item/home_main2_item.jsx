import React from 'react';
import styles from './home_main2_item.module.css';

const HomeMain2Item = ({ img, title }) => {
  return (
    <li className={styles.item}>
      <img src={img} alt="" className={styles.itemImg} />
      <span className={styles.title}>{title}</span>
    </li>
  );
};

export default HomeMain2Item;
