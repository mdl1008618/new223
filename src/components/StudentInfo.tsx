import React from 'react';
import { Card } from 'antd';
import { Student } from '../types/grade';

interface StudentInfoProps {
  student: Student;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
  return (
    <Card className="mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <span className="font-bold">学号：</span>
          {student.id}
        </div>
        <div>
          <span className="font-bold">姓名：</span>
          {student.name}
        </div>
        <div>
          <span className="font-bold">班级：</span>
          {student.class}
        </div>
        <div>
          <span className="font-bold">专业：</span>
          {student.major}
        </div>
      </div>
    </Card>
  );
};

export default StudentInfo;