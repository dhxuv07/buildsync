"use client";

import { Rocket, TrendingUp, HandCoins, ExternalLink } from "lucide-react";

export default function InvestorsDashboard() {
    const startups = [
        {
            id: 1,
            name: "CourtConnect",
            problem: "Local sports organization and pickup game fragmentation.",
            score: 85,
            ask: "$100k",
            category: "SportsTech",
            color: "blue"
        },
        {
            id: 2,
            name: "QuoteSync",
            problem: "Slow service business invoicing and manual estimations.",
            score: 92,
            ask: "$250k",
            category: "SaaS",
            color: "purple"
        },
        {
            id: 3,
            name: "EcoBite",
            problem: "Event food waste logistics and shelter distribution inefficiencies.",
            score: 88,
            ask: "$500k",
            category: "Logistics",
            color: "emerald"
        }
    ];

    const colorMap: Record<string, { bg: string, text: string, border: string, blur: string }> = {
        blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", blur: "bg-blue-500/10" },
        purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", blur: "bg-purple-500/10" },
        emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", blur: "bg-emerald-500/10" }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-[80vh] w-full py-12 animate-fade-in px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Deal Flow</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Discover high-potential AI-structured technical startup pitches before they hit mainstream accelerators.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {startups.map((startup) => {
                    const c = colorMap[startup.color];
                    return (
                        <div key={startup.id} className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 glassmorphism hover:border-blue-500/40 transition-all group flex flex-col relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-32 h-32 ${c.blur} blur-[50px] rounded-full pointer-events-none -z-10`} />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-white group-hover:scale-110 transition-transform">
                                    <Rocket size={24} />
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${c.bg} ${c.text} ${c.border}`}>
                                    {startup.category}
                                </div>
                            </div>

                            <h3 className={`text-2xl font-bold text-white mb-2 ${c.text} transition-colors`}>{startup.name}</h3>

                            <div className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                <span className="font-semibold text-slate-300">Problem:</span> {startup.problem}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1 uppercase">
                                        <TrendingUp size={12} /> Score
                                    </div>
                                    <div className="text-white font-bold text-xl">{startup.score}/100</div>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1 uppercase">
                                        <HandCoins size={12} /> Ask
                                    </div>
                                    <div className="text-emerald-400 font-bold text-xl">{startup.ask}</div>
                                </div>
                            </div>

                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold flex justify-center items-center gap-2 transition-all shadow-lg shadow-blue-500/20 mt-auto">
                                Request Pitch Deck <ExternalLink size={18} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
