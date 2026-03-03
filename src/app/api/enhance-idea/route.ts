import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { idea } = await req.json();

        if (!idea) {
            return NextResponse.json({ error: "Idea is required" }, { status: 400 });
        }

        // Simulate AI processing delay Let's assume the LLM is doing its thing
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock AI response for the MVP Pitch structured by the LLM
        let mockResponse;
        const lowerIdea = idea.toLowerCase();

        if (lowerIdea.includes("marketing")) {
            mockResponse = {
                refinedProblem: "Small businesses struggle with low SEO and poor lead generation, lacking the budget for dedicated marketing agencies.",
                solution: "An AI Content Engine that automatically generates targeted content and optimizes ad campaigns natively.",
                techStack: "Frontend: Next.js | Backend: Node.js | AI: OpenAI GPT-4 API",
                revenueModel: "SaaS monthly subscription tiered by features.",
                viabilityScore: 92,
            };
        } else if (lowerIdea.includes("quote") || lowerIdea.includes("service")) {
            mockResponse = {
                refinedProblem: "Service professionals spend hours dealing with manual/slow invoicing and driving to locations just to provide quotes.",
                solution: "An Automated Estimator that uses AI to analyze customer requests and generate instant, accurate quotes.",
                techStack: "Frontend: Next.js | Backend: PostgreSQL, Node.js",
                revenueModel: "Pay-per-quote or a flat monthly subscription for service professionals.",
                viabilityScore: 88,
            };
        } else if (lowerIdea.includes("food") || lowerIdea.includes("waste")) {
            mockResponse = {
                refinedProblem: "High volume of food waste in large corporate events and local restaurants while nearby shelters lack reliable food donations.",
                solution: "A real-time Food Redistribution Platform connecting event organizers with verified local food banks and volunteer drivers.",
                techStack: "Frontend: Next.js | Backend: Node.js, Express, MongoDB",
                revenueModel: "Corporate subscription for ESG/Sustainability reporting and tax-deductible receipt generation.",
                viabilityScore: 89,
            };
        } else {
            mockResponse = {
                refinedProblem: "Founders struggle to find reliable technical co-founders and lack structured blueprints for building scalable MVPs.",
                solution: "BuildSync: A centralized platform providing AI-generated technical roadmaps, developer matchmaking, and idea validation.",
                techStack: "Frontend: Next.js / Tailwind | Backend: Node.js, PostgreSQL | Web3: Polygon for idea hashing.",
                revenueModel: "Freemium access, premium matchmaking fees, and enterprise API licensing.",
                viabilityScore: 95,
            };
        }

        return NextResponse.json(mockResponse);
    } catch (error) {
        return NextResponse.json({ error: "Failed to process idea" }, { status: 500 });
    }
}
