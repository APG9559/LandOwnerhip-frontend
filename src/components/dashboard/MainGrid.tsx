import React, { useEffect, useState } from 'react';
import { getActivity } from '../../api/dashboardApi';

const MainGrid: React.FC = () => {
  const [activity, setActivity] = useState<any[]>([]);

  useEffect(() => {
    getActivity().then(setActivity);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-sm">
          {activity.map((a, i) => (
            <li key={i}>{a.text} - {a.time}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">System Overview</h2>
        <div>Chart Later</div>
      </div>
    </div>
  );
};

export default MainGrid;