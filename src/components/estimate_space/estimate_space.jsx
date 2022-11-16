import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './estimate_space.module.css';

const EstimateSpace = ({ onAdd }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [material, setMeterial] = useState('ABS');
  const [nums, setNums] = useState(1);
  const [isCleanCheck, setIsCleanCheck] = useState(true);
  const [isPaintingCheck, setIsPaintingCheck] = useState(true);

  const fileInput = useRef(null);

  const handleFileButtonClick = e => {
    fileInput.current.click();
  };

  const handleChange = e => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    setFileURL(url);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const init = () => {
    setFile(null);
    setIsCleanCheck(true);
    setIsPaintingCheck(true);
    setNums(1);
  };

  const handleAddFile = () => {
    if (file !== null) {
      onAdd({
        // id:
        name: file.name,
        size: '21x11x14 cm',
        volume: '1467cm^3',
        material: 'ABS',
        isClean: isCleanCheck,
        isPaint: isPaintingCheck,
        nums,
        price: '1,000,000원',
        file: file,
      });
      init();
    } else {
      console.log('파일이 선택되지 않았습니다.');
    }
  };

  const handleCleanCheck = () => {
    setIsCleanCheck(!isCleanCheck);
  };

  const handlePaintingCheck = () => {
    setIsPaintingCheck(!isPaintingCheck);
  };

  const handlePlusNums = () => {
    setNums(nums + 1);
  };

  const handleMinusNums = () => {
    if (nums > 1) {
      setNums(nums - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.file_box}>
        {file === null ? (
          <div className={styles.file_btn} onClick={handleFileButtonClick}>
            파일 선택
          </div>
        ) : (
          <model-viewer
            alt="sample"
            // ar-rotate
            camera-controls
            touch-action="pan-y"
            auto-rotate
            src={fileURL}
            ar
            // stage-light-intensity="3"
            // environment-intensity="2"
          ></model-viewer>
        )}
        <input
          type="file"
          accept=".gltf, .glb"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.material}>
          <div className={styles.material_title}>소재</div>
          <select className={styles.material_selectbox}>
            <option key="normarl" value="normarl">
              ABS
            </option>
            <option key="ABS" value="ABS">
              일반 레진
            </option>
          </select>
        </div>
        <div className={styles.nums}>
          <div className={styles.nums_title}>수량</div>
          <div className={styles.nums_btns}>
            <div
              className={`${styles.nums_minus_btn} ${styles.noselect}`}
              onClick={handleMinusNums}
            >
              -
            </div>
            <div className={styles.nums_count}>{nums}</div>
            <div
              className={`${styles.nums_plus_btn} ${styles.noselect}`}
              onClick={handlePlusNums}
            >
              +
            </div>
          </div>
        </div>
        <div className={styles.clean}>
          <div className={styles.clean_title}>후처리 여부</div>
          <div className={styles.checkbox} onClick={handleCleanCheck}>
            {isCleanCheck ? <img src="icon/check.svg" alt="check"></img> : null}
          </div>
        </div>
        <div className={styles.painting}>
          <div className={styles.painting_title}>도색 여부</div>
          <div className={styles.checkbox} onClick={handlePaintingCheck}>
            {isPaintingCheck ? (
              <img src="icon/check.svg" alt="check"></img>
            ) : null}
          </div>
        </div>
        <div className={styles.btns}>
          <div className={styles.add_btn} onClick={handleAddFile}>
            파일 추가
          </div>
          <div className={styles.estimate_btn}>견적 문의</div>
        </div>
      </div>
    </div>
  );
};

export default EstimateSpace;
