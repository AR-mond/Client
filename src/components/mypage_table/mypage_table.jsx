import React, {useState} from "react";
import styles from './mypage_table.module.css';

const MypageTable = () => {
    const [modeldata, modelsetData] = useState([
        { img: 4, name: 'jordy.stl', xyz: '21 * 11 * 14 cm', size: '100mb', date: '22.10.16' },
        { img: 3, name: 'jordy.stl', xyz: '21 * 11 * 14 cm', size: '100mb', date: '22.10.16' },
    ]);

    return(
        <table className={styles.table}>
            <thead className={styles.row}>
                <tr>
                    <th>이미지</th>
                    <th>파일명</th>
                    <th>사이즈</th>
                    <th>파일 크기</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody className={styles.list}>
                {modeldata.map((item, index) => (
                    <tr key={index}>
                        <td>{item.img}</td>
                        <td>{item.name}</td>
                        <td>{item.xyz}</td>
                        <td>{item.size}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MypageTable;