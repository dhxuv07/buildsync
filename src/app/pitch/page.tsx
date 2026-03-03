"use client";

import { useState, useEffect } from "react";
import { IdeaInput } from "@/components/IdeaInput";
import {
    Target,
    Lightbulb,
    Code2,
    CircleDollarSign,
    Activity,
    ArrowRight
} from "lucide-react";

interface EnhancedIdea {
    refinedProblem: string;
    solution: string;
    techStack: string;
    revenueModel: string;
    viabilityScore: number;
}

export default function PitchDashboard() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<EnhancedIdea | null>(null);

    // Initialize rawIdea from localStorage if it exists
    useEffect(() => {
        const storedIdea = localStorage.getItem("rawIdea");
        if (storedIdea) {
            handleAnalyze(storedIdea);
            localStorage.removeItem("rawIdea");
        }
    }, []);

    const handleAnalyze = async (idea: string) => {
        setIsLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/enhance-idea", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idea }),
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data);
            }
        } catch (error) {
            console.error("Failed to enhance idea", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-[80vh] w-full py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    AI Pitch <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Generator</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Pour your raw, unfiltered startup idea into the engine below. We&apos;ll structure it into a compelling pitch ready for investors and co-founders.
                </p>
            </div>

            <IdeaInput onAnalyze={handleAnalyze} isLoading={isLoading} />

            {result && (
                <div className="w-full max-w-4xl mt-16 space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between glassmorphism p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 rounded-full text-emerald-400">
                                <Activity size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Viability Score</h3>
                                <p className="text-emerald-400 font-medium">Market Analysis Complete</p>
                            </div>
                        </div>
                        <div className="text-5xl font-extrabold text-white">
                            {result.viabilityScore}<span className="text-2xl text-emerald-400">/100</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glassmorphism p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4 text-red-400">
                                <Target size={24} />
                                <h3 className="text-lg font-bold text-white">The Problem</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{result.refinedProblem}</p>
                        </div>

                        <div className="glassmorphism p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4 text-blue-400">
                                <Lightbulb size={24} />
                                <h3 className="text-lg font-bold text-white">The Solution</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{result.solution}</p>
                        </div>

                        <div className="glassmorphism p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4 text-purple-400">
                                <Code2 size={24} />
                                <h3 className="text-lg font-bold text-white">Recommended Stack</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{result.techStack}</p>
                        </div>

                        <div className="glassmorphism p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4 text-amber-400">
                                <CircleDollarSign size={24} />
                                <h3 className="text-lg font-bold text-white">Revenue Model</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{result.revenueModel}</p>
                        </div>
                    </div>

                    <div className="pt-8 flex justify-center">
                        <button className="flex items-center gap-2 bg-slate-100 hover:bg-white text-slate-900 px-8 py-4 text-lg rounded-full font-bold shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all">
                            Save Ownership to Blockchain <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
