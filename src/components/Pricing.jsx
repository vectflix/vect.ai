import React from 'react';

const Pricing = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="glass max-w-sm w-full p-8 rounded-[3rem] text-center relative border border-purple-500/30">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white">
          <i className="fas fa-times"></i>
        </button>
        
        <div className="h-20 w-20 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/50 rotate-3">
          <i className="fas fa-bolt text-white text-3xl"></i>
        </div>

        <h2 className="text-white font-black text-2xl uppercase italic mb-2 tracking-tighter">Limit Reached</h2>
        <p className="text-gray-400 text-xs mb-8 uppercase font-bold tracking-widest">Upgrade to bypass neural constraints</p>
        
        <div className="bg-white/5 rounded-3xl p-6 mb-8 text-left border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <i className="fas fa-check text-purple-500 text-xs"></i>
            <span className="text-[10px] text-white font-bold uppercase">Unlimited Peak Generations</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-check text-purple-500 text-xs"></i>
            <span className="text-[10px] text-white font-bold uppercase">Ultra-High Priority Queue</span>
          </div>
        </div>

        <button 
          onClick={onUpgrade} 
          className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-sm hover:bg-purple-600 hover:text-white transition shadow-xl"
        >
          Activate Pro Plan
        </button>
      </div>
    </div>
  );
};

export default Pricing;
