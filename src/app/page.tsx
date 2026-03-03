"use client";

import { useState } from "react";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";
import { IdeaInput } from "@/components/IdeaInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (idea: string) => {
    setIsLoading(true);
    // You can redirect to the Pitch dashboard or show local results
    // Let's redirect to `/pitch` with the idea as a query param or just navigate
    // For MVP flow, we'll smoothly route to Pitch Dashboard
    localStorage.setItem("rawIdea", idea);

    // Simulate initial loading before redirect
    setTimeout(() => {
      router.push("/pitch");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center animate-fade-in relative z-10 py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="inline-flex items-center space-x-2 glassmorphism px-3 py-1 rounded-full text-xs font-semibold text-blue-400 mb-6 border border-blue-500/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span>BuildSync MVP v1.0 Live</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Faster.</span> <br />
        Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Forever.</span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
        Stop sitting on your ideas. Use AI to structure your startup pitch, secure ownership instantly via the blockchain, and match with the perfect co-founders.
      </p>

      {/* Embedded Idea Input on Homepage */}
      <div className="w-full max-w-3xl mb-16 relative z-20">
        <IdeaInput onAnalyze={handleAnalyze} isLoading={isLoading} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left border-t border-white/5 pt-16">
        <div className="glassmorphism p-8 rounded-3xl hover:border-blue-500/50 transition-colors border border-white/5 group">
          <div className="p-3 bg-blue-500/10 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
            <Zap className="text-blue-400" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">AI Enhancement</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Transform raw ideas into structured roadmaps, pitch decks, and technical architectures instantly using LLMs.</p>
        </div>
        <div className="glassmorphism p-8 rounded-3xl hover:border-purple-500/50 transition-colors border border-white/5 group">
          <div className="p-3 bg-purple-500/10 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
            <Shield className="text-purple-400" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Web3 Verification</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Hash your ideas directly to the Polygon testnet. Generate an immutable NFT proof of ownership.</p>
        </div>
        <div className="glassmorphism p-8 rounded-3xl hover:border-emerald-500/50 transition-colors border border-white/5 group">
          <div className="p-3 bg-emerald-500/10 rounded-xl w-max mb-6 group-hover:scale-110 transition-transform">
            <Box className="text-emerald-400" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Smart Matchmaking</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Find technical co-founders perfectly aligned with your generated stack from our developer network.</p>
        </div>
      </div>
    </div>
  );
}
