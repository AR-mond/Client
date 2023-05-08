import React,{useState} from "react";
import styles from './ar_modal.module.css';

function Modal(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    return(
        <>
        
        <div className={styles.btn_modal} onClick={toggleModal}>
        <div className={styles.btn_modal_fab}>?</div>
        </div>

        {modal &&(
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.modal_content}>
                <h3>이용 가이드</h3>
                <ul>
                    <li>모바일 환경에서 "+" 버튼을 눌러 커스텀 창을 열 수 있습니다.</li>
                    <li>우측 하단 "AR" 버튼을 눌러 증강현실 환경으로 진입합니다.</li>
                    <li>모델 커스텀 내 모델의 색상과 소재를 변경할 수 있습니다.</li>
                    <li>QR 스캔 및 SNS 버튼을 통해 모델을 공유할 수 있습니다.</li>
                </ul>
                <button
                className={styles.close_btn_modal}
                onClick={toggleModal}
                >X</button>
            </div>
        </div>
        )}
        </>
    );
}

export default Modal;
