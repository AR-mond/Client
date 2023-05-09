import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ar_main.module.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { ChromePicker } from 'react-color';
import Modal from '../ar_modal/ar_modal';

const ArMain = ({ toggleState, handleToggle }) => {
  const location = useLocation();
  const link = location.state.link.gltf;
  console.log(link);

  const handleToggleBtn = () => {
    handleToggle(!toggleState);
  };

  const modelViewerRef = useRef();

  // 텍스쳐 컨트롤
  const handleTexture = async e => {
    const value = e.target.getAttribute('value');
    const material = modelViewerRef.current.model.materials[0];
    const pbrMaterial = material.pbrMetallicRoughness;

    if (value === 'images/ar_texture/Aluminum.jpg') {
      pbrMaterial.setRoughnessFactor(0);
      pbrMaterial.setMetallicFactor(1);
      const texture = await modelViewerRef.current.createTexture(value);
      material.normalTexture.setTexture(texture);
    } else {
      pbrMaterial.setRoughnessFactor(1);
      pbrMaterial.setMetallicFactor(0);
      if (value === 'None') {
        material.normalTexture.setTexture(null);
      } else {
        const texture = await modelViewerRef.current.createTexture(value);
        material.normalTexture.setTexture(texture);
      }
    }
  };

  //색
  const [color, setColor] = useState('#FFFFFF');
  const handleColor = newColor => {
    const material = modelViewerRef.current.model.materials[0];
    if (newColor.rgb.a === 0) {
      material.pbrMetallicRoughness.setBaseColorFactor(null);
    } else {
      const colorString = `rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`;
      material.pbrMetallicRoughness.setBaseColorFactor(colorString);
    }
    setColor(newColor.hex);
  };

  // URL 공유
  const shareUrl = 'http://ar2art.kro.kr/';

  return (
    <section className={styles.main}>
      <div className={styles.modelViewer}>
        <model-viewer
          ref={modelViewerRef}
          alt="bear"
          // ar-rotate
          camera-controls
          touch-action="pan-y"
          src={link}
          //src="3d/deer.glb"
          ar
        >
          <div className={styles.size}>
            <div className={styles.size_title}>
              <img src="icon/cube.svg" alt="cube"></img>
              <span className={styles.titles}>모델 정보</span>
            </div>
            <div className={styles.x_size}>X길이(Length): 1201</div>
            <div className={styles.y_size}>Y너비(Width): 990</div>
            <div className={styles.z_size}>Z높이(Height): 1890</div>
            <div className={styles.v_size}>부피(Volume): 3090</div>
          </div>
          <Modal />
          <div className={styles.toggle_btn} onClick={handleToggleBtn}>
            <div className={styles.toggle_btn_fab}>+</div>
          </div>
        </model-viewer>
      </div>
      <div className={`${styles.info} ${toggleState ? styles.active : null}`}>
        <div className={styles.custom}>
          <div className={styles.custom_title}>
            <img src="icon/custom.svg" alt="custom"></img>
            <span className={styles.titles}>모델 커스텀</span>
          </div>
          <div className={styles.color}>
            <div className={styles.color_title}>단색 색상</div>
            <div className={styles.colorpicker}>
              <ChromePicker
                color={color}
                onChange={handleColor}
                disableAlpha={true}
              />
            </div>
          </div>

          <div className={styles.texture}>
            <div className={styles.texture_title}>텍스쳐</div>
            <ul className={styles.textures} onClick={handleTexture}>
              <li
                value="images/ar_texture/Asphalt.jpg"
                className={`${styles.texture1} ${styles.round}`}
              >
                As
              </li>
              <li
                value="images/ar_texture/Aluminum.jpg"
                className={`${styles.texture2} ${styles.round}`}
              >
                Al
              </li>
              <li
                value="images/ar_texture/Wood.jpg"
                className={`${styles.texture3} ${styles.round}`}
              >
                W
              </li>
              <li
                value="images/ar_texture/5.png"
                className={`${styles.texture4} ${styles.round}`}
              >
                T
              </li>
              <li
                value="None"
                className={`${styles.default_color} ${styles.round}`}
              >
                P
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.qr}>
          <div className={styles.qr_title}>모바일로 스캔하여 AR로 보기</div>
          <img className={styles.qr_img} src="images/qrcode.png" alt="more" />
        </div>
        <div className={styles.share}>
          <ul className={styles.shares}>
            <li className={`${styles.round}`}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
            </li>
            <li className={`${styles.round}`}>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
            </li>
            <li className={`${styles.round}`}>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} />
              </EmailShareButton>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArMain;
