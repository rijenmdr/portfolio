"use client";

import { useState } from "react";
import Animate from "@/components/common/animate";

const EXPERIENCES = [
    {
        period: "Mar 2025 — Present",
        role: "Software Engineer",
        company: "Extra Space Storage",
        badge: "Current",
        duration: null,
    },
    {
        period: "Jan 2025 — Jan 2026",
        role: "Freelancer",
        company: "Sponsorvista",
        badge: "1yrs",
        duration: null,
    },
    {
        period: "Nov 2022 — Oct 2024",
        role: "Software Engineer",
        company: "Asterdio Inc",
        badge: "2yrs",
        duration: null,
    },
    {
        period: "Jul 2021 — Nov 2022",
        role: "Frontend Developer",
        company: "Silk Innovation",
        badge: "1yr 4mo",
        duration: null,
    },
];

function ExpRow({
    exp,
    index,
}: {
    exp: (typeof EXPERIENCES)[0];
    index: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <Animate delay={index * 80}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="grid cursor-default grid-cols-1 items-center gap-2 border-b border-[var(--line)] py-8 transition-colors duration-400 sm:grid-cols-[200px_1fr_auto] sm:gap-10"
            >
                <div className="font-mono text-[11px] tracking-[0.04em] text-[var(--muted)]">
                    {exp.period}
                </div>

                <div>
                    <div
                        className={`mb-1 font-serif text-[22px] font-normal transition-colors duration-200 ${hovered ? "text-[var(--accent)]" : "text-[var(--heading)]"
                            }`}
                    >
                        {exp.role}
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.04em] text-[var(--muted)]">
                        {exp.company}
                    </div>
                </div>

                <div
                    className={`whitespace-nowrap border border-[rgba(245,166,35,0.3)] px-3 py-1 font-mono text-[10px] tracking-[0.06em] text-[var(--accent)] transition-colors duration-200 ${hovered ? "bg-[var(--accent-glow)]" : "bg-transparent"
                        }`}
                >
                    {exp.badge}
                </div>
            </div>
        </Animate>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-[1100px] px-10 py-[100px]"
        >
            <div className="section-tag">03 — Experience</div>

            <Animate>
                <h2 className="section-heading mb-[60px]">
                    Where I&apos;ve built.
                </h2>
            </Animate>

            <div className="border-t border-[var(--line)] transition-colors duration-400">
                {EXPERIENCES.map((exp, i) => (
                    <ExpRow key={exp.role} exp={exp} index={i} />
                ))}
            </div>
        </section>
    );
}
