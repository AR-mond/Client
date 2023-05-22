import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import styles from './estimate_table.module.css';

const EstimateTable = ({ data, onDelete }) => {
  const columns = useMemo(
    () => [
      {
        accessor: 'name',
        Header: '파일명',
      },
      {
        accessor: 'size',
        Header: '사이즈',
      },
      {
        accessor: 'volume',
        Header: '볼륨',
      },
      {
        accessor: 'material',
        Header: '소재',
      },
      {
        accessor: 'isClean',
        Header: '후처리',
      },
      {
        accessor: 'isPaint',
        Header: '도색',
      },
      {
        accessor: 'nums',
        Header: '수량',
      },
      {
        accessor: 'price',
        Header: '예상견적금액',
      },
    ],
    []
  );

  // const handleClick = id => {
  //   console.log(id);
  //   console.log('hello');
  // };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className={styles.container}>
      {data.length !== 0 ? (
        <table className={styles.table} {...getTableProps()}>
          <thead className={styles.table_header}>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      style={{ textAlign: 'center' }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                  <td className={styles.xbtn}>
                    <div
                      className={styles.btnText}
                      onClick={() => onDelete(row.id)}
                    >
                      X
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className={styles.nofile}>업로드 된 파일이 없습니다</div>
      )}
    </div>
  );
};

export default EstimateTable;
