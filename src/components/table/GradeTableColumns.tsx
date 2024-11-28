import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Grade } from '../../types/grade';

export const gradeColumns: ColumnsType<Grade> = [
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