"use client";

import Animate from "@/components/common/animate";
import { useInView } from "@/hook/use-in-view";

const SKILLS = [
    { name: "Frontend", sub: "React · Next.js · TypeScript", pct: 92 },
    { name: "Backend", sub: "Laravel · PHP · Express · NodeJs · REST APIs", pct: 85 },
    { name: "UI/UX", sub: "Tailwind · Figma · Design Systems", pct: 78 },
    { name: "Infrastructure", sub: "AWS · Nginx · Docker · CI/CD", pct: 72 },
    { name: "Database", sub: "PostgreSQL · MySQL · Sanity", pct: 80 },
    { name: "Tooling", sub: "Git · PM2 · Datadog · PostHog", pct: 75 },
];

const TAGS = [
    "React & Next.js", "Laravel", "TypeScript", "PostgreSQL",
    "AWS / DevOps", "Tailwind CSS", "TanStack Query", "Framer Motion",
];

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <section
            id="about"
            className="mx-auto max-w-[1100px] px-10 py-[100px]"
        >
            <div className="section-tag">01 — About me</div>

            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20"
            >
                {/* Left — bio */}
                <Animate direction="left">
                    <div>
                        <h2
                            className="section-heading mb-7"
                        >
                            Engineer with an eye for design.
                        </h2>

                        <p className="mb-5 text-base leading-[1.85] text-[var(--body)]">
                            I&apos;m a full-stack developer based in{" "}
                            <strong className="font-medium text-[var(--heading)]">
                                Kathmandu, Nepal
                            </strong>{" "}
                            with 4+ years shipping production-grade products. I work primarily with{" "}
                            <strong className="font-medium text-[var(--heading)]">
                                React / Next.js
                            </strong>{" "}
                            on the frontend and{" "}
                            <strong className="font-medium text-[var(--heading)]">Node JS</strong>{" "}
                            on the backend.
                        </p>

                        <p className="mb-5 text-base leading-[1.85] text-[var(--body)]">
                            I specialize in building fast, accessible, and thoughtfully designed
                            applications from real-time systems to CMS-driven marketing sites.
                        </p>

                        <p className="mb-8 text-base leading-[1.85] text-[var(--body)]">
                            Currently open to{" "}
                            <strong className="font-medium text-[var(--heading)]">
                                remote opportunities
                            </strong>{" "}
                            with US/EU-based teams.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex cursor-default items-center gap-2 border border-[var(--line2)] px-[14px] py-[7px] font-mono text-[11px] text-[var(--body)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--heading)]"
                                >
                                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)]" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Animate>

                {/* Right — skill grid */}
                <Animate direction="right" delay={120}>
                    <div
                        className="grid grid-cols-2 gap-px bg-[var(--line)] transition-colors duration-400"
                    >
                        {SKILLS.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-[var(--surface)] px-6 py-5 transition-colors duration-200 hover:bg-[var(--surface2)]"
                            >
                                <div className="mb-1 text-[13px] font-medium text-[var(--heading)] transition-colors duration-400">
                                    {skill.name}
                                </div>
                                <div className="font-mono text-[10px] tracking-[0.04em] text-[var(--muted)]">
                                    {skill.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </Animate>
            </div>
        </section>
    );
}
