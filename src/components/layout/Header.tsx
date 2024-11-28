import React from 'react';
import { Layout, Typography } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader className="bg-blue-800 p-4">
      <Title level={3} className="text-white m-0">
        深圳技术大学成绩查询系统
      </Title>
    </AntHeader>
  );
};

export default Header;