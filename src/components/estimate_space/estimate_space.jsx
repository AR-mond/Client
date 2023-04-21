import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './estimate_space.module.css';
import { StlViewer } from 'react-stl-viewer';

const EstimateSpace = ({ onAdd }) => {
  const navigate = useNavigate();
  const stlRef = useRef();
  // console.log(stlRef);

  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [material, setMeterial] = useState('ABS');
  const [nums, setNums] = useState(1);
  const [isCleanCheck, setIsCleanCheck] = useState(true);
  const [isPaintingCheck, setIsPaintingCheck] = useState(true);

  const fileInput = useRef(null);

  // '파일 추가' 버튼 클릭 시 fileInput 클릭 이벤트 발생
  const handleFileButtonClick = e => {
    fileInput.current.click();
  };

  // fileInput에서 특정 파일 선택하면 fileurl과 file 저장
  const handleChange = e => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    setFileURL(url);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // 초기화
  const init = () => {
    setFile(null);
    setIsCleanCheck(true);
    setIsPaintingCheck(true);
    setNums(1);
  };

  // 모델링 파일 정보를 onAdd를 통해 전달
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

  // 후처리 여부(isCleanCheck) 컨트롤
  const handleCleanCheck = () => {
    setIsCleanCheck(!isCleanCheck);
  };

  // 도색 여부(isPaintingCheck) 컨트롤
  const handlePaintingCheck = () => {
    setIsPaintingCheck(!isPaintingCheck);
  };

  // 수량(nums) plus 컨트롤
  const handlePlusNums = () => {
    setNums(nums + 1);
  };

  // 수량(nums) minus 컨트롤
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
          // <model-viewer
          //   alt="sample"
          //   // ar-rotate
          //   camera-controls
          //   touch-action="pan-y"
          //   auto-rotate
          //   src={fileURL}
          //   ar
          //   // stage-light-intensity="3"
          //   // environment-intensity="2"
          // ></model-viewer>
          <StlViewer
            style={{
              width: '100%',
              height: '100%',
            }}
            orbitControls
            shadows
            url={fileURL}
            ref={stlRef}
          />
        )}
        <input
          type="file"
          accept=".stl, .gltf, .glb"
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
          <div
            className={styles.ar_btn}
            onClick={() => {
              if (file !== null)
                navigate('/ar', {
                  state: {
                    // fileURL을 gltf나 glb로 변경하는 과정 필요!!
                    link: { fileURL },
                  },
                });
            }}
          >
            AR로 실측확인
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateSpace;
