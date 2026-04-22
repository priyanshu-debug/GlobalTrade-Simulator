import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Compass, Scale, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-panel">
      <div className="logo-container" style={{ marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Compass size={28} color="var(--primary)" />
          GlobalTrade
        </h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink to="/trade-finance" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <Scale size={20} />
          <span>Trade Finance</span>
        </NavLink>

        <NavLink to="/benchmarking" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
          <span>Benchmarking</span>
        </NavLink>

        <NavLink to="/community" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>Community</span>
        </NavLink>
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
