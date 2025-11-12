import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard.jsx';
import Resources from './pages/Resources.jsx';
import DemandRequests from './pages/DemandRequests.jsx';
import Volunteers from './pages/Volunteers.jsx';
import Logistics from './pages/Logistics.jsx';
import Analytics from './pages/Analytics.jsx';
import AccessControl from './pages/AccessControl.jsx';
import './App.css';

const links = [
  { to: '/', label: 'Overview', exact: true },
  { to: '/resources', label: 'Resources' },
  { to: '/demand', label: 'Demand Requests' },
  { to: '/volunteers', label: 'Volunteers' },
  { to: '/logistics', label: 'Logistics' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/admin', label: 'User Access' },
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : 'sidebar--collapsed'}`}>
        <div className="sidebar__brand">Adaptive Disaster Ops</div>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <button type="button" className="topbar__toggle" onClick={() => setSidebarOpen((prev) => !prev)}>
            ☰
          </button>
          <div>
            <h2>Command Center</h2>
            <p>Real-time coordination for relief and response</p>
          </div>
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/demand" element={<DemandRequests />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/admin" element={<AccessControl />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
