"use client";

import { CheckCircle2, Github, Code2, CodeSquare, Star } from "lucide-react";

export default function MatchmakingDashboard() {
    const matches = [
        {
            id: 1,
            name: "Alex Rivera",
            role: "Web3 Architect",
            score: 94,
            skills: ["Solidity", "Hardhat", "Next.js"],
            status: "Available now",
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Full-Stack Next.js Dev",
            score: 88,
            skills: ["React", "PostgreSQL", "Tailwind"],
            status: "Actively looking",
        },
        {
            id: 3,
            name: "Marcus Johnson",
            role: "Python AI Engineer",
            score: 91,
            skills: ["FastAPI", "OpenAI", "PyTorch"],
            status: "Open to co-found",
        },
        {
            id: 4,
            name: "Elena Rodriguez",
            role: "Mobile App Lead",
            score: 85,
            skills: ["React Native", "Expo", "Node.js"],
            status: "Available in 2 weeks",
        }
    ];

    return (
        <div className="flex flex-col items-center justify-start min-h-[80vh] w-full py-12 animate-fade-in px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Your AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Matches</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    We&apos;ve analyzed your generated startup stack and found the perfect technical co-founders to help you build it.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {matches.map((match) => (
                    <div key={match.id} className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-6 glassmorphism hover:border-emerald-500/50 transition-all flex flex-col group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-emerald-500/20 flex items-center justify-center shadow-lg">
                                <span className="text-xl font-bold text-slate-300">{match.name.charAt(0)}</span>
                            </div>
                            <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                                <CheckCircle2 size={12} /> {match.score}%
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{match.name}</h3>
                        <p className="text-emerald-400 font-medium text-sm mb-4">{match.role}</p>

                        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                            {match.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700 flex items-center gap-1">
                                    <Code2 size={12} /> {skill}
                                </span>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-700/50 mt-auto">
                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                                <Star size={14} className="text-amber-400" /> {match.status}
                            </div>
                            <button className="w-full bg-white text-black font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-200 transition-colors">
                                <Github size={18} /> Invite to Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
