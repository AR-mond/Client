import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ar_main.module.css';

const ArMain = ({ toggleState }) => {
  const location = useLocation();
  const link = location.state.link.fileURL;
  console.log(link);

  const modelViewerRef = useRef();

  // 텍스쳐 컨트롤
  const handleTexture = async e => {
    const material = modelViewerRef.current.model.materials[0].normalTexture;

    if (e.target.value === 'None') {
      material.setTexture(null);
    } else if (e.target.value) {
      const texture = await modelViewerRef.current.createTexture(
        e.target.value
      );
      material.setTexture(texture);
    }
  };

  // 색상 컨트롤
  const handleColor = e => {
    if (e.target.tagName !== 'LI') return;
    const material = modelViewerRef.current.model.materials[0];
    const colorString = e.target.dataset.color;
    if (colorString === 'None') {
      material.pbrMetallicRoughness.setBaseColorFactor(null);
    } else {
      material.pbrMetallicRoughness.setBaseColorFactor(colorString);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.modelViewer}>
        <model-viewer
          ref={modelViewerRef}
          alt="bear"
          // ar-rotate
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src={link}
          // src="3d/deer.glb"
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
          <ul className={styles.colors} onClick={handleColor}>
            <li
              data-color="#FF6C6C"
              className={`${styles.color1} ${styles.round}`}
            ></li>
            <li
              data-color="#FDB433"
              className={`${styles.color2} ${styles.round}`}
            ></li>
            <li
              data-color="#F0FF6C"
              className={`${styles.color3} ${styles.round}`}
            ></li>
            <li
              data-color="#FF96F8"
              className={`${styles.color4} ${styles.round}`}
            ></li>
            <li
              data-color="None"
              className={`${styles.default_color} ${styles.round}`}
            >
              <div className={styles.diagonal}></div>
            </li>
          </ul>
        </div>
        <div className={styles.texture}>
          <div className={styles.texture_title}>텍스쳐</div>
          <select className={styles.textures} onChange={handleTexture}>
            <option>None</option>
            <option value="images/ar_texture/Aluminum.jpg">Aluminum</option>
            <option value="images/ar_texture/Asphalt.jpg">Asphalt</option>
            <option value="images/ar_texture/Wood.jpg">Wood</option>
            {/* <option value="images/ar_texture/4.png">D</option>
            <option value="images/ar_texture/5.png">E</option> */}
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
          {/* <img className={styles.qr_img} src="images/qrcode.jpg" alt="more" /> */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=https://ar2art.kro.kr/ar&amp;size=100x100`}
            alt=""
            title=""
          />
        </div>
      </div>
    </section>
  );
};

export default ArMain;
