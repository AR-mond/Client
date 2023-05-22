import React from 'react';
import styles from './pay.module.css';
import Header from '../header/header';
import EstimateTable from '../estimate_table/estimate_table';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Pay() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data.data;

  let total_price = 0;
  data.map(item => {
    total_price += parseInt(item.price.slice(0, -1));
    return 0;
  });

  const handleClick = () => {
    navigate('/pay/success');
  };

  return (
    <section className={styles.container}>
      <Header />
      <p className={styles.title}>결제</p>
      <div className={styles.marginY}>
        <div className={styles.title2}>파일</div>
        <EstimateTable data={data} />
      </div>
      <div className={styles.marginY}>
        <div className={styles.title2}>결제 수단</div>
        <div className={styles.container2}>
          <div className={styles.npay}>N Pay</div>
          <div className={styles.kpay}>Pay</div>
          <div className={styles.toss}>toss</div>
        </div>
      </div>
      <div className={styles.marginY}>
        <div className={styles.title2}>결제 항목</div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.between}>
              <p>예상 견적 금액</p>
              <p>{`${total_price} 원`}</p>
            </div>
            <div className={`${styles.between} ${styles.bottom_line}`}>
              <p>배송 비용</p>
              <p>3000 원</p>
            </div>
            <hr />
            <div className={styles.between}>
              <p>예상 총 결제 금액</p>
              <p>{`${total_price + 3000} 원`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.marginY}>
        <div className={styles.title2}>요청 사항</div>
        <textarea
          className={styles.textarea}
          placeholder="제조 특이사항 및 상세한 가공 요청을 입력해 주세요."
        ></textarea>
      </div>
      <div className={styles.btn} onClick={handleClick}>
        견적 요청
      </div>
    </section>
  );
}
