"use client";

import Animate from "@/components/common/animate";
import { useState } from "react";

export type Experience = {
    period: string;
    role: string;
    company: string;
    badge: string;
    duration: null;
};

export default function ExpRow({
    exp,
    index,
}: {
    exp: Experience;
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
