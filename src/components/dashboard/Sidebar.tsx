import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-blue-900 text-white flex flex-col">
    <div className="p-5 text-xl font-bold border-b border-blue-700">
      Land Registry
    </div>

    <nav className="flex-1 p-4 space-y-3">
      <SidebarItem label="Dashboard" to="/dashboard" />
      <SidebarItem label="Properties" to="/properties" />
      <SidebarItem label="Parties" to="/parties" />
      <SidebarItem label="Deeds" to="/deeds" />
      <SidebarItem label="Ownership" to="/ownership" />
      <SidebarItem label="Encumbrances" to="/encumbrances" />
      <SidebarItem label="Documents" to="/documents" />

      {/* <div className="mt-6 text-xs text-gray-300">ADMIN</div>
      <SidebarItem label="Users" to="/users" />
      <SidebarItem label="Roles" to="/roles" /> */}
    </nav>

    <div className="p-4 border-t border-blue-700">
      <p className="text-sm">Admin User</p>
      <p className="text-xs text-gray-300">Administrator</p>
    </div>
  </aside>
);

export default Sidebar;
