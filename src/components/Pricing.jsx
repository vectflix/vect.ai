import React from 'react';

const Pricing = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="glass max-w-sm w-full p-8 rounded-[3rem] text-center relative border border-purple-500/30">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white">
          <i className="fas fa-times"></i>
        </button>
        <div className="h-16 w-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/40">
          <i className="fas fa-crown text-white text-2xl"></i>
        </div>
        <h2 className="text-white font-black text-2xl uppercase italic mb-2">Limit Reached</h2>
        <p className="text-gray-400 text-[10px] mb-8 uppercase font-bold tracking-widest">Upgrade for unlimited neural generations</p>
        <button onClick={onUpgrade} className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase text-xs hover:bg-purple-600 hover:text-white transition shadow-xl">
          Activate Pro Plan
        </button>
      </div>
    </div>
  );
};

export default Pricing;
