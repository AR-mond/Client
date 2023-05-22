import React from 'react';
import styles from './pay_success.module.css';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';

export default function PaySuccess() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <section className={styles.container}>
      <Header />
      <img className={styles.icon} src="/icon/green_check.svg" alt="" />
      <p className={styles.title}>견적서 업로드가 완료되었습니다.</p>
      <p className={styles.sub_title}>
        요청하신 문의사항 답변은 마이페이지에서 확인 가능합니다.
      </p>
      <div className={styles.btn} onClick={handleClick}>
        메인 페이지로
      </div>
    </section>
  );
}
