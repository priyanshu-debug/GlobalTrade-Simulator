import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ThreeGlobe from '../components/ThreeGlobe';

const MainLayout = () => {
  return (
    <div className="app-container">
      <ThreeGlobe />
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
