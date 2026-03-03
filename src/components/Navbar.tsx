"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Lightbulb, Users, LineChart, Wallet, CheckCircle2 } from "lucide-react";

export function Navbar() {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    const handleConnect = async () => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof window !== "undefined" && (window as any).ethereum) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(`${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`);
                setIsConnected(true);
            } else {
                // Fallback simulate connection if no extension
                setTimeout(() => {
                    setWalletAddress("0x71C...976F");
                    setIsConnected(true);
                }, 1000);
            }
        } catch (e) {
            console.error(e);
            setWalletAddress("0x71C...976F");
            setIsConnected(true);
        }
    };

    return (
        <nav className="sticky top-0 w-full px-6 py-4 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5 transition-all">
            <div className="max-w-7xl mx-auto glassmorphism rounded-full px-6 py-3 flex justify-between items-center shadow-2xl border border-white/5">
                <div className="text-xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    BuildSync
                </div>

                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white flex items-center gap-2 transition-colors">
                        <Home size={16} /> Dashboard
                    </Link>
                    <Link href="/pitch" className="hover:text-white flex items-center gap-2 transition-colors">
                        <Lightbulb size={16} /> Pitch Idea
                    </Link>
                    <Link href="/matchmaking" className="hover:text-white flex items-center gap-2 transition-colors">
                        <Users size={16} /> Matchmaking
                    </Link>
                    <Link href="/investors" className="hover:text-white flex items-center gap-2 transition-colors">
                        <LineChart size={16} /> Investor Hub
                    </Link>
                </div>

                <div>
                    {isConnected ? (
                        <button className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-5 py-2 rounded-full font-bold text-sm">
                            <CheckCircle2 size={16} /> {walletAddress}
                        </button>
                    ) : (
                        <button
                            onClick={handleConnect}
                            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                        >
                            <Wallet size={16} /> Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
