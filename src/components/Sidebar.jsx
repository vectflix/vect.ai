import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-80 glass z-[100] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 p-8`}>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-white font-black uppercase italic">System_Settings</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white"><i className="fas fa-times"></i></button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Engine_Mode</span>
          <span className="text-[10px] font-bold text-purple-400">PEAK_v4.2</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Safe_Mode</span>
          <div className="h-4 w-8 bg-purple-600 rounded-full flex items-center px-1"><div className="h-2 w-2 bg-white rounded-full"></div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
