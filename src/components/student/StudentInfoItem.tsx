import React from 'react';

interface StudentInfoItemProps {
  label: string;
  value: string;
}

const StudentInfoItem: React.FC<StudentInfoItemProps> = ({ label, value }) => {
  return (
    <div>
      <span className="font-bold">{label}：</span>
      {value}
    </div>
  );
};

export default StudentInfoItem;