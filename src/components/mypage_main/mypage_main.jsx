import React from 'react';
import styles from './mypage_main.module.css';

const MypageMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.menubar}>
                <div className={styles.menu}>
                    <div className={styles.menuhome}>H</div>
                    <div className={styles.menumypage}>MY PAGE</div>
                    <div className={styles.menumy3dmodel}>나의 3D 모델</div>
                </div>
            </div>
            <div className={styles.my3dmodel}>나의 3D 모델</div>
            <div className={styles.checkmy3dmodel}>나의 업로드한 3D 모델을 관리하세요.</div>
        </section>
    );
};

export default MypageMain;