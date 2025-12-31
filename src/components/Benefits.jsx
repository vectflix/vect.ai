import React from 'react';

const Benefits = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass max-w-md w-full p-10 rounded-[3rem]">
        <h2 className="text-white font-black text-xl uppercase italic mb-6">Peak_Benefits</h2>
        <div className="space-y-4">
          {['Lightning Fast Generation', 'Clean Tailwind Output', 'One-Click PWA Install', 'Cloud Sync (Coming Soon)'].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase">
              <i className="fas fa-check-circle text-purple-500"></i> {text}
            </div>
          ))}
        </div>
        <button onClick={onClose} className="w-full mt-10 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-white/5 transition">Close System</button>
      </div>
    </div>
  );
};

export default Benefits;
