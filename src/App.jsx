import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Pricing from './components/Pricing.jsx';
import Benefits from './components/Benefits.jsx';

const App = () => {
  const [genCount, setGenCount] = useState(0);
  const [isPro, setIsPro] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [displayedCode, setDisplayedCode] = useState(""); 
  const [activeTab, setActiveTab] = useState('preview');
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  
  const [showPricing, setShowPricing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  // Logic to handle PWA installation
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert("System already installed or browsing in limited mode.");
    }
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const lastReset = localStorage.getItem('peak_reset_month');
    if (lastReset !== currentMonth.toString()) {
      localStorage.setItem('peak_gen_count', '0');
      localStorage.setItem('peak_reset_month', currentMonth.toString());
      setGenCount(0);
    } else {
      setGenCount(parseInt(localStorage.getItem('peak_gen_count') || '0'));
    }
  }, []);

  useEffect(() => {
    if (isGenerating && generatedCode) {
      let i = 0; setDisplayedCode("");
      const interval = setInterval(() => {
        setDisplayedCode(prev => prev + generatedCode.charAt(i));
        i++;
        if (i >= generatedCode.length) { clearInterval(interval); setIsGenerating(false); }
      }, 5);
      return () => clearInterval(interval);
    }
  }, [isGenerating, generatedCode]);

  const handleGenerate = async () => {
    if (genCount >= 5 && !isPro) { setShowPricing(true); return; }
    setIsGenerating(true);
    setActiveTab('code');
    try {
      const res = await fetch('https://vect-ai.onrender.com/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, isPro })
      });
      const data = await res.json();
      setGeneratedCode(data.code);
      const newCount = genCount + 1;
      setGenCount(newCount);
      localStorage.setItem('peak_gen_count', newCount.toString());
    } catch (e) {
      setGeneratedCode("/* PEAK_ERROR: Engine waking up. Retry in 20s. Check Render logs. */");
      setIsGenerating(false);
    }
  };

  const previewDoc = `
    <html>
      <head><script src="https://cdn.tailwindcss.com"></script></head>
      <body class="bg-white text-black">${generatedCode}</body>
    </html>
  `;

  return (
    <div className="flex-1 p-4 lg:p-10 pb-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        <button onClick={handleInstall} className="glass px-4 py-2 rounded-full text-[10px] font-bold text-white hover:bg-purple-600 transition flex items-center gap-2">
           <i className="fas fa-download"></i> INSTALL APP
        </button>
        <div onClick={() => setShowBenefits(true)} className="glass px-4 py-2 rounded-full text-[10px] font-bold cursor-pointer hover:border-purple-500 transition flex items-center gap-2">
          <span>USAGE:</span> 
          <span className={genCount >= 5 ? "text-red-500" : "text-purple-400"}>
            {isPro ? "UNLIMITED" : `${genCount}/5`}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto peak-grid-container">
        <div className="lg:col-span-4 glass p-6 rounded-[2.5rem] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-black italic text-white uppercase">Co-Pilot</h2>
            <i onClick={() => setShowSettings(true)} className="fas fa-sliders-h cursor-pointer text-white p-2 hover:bg-white/10 rounded-full transition"></i>
          </div>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Build something peak..."
            className="flex-1 min-h-[300px] bg-black/40 border border-white/5 rounded-3xl p-6 text-sm text-white outline-none focus:border-purple-500 transition"
          />
          <button onClick={handleGenerate} className="w-full py-5 bg-purple-600 rounded-3xl font-black text-white hover:scale-[1.02] transition shadow-lg shadow-purple-500/20">
            {isGenerating ? "GENERATING..." : "GENERATE PEAK APP"}
          </button>
        </div>

        <div className="lg:col-span-8 glass rounded-[2.5rem] overflow-hidden flex flex-col min-h-[500px]">
          <div className="p-4 flex gap-2 bg-white/5 border-b border-white/5">
            <button onClick={() => setActiveTab('preview')} className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === 'preview' ? 'bg-white text-black' : 'text-gray-400'}`}>Preview</button>
            <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === 'code' ? 'bg-white text-black' : 'text-gray-400'}`}>Code</button>
          </div>
          <div className="flex-1 bg-[#020205] overflow-auto">
            {activeTab === 'preview' ? (
                generatedCode ? (
                    <iframe srcDoc={previewDoc} title="preview" className="w-full h-full border-none bg-white" />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-700 font-mono text-[10px] uppercase tracking-widest">Awaiting_Input_</div>
                )
            ) : (
               <div className="p-6">
                 <pre className="text-[11px] text-purple-300 font-mono leading-relaxed"><code>{displayedCode || "// Code will appear here..."}</code></pre>
               </div>
            )}
          </div>
        </div>
      </div>

      <Sidebar isOpen={showSettings} onClose={() => setShowSettings(false)} />
      <Pricing isOpen={showPricing} onClose={() => setShowPricing(false)} onUpgrade={() => {setIsPro(true); setShowPricing(false);}} />
      <Benefits isOpen={showBenefits} onClose={() => setShowBenefits(false)} />
    </div>
  );
};

export default App;
