"use client";

import { useEffect, useState } from "react";
import Animate from "@/components/common/animate";
import Link from "next/link";

const CODE_LINES = [
    { num: "01", content: <span className="code-c">// Rijen&apos;s stack</span> },
    {
        num: "02",
        content: (
            <>
                <span className="code-k">const</span>{" "}
                <span className="code-v">engineer</span> = {"{"}
            </>
        ),
    },
    {
        num: "03",
        content: (
            <>
                &nbsp;&nbsp;<span className="code-v">frontend</span>: [
                <span className="code-s">&apos;Next.js&apos;</span>,{" "}
                <span className="code-s">&apos;React&apos;</span>],
            </>
        ),
    },
    {
        num: "04",
        content: (
            <>
                &nbsp;&nbsp;<span className="code-v">backend</span>: [
                <span className="code-s">&apos;Node.js&apos;</span>,{" "}
                <span className="code-s">&apos;Laravel&apos;</span>,{" "}
                <span className="code-s">&apos;PostgreSQL&apos;</span>],
            </>
        ),
    },
    {
        num: "05",
        content: (
            <>
                &nbsp;&nbsp;<span className="code-v">tools</span>: [
                <span className="code-s">&apos;AWS&apos;</span>,{" "}
                <span className="code-s">&apos;Nginx&apos;</span>,{" "}
                <span className="code-s">&apos;Docker&apos;</span>],
            </>
        ),
    },
    {
        num: "06",
        content: (
            <>
                &nbsp;&nbsp;<span className="code-fn">available</span>:{" "}
                <span className="code-k">true</span>,
            </>
        ),
    },
    { num: "07", content: <>{"}"};</> },
];

const STATS = [
    { num: "4+", label: "Years exp" },
    { num: "20+", label: "Projects" },
    { num: "2", label: "Countries" },
];

export default function Hero() {
    const [visibleLines, setVisibleLines] = useState(0);

    // Typewriter effect for code card
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= CODE_LINES.length) clearInterval(timer);
        }, 120);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center pt-[120px] px-10 pb-20 relative overflow-hidden"
        >
            {/* Grid */}
            <div
                className="hero-grid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-[1100px] mx-auto w-full"
            >
                {/* Left */}
                <div>
                    <Animate delay={0}>
                        <div
                            className="font-mono text-[11px] text-[var(--accent)] uppercase flex items-center gap-[10px] mb-6"
                        >
                            <span
                                className="inline-block w-6 h-[1px] bg-[var(--accent)]"
                            />
                            Available for opportunities
                        </div>
                    </Animate>

                    <Animate delay={100}>
                        <h1
                            className="font-serif text-[clamp(52px,6vw,80px)] text-[var(--heading)] leading-[1.05] mb-3 transition-colors duration-400"
                        >
                            Rijen
                            <br />
                            <em className="text-[var(--accent)] italic">
                                Manandhar.
                            </em>
                        </h1>
                    </Animate>

                    <Animate delay={180}>
                        <p
                            className="font-mono text-sm text-[var(--muted)] mb-6"
                        >
              // Frontend Engineer · Full-Stack Developer
                        </p>
                    </Animate>

                    <Animate delay={260}>
                        <p
                            className="text-base font-mono text-[var(--body)] max-w-[440px] mb-[44px] transition-colors duration-400"
                        >
                            I craft fast, thoughtful interfaces where design precision meets
                            engineering rigor. Based in{" "}
                            <span className="text-[var(--heading)]">Kathmandu</span> —
                            building for the world.
                        </p>
                    </Animate>

                    <Animate delay={340}>
                        <div className="flex gap-5 items-center flex-wrap">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-[var(--accent)] px-7 py-3 font-mono text-xs font-medium text-[var(--ink)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent2)]"
                            >
                                View my work ↗
                            </Link>
                            <Link
                                href="#contact"
                                className="border-b border-[var(--line2)] pb-0.5 font-mono text-xs tracking-[0.06em] text-[var(--body)] no-underline transition-colors duration-200 hover:border-[var(--body)] hover:text-[var(--heading)]"
                            >
                                Let&apos;s talk
                            </Link>
                        </div>
                    </Animate>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4">
                    <Animate delay={200} direction="right">
                        {/* Code card */}
                        <div
                            className="bg-[var(--surface)] border border-[var(--line)] p-6 text-sm font-mono leading-8 transition-colors duration-400"
                        >
                            {CODE_LINES.map((line, i) => (
                                <div
                                    key={i}
                                    className={`transition-all duration-200 ${i < visibleLines
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-2 opacity-0"
                                        }`}
                                >
                                    <span className="text-[var(--line2)] select-none mr-4">
                                        {line.num}
                                    </span>
                                    {line.content}
                                </div>
                            ))}
                        </div>
                    </Animate>

                    <Animate delay={320} direction="right">
                        {/* Stats */}
                        <div className="grid grid-cols-1 gap-1 bg-[var(--line)] sm:grid-cols-3">
                            {STATS.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-[var(--surface)] p-5 text-center transition-colors duration-400"
                                >
                                    <div
                                        className="font-serif text-2xl text-[var(--heading)] leading-1 transition-colors duration-400"
                                    >
                                        {s.num}
                                    </div>
                                    <div
                                        className="font-mono text-[10px] text-[var(--muted)] tracking-[0.08em] mt-1 uppercase"
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Animate>
                </div>
            </div>

            {/* Background watermark */}
            <div
                aria-hidden
                className="absolute -bottom-10 left-10 font-serif text-[clamp(100px,18vw,220px)] text-[var(--heading)] opacity-5 pointer-events-none leading-1 font-weight-400 select-none whitespace-nowrap transition-colors duration-400"
            >
                RIJEN
            </div>
        </section>
    );
}
