"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className={"w-[44px] h-6"} />;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative w-12 h-6 rounded-full border border-[var(--line2)] bg-[var(--surface2)] cursor-pointer transition-colors duration-300 flex items-center p-1 flex-shrink-0"
        >
            {/* Track */}
            <span
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? "bg-[rgba(245,166,35,0.08)]" : "bg-[rgba(212,130,10,0.06)]"}`}
            />

            {/* Thumb */}
            <span
                className={`absolute w-[18px] h-[18px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[10px] transition-all duration-350 ${isDark ? "left-[calc(100%-22px)]" : "left-1"}`}
            >
                {isDark ? "☾" : "☀"}
            </span>
        </button>
    );
}
