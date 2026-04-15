import React from 'react';

interface ActionBtnProps {
  label: string;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ label }) => (
  <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md text-sm">
    {label}
  </button>
);

export default ActionBtn;
