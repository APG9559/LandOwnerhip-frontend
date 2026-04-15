import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md cursor-pointer transition-colors duration-150 ${
        isActive ? 'bg-blue-700' : 'hover:bg-blue-800'
      }`
    }
  >
    {label}
  </NavLink>
);

export default SidebarItem;
