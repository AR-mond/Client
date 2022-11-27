import React, { useState } from 'react';
import styles from './ar_header.module.css';

const ArHeader = ({ modelName, designerName, toggleState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBtn = () => {
    setIsOpen(a => {
      toggleState(!a);
      return !a;
    });
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
