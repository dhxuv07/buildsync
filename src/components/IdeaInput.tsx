"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

interface IdeaInputProps {
    onAnalyze: (idea: string) => void;
    isLoading: boolean;
}

export function IdeaInput({ onAnalyze, isLoading }: IdeaInputProps) {
    const [idea, setIdea] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (idea.trim()) {
            onAnalyze(idea);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-4">
            <div className="relative">
                <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="I want to build an app for booking local basketball courts..."
                    className="w-full h-40 p-6 bg-slate-900/50 border border-slate-700/50 rounded-2xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none glassmorphism"
                    disabled={isLoading}
                />
                <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-medium">
                    {idea.length} chars
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading || !idea.trim()}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_-10px_rgba(79,70,229,0.5)] transition-all"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Enhancing Idea...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} />
                        Structure My Idea
                    </>
                )}
            </button>
        </form>
    );
}
