import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => (
  <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
    <div className={`w-10 h-10 rounded-md ${color}`} />
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  </div>
);

export default StatCard;
