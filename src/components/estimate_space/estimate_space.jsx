import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './estimate_space.module.css';
import { StlViewer } from 'react-stl-viewer';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import calculateVolume from '../../service/calc';
import stlToGltf from '../../service/translater';
import axios from 'axios';
import Loading from '../Loading';

const EstimateSpace = ({ onAdd }) => {
  const navigate = useNavigate();

  const fileInput = useRef(null);
  const selectRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [fileInfo, setFileInfo] = useState({});
  const [material, setMeterial] = useState('ABS');
  const [nums, setNums] = useState(1);
  const [isCleanCheck, setIsCleanCheck] = useState(true);
  const [isPaintingCheck, setIsPaintingCheck] = useState(true);
  const [volume, setVolume] = useState();
  const [loading, setLoading] = useState(false);

  // '파일 추가' 버튼 클릭 시 fileInput 클릭 이벤트 발생
  const handleFileButtonClick = e => {
    fileInput.current.click();
  };

  const handleDrop = e => {
    e.preventDefault();
    // 드롭된 파일 리스트 가져오기
    const files = [...e.dataTransfer?.files];
    const url = window.URL.createObjectURL(files[0]);
    setFileURL(url);
    setFile(files[0]);

    const loader = new STLLoader();
    loader.load(url, geometry => {
      const volume = Math.round(calculateVolume(geometry));
      setVolume(volume);
    });
  };

  // fileInput에서 특정 파일 선택하면 fileurl과 file 저장
  const handleChange = e => {
    console.log(e.target.files[0]);
    const url = window.URL.createObjectURL(e.target.files[0]);
    setFileURL(url);
    setFile(e.target.files[0]);

    const loader = new STLLoader();
    loader.load(url, geometry => {
      const volume = Math.round(calculateVolume(geometry));
      setVolume(volume);
    });
  };

  // 초기화
  const init = () => {
    setFile(null);
    setIsCleanCheck(true);
    setIsPaintingCheck(true);
    setNums(1);
    setMeterial('ABS');
    fileInput.current.value = null;
    selectRef.current.value = 'ABS';
  };

  const calculatePrice = () => {
    let price = 0;
    const weight = material === 'ABS' ? 3.6 : 4;
    const volume_price = Math.round(volume / 100) * 100 * weight;
    price += volume_price;
    if (isCleanCheck) price += volume_price * 0.1;
    if (isPaintingCheck) price += volume_price * 0.1;
    price *= nums;
    return price;
  };

  // 모델링 파일 정보를 onAdd를 통해 전달
  const handleAddFile = () => {
    if (file !== null) {
      const x = Math.round(fileInfo.width);
      const y = Math.round(fileInfo.height);
      const z = Math.round(fileInfo.length);
      const price = calculatePrice();
      onAdd({
        // id:
        name: file.name,
        size: `${x} x ${y} x ${z} cm`,
        volume: `${volume} cm³`,
        material,
        isClean: isCleanCheck ? 'O' : 'X',
        isPaint: isPaintingCheck ? 'O' : 'X',
        nums,
        price: `${price}원`,
        file,
      });
      init();
    } else {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }
  };

  const handleAR = async () => {
    if (file !== null) {
      stlToGltf(fileURL).then(gltf => {
        let formData = new FormData();
        formData.append('stl_file', file);
        formData.append('gltf_file', gltf);
        setLoading(true);

        axios.post('http://3.82.127.35/api/upload', formData).then(res => {
          setLoading(false);
          const gltf_link = res.data.gltf_file_path;

          window.open('https://www.naver.com/');

          // navigate(`/ar/${res.data.id}`, {
          //   state: {
          //     link: { gltf_link },
          //   },
          // });
        });
      });
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
      <div
        className={styles.file_box}
        onDragOver={e => {
          e.preventDefault();
        }}
        onDrop={handleDrop}
      >
        {file === null ? (
          <>
            <div className={styles.file_btn} onClick={handleFileButtonClick}>
              파일 선택
            </div>
            <p>Drag & Drop</p>
          </>
        ) : (
          <StlViewer
            style={{
              width: '100%',
              height: '100%',
            }}
            orbitControls
            shadows
            onFinishLoading={info => setFileInfo(info)}
            url={fileURL}
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
          <select
            className={styles.material_selectbox}
            onChange={e => setMeterial(e.target.value)}
            ref={selectRef}
          >
            <option key="ABS" value="ABS">
              ABS
            </option>
            <option key="normarl" value="일반 레진">
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
          <div className={styles.ar_btn} onClick={handleAR}>
            AR로 실측확인
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default EstimateSpace;
