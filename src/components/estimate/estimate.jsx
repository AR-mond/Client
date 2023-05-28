import React from 'react';
import EstimateTable from '../estimate_table/estimate_table';
import EstimateSpace from '../estimate_space/estimate_space';
import Header from '../header/header';
import styles from './estimate.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Estimate = () => {
  const navigate = useNavigate();
  // 임의 데이터 집합
  const [data, setData] = useState([]);

  // 모델링 파일 정보를 데이터 집합 data에 추가
  const handleAdd = file => {
    setData(datas => {
      const updated = [...datas];
      updated.push(file);
      return updated;
    });
  };

  const handleClick = () => {
    if (data.length > 0) {
      navigate('/pay', {
        state: {
          data: { data },
        },
      });
    }
  };

  const handleDelete = id => {
    setData(datas => {
      return datas.filter((item, index) => {
        return parseInt(id) !== index;
      });
    });
  };

  return (
    <section className={styles.estimate}>
      <Header />
      <p className={styles.title}>실시간 견적확인</p>
      <p className={styles.subtitle}>원하시는 출력물의 견적을 받아보세요</p>
      <EstimateSpace onAdd={handleAdd} />
      <EstimateTable data={data} onDelete={handleDelete} canDelete={true} />
      <div className={styles.btns}>
        {/* <div className={styles.caustion_btn}>견적 주의사항</div> */}
        <div className={styles.request_btn} onClick={handleClick}>
          견적 요청
        </div>
      </div>
      {/* <Modal isOpen={modalOpen} handleClose={close => setModalOpen(close)} /> */}
    </section>
  );
};

export default Estimate;
