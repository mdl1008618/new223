import React from 'react';
import { Table } from 'antd';
import { Grade } from '../../types/grade';
import { gradeColumns } from './GradeTableColumns';
import { TableSummary } from './TableSummary';

interface GradeTableProps {
  grades: Grade[];
}

const GradeTable: React.FC<GradeTableProps> = ({ grades }) => {
  return (
    <Table
      columns={gradeColumns}
      dataSource={grades}
      rowKey="courseId"
      pagination={false}
      className="w-full"
      summary={(data) => <TableSummary grades={data} />}
    />
  );
};

export default GradeTable;