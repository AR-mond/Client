import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home_estimate.module.css';

const HomeEstimate = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.estimate}>
      <div className={styles.info}>나만의 제품을 제작할 준비가 되었나요?</div>
      <div
        className={styles.estimateBtn}
        onClick={() => {
          navigate('/estimate');
        }}
      >
        지금 바로 견적 내기
      </div>
    </section>
  );
};

export default HomeEstimate;
