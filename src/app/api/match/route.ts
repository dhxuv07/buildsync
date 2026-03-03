import { NextResponse } from "next/server";

export async function GET() {
    const mockMatches = [
        {
            id: "1",
            name: "Alex Dev",
            role: "Full-Stack Web3 Developer",
            skills: ["Solidity", "Next.js", "TypeScript"],
            githubTags: ["ethereum", "defi"],
            compatibilityScore: 94,
            availability: "Part-time",
        },
        {
            id: "2",
            name: "Sarah Chen",
            role: "Backend Architect",
            skills: ["Node.js", "PostgreSQL", "System Design"],
            githubTags: ["apis", "microservices"],
            compatibilityScore: 88,
            availability: "Full-time",
        },
        {
            id: "3",
            name: "Marcus K",
            role: "Smart Contract Engineer",
            skills: ["Solidity", "Hardhat", "Rust"],
            githubTags: ["polygon", "zk-rollups"],
            compatibilityScore: 82,
            availability: "Contract",
        },
    ];

    return NextResponse.json({ matches: mockMatches });
}
