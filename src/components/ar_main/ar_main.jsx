import React from 'react';
import styles from './ar_main.module.css';

const ArMain = ({ toggleState }) => {
  return (
    <section className={styles.main}>
      <div className={styles.modelViewer}>
        <model-viewer
          alt="sample"
          // ar-rotate
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src="3d/ryan.gltf"
          ar
          // stage-light-intensity="3"
          // environment-intensity="2"
        ></model-viewer>
      </div>
      <div className={`${styles.info} ${toggleState ? styles.active : null}`}>
        <div className={styles.size}>
          <div className={styles.size_title}>모델 크기</div>
          <div className={styles.x_size}>X길이(Length): 1201</div>
          <div className={styles.y_size}>Y너비(Width): 990</div>
          <div className={styles.z_size}>Z높이(Height): 1890</div>
        </div>
        <div className={styles.color}>
          <div className={styles.color_title}>단색 색상</div>
          <ul className={styles.colors}>
            <li className={`${styles.color1} ${styles.round}`}></li>
            <li className={`${styles.color2} ${styles.round}`}></li>
            <li className={`${styles.color3} ${styles.round}`}></li>
            <li className={`${styles.color4} ${styles.round}`}></li>
            <li className={`${styles.color5} ${styles.round}`}></li>
          </ul>
        </div>
        <div className={styles.texture}>
          <div className={styles.texture_title}>텍스쳐 색상</div>
          <ul className={styles.textures}>
            <li className={`${styles.color1} ${styles.round}`}></li>
            <li className={`${styles.color2} ${styles.round}`}></li>
            <li className={`${styles.color3} ${styles.round}`}></li>
            <li className={`${styles.color4} ${styles.round}`}></li>
            <li className={`${styles.color5} ${styles.round}`}></li>
          </ul>
        </div>
        <div className={styles.qr}>
          <div className={styles.qr_title}>스캔하여 AR로 보기</div>
          <img className={styles.qr_img} src="images/qrcode.jpg" alt="more" />
        </div>
      </div>
    </section>
  );
};

export default ArMain;
