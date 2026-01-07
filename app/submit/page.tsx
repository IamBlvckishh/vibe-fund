"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

export default function SubmitProject() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [repoUrl, setRepoUrl] = useState("");

  const handleVerify = () => {
    setLoading(true);
    // Simulate the Solana "Vibe Check" scanning the blockchain
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-10 rounded-[3rem] border border-white/10"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-black italic mb-2 tracking-tighter">PHASE_01</h1>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Proof of Identity</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-2 block">GitHub Repository URL</label>
                  <div className="relative">
                    <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="text"
                      placeholder="github.com/user/repo"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 font-mono text-sm focus:border-cyan-500/50 outline-none transition-all"
                      onChange={(e) => setRepoUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase font-bold mb-2 block">Solana Wallet (Read-Only)</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="text"
                      placeholder="Paste public address..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 font-mono text-sm focus:border-cyan-500/50 outline-none transition-all"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  onClick={handleVerify}
                  disabled={loading || !address || !repoUrl}
                  className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Vibe Status"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                <ShieldCheck className="w-10 h-10 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-black mb-4 italic tracking-tighter uppercase">Project_Linked</h2>
              <p className="text-gray-500 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                Tokens detected. Your project will be listed in the <span className="text-white font-bold">Priority Arena</span> with a 1.5x vibe multiplier.
              </p>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="group flex items-center gap-3 mx-auto text-cyan-400 font-bold tracking-widest uppercase text-xs"
              >
                Enter the Arena <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
