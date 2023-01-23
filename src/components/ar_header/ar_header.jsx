import React, { useState } from 'react';
import styles from './ar_header.module.css';

const ArHeader = ({ modelName, designerName, toggleState, handleToggle }) => {
  // 폰 사이즈에서 나타나는 토글 버튼 컨트롤
  const handleToggleBtn = () => {
    handleToggle(!toggleState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.model_name}>{modelName} |</div>
      <div className={styles.designed_by}>Designed by</div>
      <div className={styles.designer_name}>{designerName}</div>
      <div className={styles.toggle_btn} onClick={handleToggleBtn}>
        =
      </div>
    </header>
  );
};

export default ArHeader;
