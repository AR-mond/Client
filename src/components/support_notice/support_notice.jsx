import React, { useState } from "react";
import styles from './support_notice.module.css';

const SupportNotice = () => {
    const [noticedata, noticesetData] = useState([
        { num: 4, title: '서비스 점검 안내(23.01.01 ~ 23.01.02)', regist: '22.12.31' },
        { num: 3, title: '서비스 점검 안내(22.01.01 ~ 22.01.02)', regist: '21.12.31' },
        { num: 2, title: '서비스 점검 안내(21.01.01 ~ 21.01.02)', regist: '20.12.31' },
        { num: 1, title: '서비스 점검 안내(20.01.01 ~ 20.01.02)', regist: '19.12.31' },
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
                {noticedata.map((item, index) => (
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

export default SupportNotice;