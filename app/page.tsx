"use client";
import { motion } from "framer-motion";
import { Github, Zap, Flame, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <main className="min-h-screen p-6 md:p-24 relative">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <header className="flex justify-between items-center mb-20 max-w-6xl mx-auto">
        <h1 className="text-2xl font-black tracking-tighter italic vibe-glow">VIBE/FUND</h1>
        <button className="px-6 py-2 glass rounded-full text-xs font-bold hover:bg-white/10 transition-all">
          CONNECT GITHUB
        </button>
      </header>

      <section className="max-w-4xl mx-auto text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase"
        >
          Stake your <span className="text-cyan-400">Vibe</span>
        </motion.h2>
        
        <div className="max-w-md mx-auto relative group">
          <input 
            type="text"
            placeholder="PASTE SOLANA ADDRESS"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-center font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Search className="absolute right-4 top-4 text-gray-500 group-hover:text-cyan-400 transition-colors w-5 h-5" />
        </div>
      </section>

      {/* The Arena Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-[2.5rem] relative group"
          >
            <Github className="w-8 h-8 mb-6 text-gray-400" />
            <h3 className="text-xl font-bold mb-2">Project_Neon_{i}</h3>
            <p className="text-gray-500 text-sm mb-8">Minimalist state management for Solana vibecoders.</p>
            
            <div className="flex justify-between items-center border-t border-white/5 pt-6">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-red-500/10 rounded-xl transition-colors"><Zap className="w-4 h-4 text-gray-500" /></button>
                <button className="p-2 hover:bg-cyan-500/10 rounded-xl transition-colors"><Flame className="w-4 h-4 text-cyan-400" /></button>
              </div>
              <span className="font-mono text-lg font-bold">420</span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
