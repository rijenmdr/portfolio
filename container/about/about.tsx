"use client";

import Animate from "@/components/common/animate";
import { useInView } from "@/hook/use-in-view";

const SKILLS = [
    { name: "Frontend", sub: "React · Next.js · TypeScript", pct: 92 },
    { name: "Backend", sub: "Laravel · PHP · REST APIs", pct: 85 },
    { name: "UI/UX", sub: "Tailwind · Figma · Design Systems", pct: 78 },
    { name: "Infrastructure", sub: "AWS · Nginx · Docker · CI/CD", pct: 72 },
    { name: "Database", sub: "PostgreSQL · MySQL · Sanity", pct: 80 },
    { name: "Tooling", sub: "Git · PM2 · Datadog · PostHog", pct: 75 },
];

const TAGS = [
    "React & Next.js", "Laravel", "TypeScript", "PostgreSQL",
    "AWS / DevOps", "Tailwind CSS", "TanStack Query", "Framer Motion",
];

function SkillBar({ pct, animate }: { pct: number; animate: boolean }) {
    return (
        <div className="skill-bar-wrap">
            <div
                className="skill-bar"
                style={{ width: animate ? `${pct}%` : "0%" }}
            />
        </div>
    );
}

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <section
            id="about"
            style={{
                padding: "100px 40px",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <div className="section-tag">01 — About me</div>

            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 80,
                    alignItems: "start",
                }}
                className="about-grid"
            >
                {/* Left — bio */}
                <Animate direction="left">
                    <div>
                        <h2
                            className="section-heading"
                            style={{ marginBottom: 28 }}
                        >
                            Engineer with an eye for design.
                        </h2>

                        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--body)", marginBottom: 20 }}>
                            I&apos;m a full-stack developer based in{" "}
                            <strong style={{ color: "var(--heading)", fontWeight: 500 }}>
                                Kathmandu, Nepal
                            </strong>{" "}
                            with 4+ years shipping production-grade products. I work primarily with{" "}
                            <strong style={{ color: "var(--heading)", fontWeight: 500 }}>
                                React / Next.js
                            </strong>{" "}
                            on the frontend and{" "}
                            <strong style={{ color: "var(--heading)", fontWeight: 500 }}>Laravel</strong>{" "}
                            on the backend.
                        </p>

                        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--body)", marginBottom: 20 }}>
                            I specialize in building fast, accessible, and thoughtfully designed
                            applications — from payment integrations and real-time systems to
                            CMS-driven marketing sites.
                        </p>

                        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--body)", marginBottom: 32 }}>
                            Currently open to{" "}
                            <strong style={{ color: "var(--heading)", fontWeight: 500 }}>
                                remote opportunities
                            </strong>{" "}
                            with US/EU-based teams.
                        </p>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        border: "1px solid var(--line2)",
                                        padding: "7px 14px",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: 11,
                                        color: "var(--body)",
                                        cursor: "default",
                                        transition: "border-color 0.2s, color 0.2s, background 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--heading)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--line2)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--body)";
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 5,
                                            height: 5,
                                            background: "var(--accent)",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Animate>

                {/* Right — skill grid */}
                <Animate direction="right" delay={120}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 1,
                            background: "var(--line)",
                            transition: "background 0.4s",
                        }}
                    >
                        {SKILLS.map((skill, i) => (
                            <div
                                key={skill.name}
                                style={{
                                    background: "var(--surface)",
                                    padding: "20px 24px",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLElement).style.background = "var(--surface2)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.currentTarget as HTMLElement).style.background = "var(--surface)")
                                }
                            >
                                <div
                                    style={{
                                        fontSize: 13,
                                        color: "var(--heading)",
                                        fontWeight: 500,
                                        marginBottom: 4,
                                        transition: "color 0.4s",
                                    }}
                                >
                                    {skill.name}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: 10,
                                        color: "var(--muted)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {skill.sub}
                                </div>
                                <SkillBar pct={skill.pct} animate={inView} />
                            </div>
                        ))}
                    </div>
                </Animate>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}
