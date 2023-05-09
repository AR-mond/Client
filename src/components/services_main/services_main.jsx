import React from "react";
import styles from './services_main.module.css';


const ServicesMain = () => {


    return (
        <div className={styles.main}>
            <div className={styles.intro}>
                <div className={styles.introe}>Introduction</div>
                <div className={styles.introk}>소개</div>
            </div>
            <div className={styles.com}>
                <div className={styles.title}>기업 소개</div>
                <div className={styles.explain}>아몬드는 다양한 파트너들이 더 큰 성장을 이룰 수 있도록 새로운 제조 서비스 경험을 제공합니다</div>
            </div>
            <div className={styles.logobox}>
                <div className={styles.box1}>
                </div>
                <div className={styles.box2}>
                </div>
            </div>
            <div className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <div className={styles.com}>
                <div className={styles.title}>서비스 소개</div>
                <div className={styles.explain}>모델 검토부터 견적, 제조까지 자동화 개인 맞춤형 서비스를 경험해보세요</div>
            </div>
            <div className={styles.processbox}>
                <div className={styles.process}>3D 모델 업로드</div>
                <div className={styles.box}></div>
                <div className={styles.process}>AR 모델 검토</div>
                <div className={styles.box}></div>
                <div className={styles.process}>견적 요청</div>
                <div className={styles.box}></div>
                <div className={styles.process}>제조사 매칭</div>
                <div className={styles.box}></div>
                <div className={styles.process}>생산</div>
            </div>
            <div className={styles.imgbox}>
                <div className={styles.img1}></div>
                <img src="icon/next2.svg" alt="next" />
                <div className={styles.img1}></div>
                <img src="icon/next2.svg" alt="next" />
                <div className={styles.img3}></div>
                <img src="icon/next2.svg" alt="next" />
                <div className={styles.img4}></div>
                <img src="icon/next2.svg" alt="next" />
                <div className={styles.img5}></div>
            </div>
        </div>
    );
};

export default ServicesMain;