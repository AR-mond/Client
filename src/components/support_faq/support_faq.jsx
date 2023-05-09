import React, { useState } from "react";
import styles from './support_faq.module.css';

const SupportFaq = () => {
    const [faqdata, faqsetData] = useState([
        { num: 4, title: '생산 불량 기준', regist: '22.12.31' },
        { num: 3, title: '견적 서비스 이용 안내', regist: '22.11.25' },
        { num: 2, title: '비밀번호 찾는 방법', regist: '22.11.25' },
        { num: 1, title: '반품 및 교환 방법', regist: '22.11.25' },
    ]);

    return(
        <table className={styles.table}>
            <thead className={styles.row}>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody className={styles.list}>
                {faqdata.map((item, index) => (
                    <tr key={index}>
                        <td className={styles.row1}>{item.num}</td>
                        <td>{item.title}</td>
                        <td className={styles.row3}>{item.regist}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SupportFaq;