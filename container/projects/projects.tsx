"use client";

import Animate from "@/components/common/animate";
import { useState } from "react";

const PROJECTS = [
    {
        num: "01",
        cat: "E-commerce · Payment",
        name: "Japan E-commerce Payment Module",
        desc:
            "Multi-gateway payment architecture supporting Stripe, Univapay, and Amazon Pay. Polymorphic payments table with UUID keys, built for a production Laravel + Next.js app.",
        tags: ["Laravel", "Next.js", "Stripe", "PostgreSQL"],
        link: "#",
    },
    {
        num: "02",
        cat: "Event · QR · Ticketing",
        name: "Event Ticketing System",
        desc:
            "Full event ticketing platform with QR code generation and HMAC-signed token verification. KOMOJU payment integration with a four-table booking architecture.",
        tags: ["React", "Laravel", "KOMOJU", "HMAC"],
        link: "#",
    },
    {
        num: "03",
        cat: "Calendar · API Integration",
        name: "Nepali Bikram Sambat Calendar",
        desc:
            "Merges Bikram Sambat date data with tithi (lunar) information via custom scraper service. PostgreSQL persistence with Laravel + Next.js.",
        tags: ["Next.js", "Laravel", "PostgreSQL", "Scraper"],
        link: "#",
    },
    {
        num: "04",
        cat: "AI · RAG · Chatbot",
        name: "RAG Chatbot (Gemini + Pinecone)",
        desc:
            "Retrieval-augmented generation chatbot using Google Gemini and Pinecone vector DB. Handles rate limiting, batch upserts, and AI SDK v4 integration.",
        tags: ["Gemini API", "Pinecone", "Next.js", "TanStack"],
        link: "#",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof PROJECTS)[0];
    index: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <Animate delay={index * 80}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    background: hovered ? "var(--surface2)" : "var(--ink2)",
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "background 0.25s",
                }}
            >
                {/* Top accent line */}
                <span
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: hovered ? "var(--accent)" : "transparent",
                        transition: "background 0.25s",
                    }}
                />

                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--line2)",
                        letterSpacing: "0.1em",
                        marginBottom: 20,
                    }}
                >
                    {project.num}
                </div>

                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--accent)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 12,
                    }}
                >
                    {project.cat}
                </div>

                <h3
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 24,
                        color: "var(--heading)",
                        fontWeight: 400,
                        marginBottom: 12,
                        lineHeight: 1.25,
                        transition: "color 0.4s",
                    }}
                >
                    {project.name}
                </h3>

                <p
                    style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginBottom: 24,
                    }}
                >
                    {project.desc}
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 24,
                    }}
                >
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 10,
                                color: "var(--body)",
                                border: "1px solid var(--line)",
                                padding: "4px 10px",
                                letterSpacing: "0.04em",
                                transition: "border-color 0.4s",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: hovered ? "var(--accent)" : "var(--muted)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        letterSpacing: "0.04em",
                        transition: "color 0.2s",
                    }}
                >
                    View project{" "}
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                            transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
                            transition: "transform 0.2s",
                        }}
                    >
                        <path
                            d="M2 10L10 2M10 2H4M10 2V8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </svg>
                </a>
            </div>
        </Animate>
    );
}

export default function Projects() {
    return (
        <div
            id="projects"
            style={{
                background: "var(--surface)",
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                padding: "100px 40px",
                transition: "background 0.4s, border-color 0.4s",
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="section-tag">02 — Selected work</div>

                <Animate>
                    <h2 className="section-heading" style={{ marginBottom: 60 }}>
                        Projects that ship.
                    </h2>
                </Animate>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 1,
                        background: "var(--line)",
                        transition: "background 0.4s",
                    }}
                    className="projects-grid"
                >
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.num} project={p} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
