"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Intersection-based active section tracking
    useEffect(() => {
        const sections = ["about", "projects", "experience", "contact"];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setActive(`#${id}`); },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    return (
        <>
            <nav
                className={cn("fixed top-0 left-0 right-0 z-[100] py-0 px-10 h-16 flex items-center justify-between", scrolled && "bg-[#0a0a0a]/88 backdrop-blur-xl border-b border-[var(--line)]",
                    !scrolled && "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className={cn("font-mono text-sm text-[var(--heading)] no-underline")}
                >
                    <span className={"text-[var(--accent)]"}>&lt;</span>
                    Rijen
                    <span className={"text-[var(--accent)]"}>/&gt;</span>
                </Link>

                {/* Desktop nav */}
                <ul
                    className="hidden md:flex gap-9 list-none items-center"
                >
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="font-mono text-xs no-underline uppercase relative pb-1 transition-colors transition-duration-200"
                            >
                                {item.label}
                                {active === item.href && (
                                    <span
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--accent)]"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex font-mono text-xs text-[var(--accent)] border border-[var(--accent)] px-4 py-1 no-underline uppercase transition-colors duration-200"
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.background = "var(--accent)";
                            (e.target as HTMLElement).style.color = "var(--ink)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.background = "transparent";
                            (e.target as HTMLElement).style.color = "var(--accent)";
                        }}
                    >
                        Get in touch →
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden bg-none border border-[var(--line2)] text-[var(--heading)] px-2 py-1 font-mono text-xs cursor-pointer"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn("md:hidden fixed top-16 left-0 right-0 bg-[var(--surface)] border-b border-[var(--line)] p-4 z-50 overflow-hidden transition-max-height transition-padding duration-350", menuOpen ? "max-h-screen py-4" : "max-h-0 py-0")}
            >
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn("block font-mono text-xs no-underline uppercase border-b border-[var(--line)] transition-colors duration-200 p-4")}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
