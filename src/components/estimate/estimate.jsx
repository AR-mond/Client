import React, { useMemo } from 'react';
import EstimateTable from '../estimate_table/estimate_table';
import EstimateSpace from '../estimate_space/estimate_space';
import Header from '../header/header';
import styles from './estimate.module.css';
import { useState } from 'react';

const Estimate = () => {
  // 리액트 테이블 column
  const columns = useMemo(
    () => [
      {
        accessor: 'name',
        Header: '파일명',
      },
      {
        accessor: 'size',
        Header: '사이즈',
      },
      {
        accessor: 'volume',
        Header: '볼륨',
      },
      {
        accessor: 'material',
        Header: '소재',
      },
      {
        accessor: 'isClean',
        Header: '후처리',
      },
      {
        accessor: 'isPaint',
        Header: '도색',
      },
      {
        accessor: 'nums',
        Header: '수량',
      },
      {
        accessor: 'price',
        Header: '예상견적금액',
      },
    ],
    []
  );

  // 임의 데이터 집합
  const [data, setData] = useState([
    // {
    //   name: 'Jordy.stl',
    //   size: '21x11x14 cm',
    //   volume: '1467cm^3',
    //   material: 'ABS',
    //   isClean: true,
    //   isPaint: true,
    //   nums: 1,
    //   price: '1,000,000원',
    //   file: {},
    // },
    // {
    //   name: 'Jordy.stl',
    //   size: '21x11x14 cm',
    //   volume: '1467cm^3',
    //   material: 'ABS',
    //   isClean: true,
    //   isPaint: true,
    //   nums: 1,
    //   price: '1,000,000원',
    //   file: {},
    // },
  ]);

  // 모델링 파일 정보를 데이터 집합 data에 추가
  const handleAdd = file => {
    setData(datas => {
      const updated = [...datas];
      updated.push(file);
      return updated;
    });
  };

  // const handleModal = isOpen => {
  //   setModalOpen(isOpen);
  // };

  return (
    <section className={styles.estimate}>
      <Header />
      <p className={styles.title}>실시간 견적확인</p>
      <p className={styles.subtitle}>원하시는 출력물의 견적을 받아보세요</p>
      <EstimateSpace onAdd={handleAdd} />
      <EstimateTable columns={columns} data={data} />
      <div className={styles.btns}>
        <div className={styles.caustion_btn}>견적 주의사항</div>
        <div className={styles.request_btn}>견적 요청</div>
      </div>
      {/* <Modal isOpen={modalOpen} handleClose={close => setModalOpen(close)} /> */}
    </section>
  );
};

export default Estimate;
