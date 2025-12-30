import React from 'react';

const Benefits = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefitsList = [
    { icon: "fa-bolt", title: "Peak Speed", desc: "Optimized code delivery in seconds." },
    { icon: "fa-cloud-upload-alt", title: "Instant Host", desc: "Deploy directly to the cloud with Pro." },
    { icon: "fa-shield-alt", title: "Secure Ops", desc: "Enterprise-grade encryption for every app." },
    { icon: "fa-sync", title: "Global Sync", desc: "Your apps, ranked and saved globally." }
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative glass max-w-lg w-full p-8 lg:p-12 rounded-[3rem] border border-white/10 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">Peak Benefits</h2>
            <p className="text-[10px] text-purple-400 font-bold tracking-widest uppercase mt-1">Vect.ai System Access</p>
          </div>
          <button onClick={onClose} className="h-10 w-10 glass rounded-full flex items-center justify-center hover:text-red-400 transition text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {benefitsList.map((item, index) => (
            <div key={index} className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-colors group">
              <i className={`fas ${item.icon} text-purple-500 mb-3 group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-white font-bold text-xs uppercase mb-1">{item.title}</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-purple-600/20 rounded-3xl border border-purple-500/30 text-center">
          <p className="text-xs text-purple-200 mb-4 font-medium italic">"The highest performance for the modern web."</p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition uppercase text-xs"
          >
            Acknowledge System Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
