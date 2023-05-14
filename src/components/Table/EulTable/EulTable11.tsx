import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/components/Table/MOCK_DATA.json';
import { COLUMNS } from '@/components/Table/columns';

type ExampleProps = {};

const Eultable11: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    disableScroll: true,
    width: ['188px', '188px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default Eultable11;
