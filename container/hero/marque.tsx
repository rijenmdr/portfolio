const ITEMS = [
    { text: "React / Next.js", accent: false },
    { text: "◆ Available for Remote", accent: true },
    { text: "Laravel / PHP", accent: false },
    { text: "◆ Kathmandu, Nepal", accent: true },
    { text: "TypeScript", accent: false },
    { text: "◆ Full-Stack Engineer", accent: true },
    { text: "Tailwind CSS", accent: false },
    { text: "◆ AWS · Nginx · Docker", accent: true },
    { text: "PostgreSQL", accent: false },
    { text: "◆ 4+ Years Experience", accent: true },
    { text: "Node.js / Express", accent: false },
];

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS];

export default function Marquee() {
    return (
        <div
            className="overflow-hidden border-t border-b py-3 bg-[var(--ink2)] transition-colors duration-400"
        >
            <div className="marquee-track">
                {ALL.map((item, i) => (
                    <span
                        key={i}
                        className={`font-mono text-[11px] tracking-[0.1em] uppercase px-8 whitespace-nowrap border-r border-[var(--line)] transition-colors duration-400 ${item.accent ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}
                    >
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    );
}
