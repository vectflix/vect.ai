import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`absolute right-0 top-0 h-full w-full max-w-[320px] glass border-l border-white/10 p-8 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-black italic text-xl tracking-tighter text-white">SETTINGS</h2>
          <i onClick={onClose} className="fas fa-times cursor-pointer hover:text-purple-400 text-lg text-white"></i>
        </div>
        
        <div className="space-y-6">
          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-[10px] text-gray-500 font-bold mb-3 uppercase tracking-widest">Engine Mode</p>
            <select className="w-full bg-black border border-white/10 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500">
              <option>Peak Performance (Default)</option>
              <option>Creative Mode</option>
              <option>Legacy v3.0</option>
            </select>
          </div>

          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-[10px] text-gray-500 font-bold mb-3 uppercase tracking-widest">Global Sync</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-300">Auto-update Rankings</span>
              <div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-8 right-8 text-center">
            <p className="text-[9px] text-gray-600 font-mono">VECT_ENGINE_ID: V-2025-AX</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
