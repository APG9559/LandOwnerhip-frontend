import React, { useEffect, useState } from 'react';
import ActionBtn from './ActionBtn';
import { getDeeds, getEncumbrances } from '../../api/dashboardApi';

const BottomSection: React.FC = () => {
  const [deeds, setDeeds] = useState<any[]>([]);
  const [enc, setEnc] = useState<any[]>([]);

  useEffect(() => {
    getDeeds().then(setDeeds);
    getEncumbrances().then(setEnc);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Recent Deeds</h2>
        <ul className="text-sm space-y-2">
          {deeds.map((d, i) => (
            <li key={i}>{d.deed_number}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Active Encumbrances</h2>
        <ul className="text-sm space-y-2">
          {enc.map((e, i) => (
            <li key={i}>₹{e.encumbrance_amount}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <ActionBtn label="Add Property" />
          <ActionBtn label="Add Party" />
          <ActionBtn label="Create Deed" />
          <ActionBtn label="Add Loan" />
          <ActionBtn label="Upload Doc" />
        </div>
      </div>

    </div>
  );
};

export default BottomSection;