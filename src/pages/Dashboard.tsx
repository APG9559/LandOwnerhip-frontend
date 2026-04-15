import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import StatsGrid from '../components/dashboard/StatsGrid';
import MainGrid from '../components/dashboard/MainGrid';
import BottomSection from '../components/dashboard/BottomSection';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome back, Admin 👋</h1>
          <div className="text-sm text-gray-600">Admin User</div>
        </div>

        <StatsGrid />
        <MainGrid />
        <BottomSection />
      </main>
    </div>
  );
};

export default Dashboard;