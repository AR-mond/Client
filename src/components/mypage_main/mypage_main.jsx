import React from 'react';
import styles from './mypage_main.module.css';
import MypageTable from '../mypage_table/mypage_table';

const MypageMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.my3dmodel}>나의 3D 모델</div>
            <div className={styles.checkmy3dmodel}>나의 업로드한 3D 모델을 관리하세요.</div>
            <MypageTable />
        </section>
    );
};

export default MypageMain;