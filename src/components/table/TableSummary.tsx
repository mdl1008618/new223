import React from 'react';
import { Table } from 'antd';
import { Grade } from '../../types/grade';
import { calculateGPA, calculateTotalCredits } from '../../utils/gpaCalculator';

interface TableSummaryProps {
  grades: Grade[];
}

export const TableSummary: React.FC<TableSummaryProps> = ({ grades }) => {
  const credits = grades.map(grade => grade.credit);
  const scores = grades.map(grade => grade.score);
  const totalCredits = calculateTotalCredits(credits);
  const gpa = calculateGPA(credits, scores);

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
};