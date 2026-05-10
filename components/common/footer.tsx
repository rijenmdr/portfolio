export default function Footer() {
    return (
        <footer
            className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] px-10 py-6 transition-colors duration-400"
        >
            <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--muted)]">
                © 2025 Rijen Manandhar
            </span>
            <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--muted)]">
                Kathmandu, Nepal · UTC+5:45
            </span>
            <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--muted)]">
                Designed &amp; built by{" "}
                <span className="text-[var(--accent)]">Rijen</span>
            </span>
        </footer>
    );
}
