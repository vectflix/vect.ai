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
  
  const [showPricing, setShowPricing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  // Initialize usage count from local storage
  useEffect(() => {
    const savedCount = localStorage.getItem('peak_count') || 0;
    setGenCount(parseInt(savedCount));
  }, []);

  // Typing effect for the code tab
  useEffect(() => {
    if (isGenerating && generatedCode) {
      let i = 0; setDisplayedCode("");
      const interval = setInterval(() => {
        setDisplayedCode(prev => prev + generatedCode.charAt(i));
        i++;
        if (i >= generatedCode.length) { 
          clearInterval(interval); 
          setIsGenerating(false); 
        }
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
        body: JSON.stringify({ prompt })
      });
      
      const data = await res.json();
      const cleanCode = data.code.replace(/```html|```jsx|```/g, "").trim();
      
      setGeneratedCode(cleanCode);
      const newCount = genCount + 1;
      setGenCount(newCount);
      localStorage.setItem('peak_count', newCount.toString());
    } catch (e) {
      setGeneratedCode("/* ERROR: Engine warming up. Please retry in 10s. */");
      setIsGenerating(false);
    }
  };

  const previewDoc = `
    <html>
      <head><script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script></head>
      <body class="bg-white text-black p-4">${generatedCode}</body>
    </html>
  `;

  return (
    <div className="flex flex-col min-h-screen bg-[#020205] text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="font-black italic text-2xl tracking-tighter uppercase">Vect.ai</h1>
        <div onClick={() => setShowBenefits(true)} className="glass px-4 py-2 rounded-full text-[10px] font-bold border-purple-500/30 cursor-pointer hover:bg-white/5 transition">
          USAGE: <span className="text-purple-400">{isPro ? "UNLIMITED" : `${genCount}/5`}</span>
        </div>
      </header>

      {/* Grid Container */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="lg:col-span-4 glass p-6 rounded-[2.5rem] flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black uppercase text-gray-500">Co-Pilot Engine</span>
            <i onClick={() => setShowSettings(true)} className="fas fa-sliders-h cursor-pointer text-white p-2 hover:bg-white/10 rounded-full transition"></i>
          </div>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your peak component..." 
            className="w-full flex-1 bg-black/40 rounded-3xl p-4 text-sm outline-none border border-white/5 focus:border-purple-500 transition resize-none"
          />
          <button onClick={handleGenerate} className="w-full py-5 bg-purple-600 rounded-3xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] transition shadow-lg shadow-purple-500/20">
            {isGenerating ? "Processing..." : "Generate Peak App"}
          </button>
        </div>

        <div className="lg:col-span-8 glass rounded-[2.5rem] overflow-hidden flex flex-col min-h-[400px]">
          <div className="p-4 border-b border-white/5 flex gap-4 bg-white/5">
            <button onClick={() => setActiveTab('preview')} className={`text-[10px] font-black uppercase transition ${activeTab === 'preview' ? 'text-white' : 'text-gray-500'}`}>Preview</button>
            <button onClick={() => setActiveTab('code')} className={`text-[10px] font-black uppercase transition ${activeTab === 'code' ? 'text-white' : 'text-gray-500'}`}>Code</button>
          </div>
          <div className="flex-1 relative overflow-auto">
            {activeTab === 'preview' ? (
              <iframe srcDoc={previewDoc} className="w-full h-full border-none bg-white" title="preview" />
            ) : (
              <pre className="p-6 text-purple-300 font-mono text-[11px] leading-relaxed">
                <code>{displayedCode || "// Engine output awaits..."}</code>
              </pre>
            )}
          </div>
        </div>
      </main>

      {/* Footer (Required Features) */}
      <footer className="p-4 glass border-t border-white/10 flex flex-wrap justify-center gap-6 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
        <span>&copy; 2025 VECT.AI</span>
        <span className="cursor-pointer hover:text-white">Cookies</span>
        <span className="cursor-pointer hover:text-white">Privacy</span>
        <span className="cursor-pointer hover:text-white">My Account</span>
      </footer>

      {/* Modals */}
      <Sidebar isOpen={showSettings} onClose={() => setShowSettings(false)} />
      <Pricing isOpen={showPricing} onClose={() => setShowPricing(false)} onUpgrade={() => {setIsPro(true); setShowPricing(false);}} />
      <Benefits isOpen={showBenefits} onClose={() => setShowBenefits(false)} />
    </div>
  );
};

export default App;
