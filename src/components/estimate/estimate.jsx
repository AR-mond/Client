import React, { useMemo } from 'react';
import EstimateTable from '../estimate_table/estimate_table';
import EstimateSpace from '../estimate_space/estimate_space';
import HomeHeader from '../header/header';
import styles from './estimate.module.css';

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

  const data = useMemo(
    () => [
      // {
      //   name: 'Jordy.stl',
      //   size: '21x11x14 cm',
      //   volume: '1467cm^3',
      //   material: 'ABS',
      //   isClean: 'O',
      //   isPaint: 'O',
      //   nums: '1',
      //   price: '1,000,000원',
      // },
      // {
      //   name: 'Jordy.stl',
      //   size: '21x11x14 cm',
      //   volume: '1467cm^3',
      //   material: 'ABS',
      //   isClean: 'O',
      //   isPaint: 'O',
      //   nums: '1',
      //   price: '1,000,000원',
      // },
      // {
      //   name: 'Jordy.stl',
      //   size: '21x11x14 cm',
      //   volume: '1467cm^3',
      //   material: 'ABS',
      //   isClean: 'O',
      //   isPaint: 'O',
      //   nums: '1',
      //   price: '1,000,000원',
      // },
      // {
      //   name: 'Jordy.stl',
      //   size: '21x11x14 cm',
      //   volume: '1467cm^3',
      //   material: 'ABS',
      //   isClean: 'O',
      //   isPaint: 'O',
      //   nums: '1',
      //   price: '1,000,000원',
      // },
    ],
    []
  );

  return (
    <section className={styles.estimate}>
      <HomeHeader />
      <div className={styles.container}>
        {/* <h5 className={styles.step_name}>파일 업로드</h5> */}
        <div className={styles.title}>실시간 견적확인</div>
        <div className={styles.info}>원하시는 출력물의 견적을 받아보세요</div>
      </div>
      <EstimateSpace />
      <EstimateTable columns={columns} data={data} />
    </section>
  );
};

export default Estimate;
