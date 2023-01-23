import React from 'react';
import styles from './modal.module.css';

const Modal = ({ isOpen, handleClose }) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : null} `}>
      {isOpen ? (
        <section className={styles.container}>
          <div className={styles.close_btn} onClick={() => handleClose(false)}>
            X
          </div>
          <div className={styles.title}>AR 실측 확인</div>
          <p className={styles.info1}>
            실측 확인을 위해 QR코드를 확인해주세요.
          </p>
          <img src="images/qrcode.jpg" alt="more" />
          <p className={styles.info2}>출력물은 다른 사람들과 공유해보세요.</p>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
