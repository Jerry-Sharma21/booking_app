import React from 'react';

import Header from '../components/Header';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  );
};

export default Layout;