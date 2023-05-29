import React from 'react';
import styles from './login_main.module.css';
import { useNavigate } from 'react-router';

const LoginMain = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        로그인
        <div className={styles.box}>
          <div className={styles.inputid}>
            <input className={styles.input} placeholder="아이디를 입력하세요" />
          </div>
          <div className={styles.inputpassword}>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className={styles.wrongpassword}>
            비밀번호가 일치하지 않습니다.
          </div>
          <section className={styles.loginidpassword}>
            <div className={styles.logincheck}>
              <input className={styles.check} type="checkbox" id="chk" />
              로그인 상태 유지
              <div className={styles.idpassword}>아이디{'/'}비밀번호 찾기</div>
            </div>
          </section>
          <div>
            <button
              className={styles.loginbtn}
              onClick={() => {
                navigate('/');
              }}
            >
              로그인
            </button>
          </div>
          <div className={styles.sns}>SNS로 간편하게 시작하기</div>
          <div className={styles.snslogo}>
            <div className={styles.ngk}>
              <div className={styles.naver}>N</div>
              <div className={styles.google}>G</div>
              <div className={styles.kakao}>K</div>
            </div>
          </div>
          <div className={styles.nosns}>계정이 없으신가요?</div>
          <div>
            <button className={styles.join}>회원가입 바로가기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginMain;
