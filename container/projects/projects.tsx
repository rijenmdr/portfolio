"use client";

import Animate from "@/components/common/animate";
import { useState } from "react";

const PROJECTS = [
    {
        num: "01",
        cat: "Sponsorship · CRM · SaaS",
        name: "Sponsorvista",
        desc:
            "Sponsorvista is a SaaS platform that helps sports club manage sponsorships and partnerships. It provides tools for tracking leads, managing contacts, and streamlining communication with sponsors.",
        tags: ["Next.js", "Django", "PostgreSQL"],
        link: "https://sponsorvista.com",
    },
    {
        num: "01",
        cat: "E-commerce · Event Managment · Payment",
        name: "Saishinden",
        desc:
            "Saishinden is japanese spirtual ecommerce/ event management platform. It allows users to book appointments with spiritual healers, purchase spiritual products, and manage their spiritual wellness all in one place.",
        tags: ["Laravel", "Next.js", "Komoju", "PostgreSQL", "Gemini"],
        link: "https://saishinden.com",
    },
    {
        num: "02",
        cat: "Automobile · Search · Marketplace",
        name: "Meromoto",
        desc:
            "Meromoto is Nepal's leading automobile search platform. It helps users find and purchase vehicles that meet their needs and preferences, providing a comprehensive database of available cars and detailed information on each listing.",
        tags: ["Next.js", "Express.js", "Node.js"],
        link: "https://meromoto.com",
    },
    {
        num: "04",
        cat: "Service Provider · Service Management · Marketplace",
        name: "Sewalo",
        desc:
            "Sewalo.com is the service martketplace based in Nepal. It connects customers with local service providers across various categories, including home services, events, and wellness.",
        tags: ["Next.js", "Laravel", "PostgreSQL"],
        link: "https://sewalo.com",
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
                className={`relative cursor-pointer overflow-hidden p-10 transition-colors duration-200 ${hovered ? "bg-[var(--surface2)]" : "bg-[var(--ink2)]"
                    }`}
            >
                {/* Top accent line */}
                <span
                    className={`absolute left-0 right-0 top-0 h-0.5 transition-colors duration-200 ${hovered ? "bg-[var(--accent)]" : "bg-transparent"
                        }`}
                />

                <div className="mb-5 font-mono text-[10px] tracking-[0.1em] text-[var(--line2)]">
                    {project.num}
                </div>

                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    {project.cat}
                </div>

                <h3
                    className="mb-3 font-serif text-2xl font-normal leading-[1.25] text-[var(--heading)] transition-colors duration-400"
                >
                    {project.name}
                </h3>

                <p className="mb-6 text-[13px] leading-[1.7] text-[var(--muted)]">
                    {project.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border border-[var(--line)] px-[10px] py-1 font-mono text-[10px] tracking-[0.04em] text-[var(--body)] transition-colors duration-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] no-underline transition-colors duration-200 ${hovered ? "text-[var(--accent)]" : "text-[var(--muted)]"
                        }`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View project{" "}
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-transform duration-200 ${hovered ? "translate-x-0.5 -translate-y-0.5" : "translate-x-0 translate-y-0"
                            }`}
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
            className="border-y border-[var(--line)] bg-[var(--surface)] px-10 py-[100px] transition-colors duration-400"
        >
            <div className="mx-auto max-w-[1100px]">
                <div className="section-tag">02 — Selected work</div>

                <Animate>
                    <h2 className="section-heading mb-[60px]">
                        Projects that ship.
                    </h2>
                </Animate>

                <div
                    className="grid grid-cols-1 gap-px bg-[var(--line)] transition-colors duration-400 md:grid-cols-2"
                >
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.num} project={p} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
