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
            // style={{
            //     position: "relative",
            //     width: 48,
            //     height: 26,
            //     borderRadius: 13,
            //     border: "1px solid var(--line2)",
            //     background: isDark ? "var(--surface2)" : "var(--surface2)",
            //     cursor: "pointer",
            //     transition: "border-color 0.3s, background 0.3s",
            //     flexShrink: 0,
            //     display: "flex",
            //     alignItems: "center",
            //     padding: "3px",
            // }}
            className="relative w-12 h-6 rounded-full border border-[var(--line2)] bg-[var(--surface2)] cursor-pointer transition-colors duration-300 flex items-center p-1 flex-shrink-0"
        >
            {/* Track */}
            <span
                // style={{
                //     position: "absolute",
                //     inset: 0,
                //     borderRadius: 13,
                //     background: isDark
                //         ? "rgba(245,166,35,0.08)"
                //         : "rgba(212,130,10,0.06)",
                //     transition: "background 0.3s",
                // }}
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? "bg-[rgba(245,166,35,0.08)]" : "bg-[rgba(212,130,10,0.06)]"}`}
            />

            {/* Thumb */}
            <span
                className={`absolute w-[18px] h-[18px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[10px] transition-all duration-350 ${isDark ? "left-[calc(100%-22px)]" : "left-1"}`}
            // style={{
            //     position: "absolute",
            //     width: 18,
            //     height: 18,
            //     borderRadius: "50%",
            //     background: "var(--accent)",
            //     left: isDark ? "calc(100% - 22px)" : 4,
            //     transition: "left 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //     fontSize: 10,
            // }}
            >
                {isDark ? "☾" : "☀"}
            </span>
        </button>
    );
}
