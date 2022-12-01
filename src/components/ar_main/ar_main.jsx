import React, { useRef } from 'react';
import styles from './ar_main.module.css';

const ArMain = ({ toggleState }) => {
  const modelViewerTexture = useRef();

  const handleTexture = async e => {
    const material =
      modelViewerTexture.current.model.materials[0].normalTexture;

    if (e.target.value == 'None') {
      material.setTexture(null);
    } else if (e.target.value) {
      const texture = await modelViewerTexture.current.createTexture(
        e.target.value
      );
      material.setTexture(texture);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.modelViewer}>
        <model-viewer
          ref={modelViewerTexture}
          alt="bear"
          // ar-rotate
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src="3d/bear_figure.glb"
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
          <div className={styles.texture_title}>텍스쳐</div>
          <select className={styles.textures} onChange={handleTexture}>
            <option>None</option>
            <option value="images/ar_texture/1.png">A</option>
            <option value="images/ar_texture/2.png">B</option>
            <option value="images/ar_texture/3.png">C</option>
            <option value="images/ar_texture/4.png">D</option>
            <option value="images/ar_texture/5.png">E</option>
          </select>
          {/* <ul className={styles.textures} onClick={handleTexture}>
            <li key="1" className={styles.rectangle}>
              A
            </li>
            <li key="2" className={styles.rectangle}>
              B
            </li>
            <li key="3" className={styles.rectangle}>
              C
            </li>
            <li key="4" className={styles.rectangle}>
              D
            </li>
            <li key="5" className={styles.rectangle}>
              E
            </li>
          </ul> */}
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
