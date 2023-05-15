import React, { useMemo } from 'react';
import { useTable, Column } from 'react-table';
import styled from '@emotion/styled';

export interface TableProps {
  tableData: any[]; // 테이블에 표시할 데이터 배열
  tableColumns: Column<any>[]; // 테이블에 표시할 컬럼 설정 배열
  maxHeight?: string; // 테이블 높이 설정 (default: '200px')
  disableScroll?: boolean; // 스크롤 제거 여부 (default: false 스크롤 있음)
  width?: string[]; // 각 열의 너비값 배열 (tableColumns 배열의 순서와 일치해야함)
}

const Table: React.FC<TableProps> = ({
  tableData,
  tableColumns,
  maxHeight = '200px',
  disableScroll = false,
  width = [],
}) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(
    () =>
      tableColumns.map((column, index) => ({
        ...column,
        width: width ? width[index] : '100%',
      })),
    [tableColumns, width],
  );

  const tableInstance = useTable({ columns, data });

  return (
    <TableWrapper maxHeight={maxHeight} disableScroll={disableScroll}>
      <table>
        <TableHeader>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  style={{ width: width ? width[index] : undefined }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </TableHeader>
        <TableBody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </tr>
            );
          })}
        </TableBody>
      </table>
    </TableWrapper>
  );
};

Table.defaultProps = {
  maxHeight: '200px',
  disableScroll: false,
  width: [],
};

export default Table;

const TableWrapper = styled.div<{ maxHeight?: string; disableScroll?: boolean }>`
  max-height: ${({ maxHeight }) => maxHeight || '200px'};
  overflow-y: ${({ disableScroll }) => (disableScroll ? 'hidden' : 'scroll')};
`;

const TableHeader = styled.thead`
  background-color: #eee;
  color: #333;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  th {
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #eee;
  }
`;

const TableBody = styled.tbody`
  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  tr:nth-of-type(even) {
    background-color: #f3f4fa;
  }
  tr:nth-of-type(odd) {
    background-color: #fff;
  }
  tr:last-of-type td {
    border-bottom: 1px solid #ccc;
  }
  td {
    text-align: center;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;
