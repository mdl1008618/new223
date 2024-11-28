import React from 'react';
import { Layout, Typography } from 'antd';
import StudentInfo from '../student/StudentInfo';
import GradeTable from '../table/GradeTable';
import { Student } from '../../types/grade';
import { Grade } from '../../types/grade';

const { Content } = Layout;
const { Title } = Typography;

interface MainContentProps {
  student: Student;
  grades: Grade[];
}

const MainContent: React.FC<MainContentProps> = ({ student, grades }) => {
  return (
    <Content className="p-6 max-w-7xl mx-auto w-full">
      <div className="bg-white p-6 rounded-lg shadow">
        <StudentInfo student={student} />
        <Title level={4}>2023-2024学年第二学期成绩</Title>
        <GradeTable grades={grades} />
      </div>
    </Content>
  );
};

export default MainContent;