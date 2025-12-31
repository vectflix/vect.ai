import React from 'react';

const Benefits = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass max-w-md w-full p-10 rounded-[3rem] border border-white/10">
        <h2 className="text-white font-black text-xl uppercase italic mb-8 tracking-tighter flex items-center gap-2">
          <i className="fas fa-star text-purple-500"></i> Peak_System_Perks
        </h2>
        
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: 'Lightning Speed', desc: 'Sub-3s generation times.' },
            { title: 'Tailwind Optimized', desc: 'Ready-to-use production code.' },
            { title: 'PWA Enabled', desc: 'Install VECT.AI as a native app.' },
            { title: 'Mobile Responsive', desc: 'Build on any device anywhere.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
              <i className="fas fa-rocket text-purple-400 mt-1"></i>
              <div>
                <p className="text-[10px] font-black text-white uppercase">{item.title}</p>
                <p className="text-[9px] text-gray-500 font-bold uppercase">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose} 
          className="w-full mt-10 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-white/10 transition"
        >
          Exit System View
        </button>
      </div>
    </div>
  );
};

export default Benefits;
