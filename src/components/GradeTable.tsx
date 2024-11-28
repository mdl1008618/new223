import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Grade } from '../types/grade';

const columns: ColumnsType<Grade> = [
  {
    title: '课程代码',
    dataIndex: 'courseId',
    key: 'courseId',
  },
  {
    title: '课程名称',
    dataIndex: 'courseName',
    key: 'courseName',
  },
  {
    title: '学分',
    dataIndex: 'credit',
    key: 'credit',
  },
  {
    title: '成绩',
    dataIndex: 'score',
    key: 'score',
    render: (score: number) => (
      <span className={score >= 60 ? 'text-green-600' : 'text-red-600'}>
        {score}
      </span>
    ),
  },
  {
    title: '学期',
    dataIndex: 'semester',
    key: 'semester',
  },
  {
    title: '任课教师',
    dataIndex: 'teacher',
    key: 'teacher',
  },
];

interface GradeTableProps {
  grades: Grade[];
}

const GradeTable: React.FC<GradeTableProps> = ({ grades }) => {
  return (
    <Table
      columns={columns}
      dataSource={grades}
      rowKey="courseId"
      pagination={false}
      className="w-full"
      summary={(data) => {
        const totalCredits = data.reduce((sum, grade) => sum + grade.credit, 0);
        const weightedSum = data.reduce((sum, grade) => sum + grade.credit * grade.score, 0);
        const gpa = weightedSum / (totalCredits * 20); // Converting to 5.0 scale

        return (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={2}>总计</Table.Summary.Cell>
              <Table.Summary.Cell index={2}>{totalCredits}</Table.Summary.Cell>
              <Table.Summary.Cell index={3} colSpan={3}>
                平均绩点: {gpa.toFixed(2)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        );
      }}
    />
  );
};

export default GradeTable;