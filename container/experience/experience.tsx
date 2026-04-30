"use client";

import { useState } from "react";
import Animate from "@/components/common/animate";

const EXPERIENCES = [
    {
        period: "Nov 2022 — Present",
        role: "Software Developer",
        company: "Insight Workshop · Extra Space Storage (US Client)",
        badge: "Current",
        duration: null,
    },
    {
        period: "Jul 2021 — Nov 2022",
        role: "Frontend Developer",
        company: "Silk Innovation",
        badge: "1yr 4mo",
        duration: null,
    },
    {
        period: "Sep 2020 — Jun 2021",
        role: "Software Developer Intern",
        company: "IT Glance",
        badge: "9 months",
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
                style={{
                    display: "grid",
                    gridTemplateColumns: "200px 1fr auto",
                    gap: 40,
                    alignItems: "center",
                    padding: "32px 0",
                    borderBottom: "1px solid var(--line)",
                    transition: "border-color 0.4s",
                    cursor: "default",
                }}
                className="exp-row"
            >
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--muted)",
                        letterSpacing: "0.04em",
                    }}
                >
                    {exp.period}
                </div>

                <div>
                    <div
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: 22,
                            color: hovered ? "var(--accent)" : "var(--heading)",
                            fontWeight: 400,
                            marginBottom: 4,
                            transition: "color 0.25s",
                        }}
                    >
                        {exp.role}
                    </div>
                    <div
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "var(--muted)",
                            letterSpacing: "0.04em",
                        }}
                    >
                        {exp.company}
                    </div>
                </div>

                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--accent)",
                        border: "1px solid rgba(245,166,35,0.3)",
                        padding: "4px 12px",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                        transition: "border-color 0.2s, background 0.2s",
                        background: hovered ? "var(--accent-glow)" : "transparent",
                    }}
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
            style={{
                padding: "100px 40px",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <div className="section-tag">03 — Experience</div>

            <Animate>
                <h2 className="section-heading" style={{ marginBottom: 60 }}>
                    Where I&apos;ve built.
                </h2>
            </Animate>

            <div style={{ borderTop: "1px solid var(--line)", transition: "border-color 0.4s" }}>
                {EXPERIENCES.map((exp, i) => (
                    <ExpRow key={exp.role} exp={exp} index={i} />
                ))}
            </div>

            <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
        </section>
    );
}
