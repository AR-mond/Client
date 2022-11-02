import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './estimate_space.module.css';

const EstimateSpace = () => {
  const [isCleanCheck, setIsCleanCheck] = useState(false);
  const [isPaintingCheck, setIsPaintingCheck] = useState(false);

  const fileInput = useRef(null);

  const handleFileButtonClick = e => {
    fileInput.current.click();
  };

  const handleChange = e => {
    console.log(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.file_box}>
        <div className={styles.file_btn} onClick={handleFileButtonClick}>
          파일 선택
        </div>
        <input
          type="file"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.material}>
          <div className={styles.material_title}>소재</div>
          <div className={styles.material_dropdown}>ABS</div>
        </div>
        <div className={styles.nums}>
          <div className={styles.nums_title}>수량</div>
          <div className={styles.nums_btns}>
            <div className={styles.nums_minus_btn}>-</div>
            <div className={styles.nums_plus_btn}>+</div>
          </div>
        </div>
        <div className={styles.clean}>
          <div className={styles.clean_title}>후처리 여부</div>
          <div className={styles.clean_checkbox}>O</div>
        </div>
        <div className={styles.painting}>
          <div className={styles.painting_title}>도색 여부</div>
          <div className={styles.painting_checkbox}>O</div>
        </div>
        <div className={styles.btns}>
          <div className={styles.add_btn}>파일 추가</div>
          <div className={styles.estimate_btn}>견적 문의</div>
        </div>
      </div>
    </div>
  );
};

export default EstimateSpace;
