import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-80 glass z-[100] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out p-8 border-l border-white/10 shadow-2xl`}>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
          <h2 className="text-white font-black uppercase italic tracking-tighter">System_Config</h2>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition">
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-purple-500/50 transition">
          <p className="text-[10px] font-black text-gray-500 uppercase mb-1">Engine_Version</p>
          <p className="text-white font-mono text-sm">PEAK_V4.2_STABLE</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-black text-gray-500 uppercase">Neural_Link</p>
            <span className="text-[10px] font-bold text-green-500 uppercase">Active</span>
          </div>
        </div>

        <div className="mt-auto pt-10">
          <button className="w-full py-4 border border-purple-500/20 rounded-2xl text-[10px] font-black text-purple-400 uppercase tracking-widest hover:bg-purple-500 hover:text-white transition">
            Reset System Cache
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
