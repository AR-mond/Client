import React, { useMemo } from 'react';
import EstimateTable from '../estimate_table/estimate_table';
import EstimateSpace from '../estimate_space/estimate_space';
import HomeHeader from '../header/header';
import styles from './estimate.module.css';
import { useState } from 'react';

const Estimate = () => {
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

  const [data, setData] = useState([
    {
      name: 'Jordy.stl',
      size: '21x11x14 cm',
      volume: '1467cm^3',
      material: 'ABS',
      isClean: true,
      isPaint: true,
      nums: 1,
      price: '1,000,000원',
      file: {},
    },
    {
      name: 'Jordy.stl',
      size: '21x11x14 cm',
      volume: '1467cm^3',
      material: 'ABS',
      isClean: true,
      isPaint: true,
      nums: 1,
      price: '1,000,000원',
      file: {},
    },
  ]);

  const files = useMemo(() => {
    // data는 바뀌면 안 되는데 data의 boolean값이 string으로 바뀌는 문제 - 나중에 해결해보기!!!!
    const a = [...data];
    return a.map(item => {
      item.isClean = item.isClean ? 'O' : 'X';
      item.isPaint = item.isPaint ? 'O' : 'X';
      console.log(item);
      return item;
    });
  }, [data]);

  const handleAdd = file => {
    setData(datas => {
      const updated = [...datas];
      updated.push(file);
      return updated;
    });
    console.log(data);
  };

  return (
    <section className={styles.estimate}>
      <HomeHeader />
      <div className={styles.container}>
        {/* <h5 className={styles.step_name}>파일 업로드</h5> */}
        <img src="icon/step1.svg" alt="language"></img>
        <div className={styles.title}>실시간 견적확인</div>
        <div className={styles.info}>원하시는 출력물의 견적을 받아보세요</div>
      </div>
      <EstimateSpace onAdd={handleAdd} />
      <EstimateTable columns={columns} data={files} />
      <div className={styles.btns}>
        <div className={styles.caustion_btn}>견적 주의사항</div>
        <div className={styles.request_btn}>견적 요청</div>
      </div>
    </section>
  );
};

export default Estimate;
