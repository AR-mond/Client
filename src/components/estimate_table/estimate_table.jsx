import React from 'react';
import { useTable } from 'react-table';
import styles from './estimate_table.module.css';

const Estimate = ({ columns, data }) => {
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

export default Estimate;
