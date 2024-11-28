import React from 'react';
import { Card } from 'antd';
import { Student } from '../../types/grade';
import StudentInfoItem from './StudentInfoItem';

interface StudentInfoProps {
  student: Student;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
  return (
    <Card className="mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StudentInfoItem label="学号" value={student.id} />
        <StudentInfoItem label="姓名" value={student.name} />
        <StudentInfoItem label="班级" value={student.class} />
        <StudentInfoItem label="专业" value={student.major} />
      </div>
    </Card>
  );
};

export default StudentInfo;