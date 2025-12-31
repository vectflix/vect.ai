import React from 'react';

const Benefits = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass max-w-md w-full p-10 rounded-[3rem] border border-white/10">
        <h2 className="text-white font-black text-xl uppercase italic mb-8 tracking-tighter">Peak_Benefits</h2>
        <div className="grid grid-cols-1 gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <i className="fas fa-bolt text-purple-500"></i> Lightning Fast Engine
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <i className="fas fa-code text-purple-500"></i> Tailwind CSS Optimized
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <i className="fas fa-mobile-alt text-purple-500"></i> PWA Mobile Support
          </div>
        </div>
        <button onClick={onClose} className="w-full mt-10 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-white/5 transition">
          Close System View
        </button>
      </div>
    </div>
  );
};

export default Benefits;
