import React from 'react';
import styles from './join_main.module.css';

const JoinMain = () => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>회원가입
                <div className={styles.box}>
                    <div className={styles.title}>아이디</div>
                    <div className={styles.inputtitle}>
                        <input
                            className={styles.input}
                            placeholder="아이디를 입력하세요"/>
                        <button className={styles.numberbtn}>중복확인</button>
                    </div>
                    <div className={styles.wrong}>필수 정보입니다</div>
                    <div className={styles.title}>비밀번호</div>
                    <div className={styles.inputtitle}>
                        <input 
                            className={styles.input}
                            placeholder="비밀번호를 입력하세요"/>
                    </div>
                    <div className={styles.wrong}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요</div>
                    <div className={styles.title}>비밀번호 재확인</div>
                    <div className={styles.inputtitle}>
                        <input 
                            className={styles.input}
                            placeholder="비밀번호를 다시 입력하세요"/>
                    </div>
                    <div className={styles.wrong}>비밀번호가 일치하지 않습니다</div>
                    <div className={styles.title}>이름</div>
                    <div className={styles.inputtitle}>
                        <input 
                            className={styles.input}
                            placeholder="이름을 입력하세요"/>
                    </div>
                    <div className={styles.wrong}>한글과 영문 대 소문자를 사용하세요(특수기호 사용불가)</div>
                    <div className={styles.title}>본인확인 이메일 (선택)</div>
                    <div className={styles.inputtitle}>
                        <input 
                            className={styles.input}
                            placeholder="이메일을 입력하세요"/>
                    </div>
                    <div className={styles.wrong}>이메일 주소를 다시 확인해주세요</div>
                    <div className={styles.title}>휴대전화</div>
                    <div className={styles.number}>
                        <div className={styles.inputtitle}>
                            <input 
                                className={styles.inputnumber}
                                placeholder="휴대전화 번호를 입력하세요"/>
                            <button className={styles.numberbtn}>인증번호 받기</button>
                        </div>
                    </div>
                    <div className={styles.inputtitle}>
                        <input 
                            className={styles.input}
                            placeholder="인증번호를 입력하세요"/>
                    </div>
                    <div className={styles.send}>인증번호를 발송했습니다 (유효시간 30분)</div>
                    <section className={styles.agree}>
                        <div className={styles.agreeallcheck}>
                            <input 
                                className={styles.check}
                                type="checkbox" id="chk"/>
                                모든 이용약관을 확인하였으며, 이에 동의합니다.
                        </div>
                        <div className={styles.agreecheck1}>
                            <input 
                                className={styles.check}
                                type="checkbox" id="chk"/>
                                [필수]아몬드의 이용약관에 동의합니다.
                        </div>
                        <div className={styles.agreecheck1}>
                            <input 
                                className={styles.check}
                                type="checkbox" id="chk"/>
                                [필수]아몬드의 개인정보처리방침에 동의합니다.
                        </div>
                        <div className={styles.agreecheck1}>
                            <input 
                                className={styles.check}
                                type="checkbox" id="chk"/>
                                [선택]광고성 정보 이메일 수신에 동의합니다.
                        </div>
                        <div className={styles.agreecheck1}>
                            <input 
                                className={styles.check}
                                type="checkbox" id="chk"/>
                                [선택]광고성 정보 SMS 수신에 동의합니다.
                        </div>
                    </section>
                    <div>
                        <button className={styles.joinbtn}>가입하기</button>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default JoinMain;