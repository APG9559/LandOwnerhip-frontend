import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';
import { getStats } from '../../api/dashboardApi';

const StatsGrid: React.FC = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    getStats()
      .then(setStats)
      .catch(console.error);
  }, []);

  if (!stats) return <p>Loading stats...</p>;

  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      <StatCard title="Total Properties" value={stats.total_properties} color="bg-blue-500" />
      <StatCard title="Total Parties" value={stats.total_parties} color="bg-green-500" />
      <StatCard title="Total Deeds" value={stats.total_deeds} color="bg-purple-500" />
      <StatCard title="Active Owners" value={stats.active_owners} color="bg-yellow-500" />
      <StatCard title="Encumbrances" value={stats.active_encumbrances} color="bg-red-500" />
    </div>
  );
};

export default StatsGrid;