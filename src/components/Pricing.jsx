import React from 'react';

const Pricing = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative glass max-w-sm w-full p-8 rounded-[2.5rem] border border-purple-500/30 text-center animate-in zoom-in duration-300">
        <div className="h-16 w-16 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/20">
          <i className="fas fa-crown text-2xl text-white"></i>
        </div>
        <h2 className="text-2xl font-black italic mb-2 tracking-tighter text-white">PEAK LIMIT REACHED</h2>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">You've hit your 5 free monthly apps. Upgrade to Pro for unlimited generation and cloud hosting.</p>
        
        <button onClick={onUpgrade} className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all transform active:scale-95 mb-4 shadow-lg">
          UPGRADE TO PRO - $19
        </button>
        <button onClick={onClose} className="text-xs text-gray-500 hover:text-white transition">I'll wait until next month</button>
      </div>
    </div>
  );
};

export default Pricing;
