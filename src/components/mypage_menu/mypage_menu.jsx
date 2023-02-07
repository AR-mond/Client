import React from 'react';
import styles from './mypage_menu.module.css';

const MypageMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.menubar}>
                <div className={styles.menu}>
                    <div className={styles.menuhome}>H</div>
                    <div className={styles.pagelist}>MY PAGE</div>
                    <div className={styles.pagelist}>나의 3D 모델</div>
                </div>
                <div className={styles.menu2}>
                    <div className={styles.menuhome2}>H</div>
                    <div className={styles.hide}>
                        <ul className={styles.list}>
                            <div className={styles.pagelist2}>
                                <li className={styles.menulist}>SERVICES</li>
                                <li className={styles.menulist}>RESOURCES</li>
                                <li className={styles.menulist}>CONTACTS</li>
                                <li className={styles.menulist}>REVIEWS</li>
                                <li className={styles.menulist}>PORTFOLIO</li>
                                <li className={styles.menulist}>MY PAGE</li>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.hide}>
                        <ul className={styles.list}>
                            <div className={styles.pagelist2}>
                                <li className={styles.menulist}>나의 3D 모델</li>
                                <li className={styles.menulist}>제작 현황</li>
                                <li className={styles.menulist}>1:1 문의</li>
                                <li className={styles.menulist}>계정 관리</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.my3dmodel}>나의 3D 모델</div>
            <div className={styles.checkmy3dmodel}>나의 업로드한 3D 모델을 관리하세요.</div>
        </section>
    );
};

export default MypageMain;