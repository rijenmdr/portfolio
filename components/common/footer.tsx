export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--line)",
                padding: "24px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
                transition: "border-color 0.4s",
            }}
        >
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                }}
            >
                © 2025 Rijen Manandhar
            </span>
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                }}
            >
                Kathmandu, Nepal · UTC+5:45
            </span>
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                }}
            >
                Designed &amp; built by{" "}
                <span style={{ color: "var(--accent)" }}>Rijen</span>
            </span>
        </footer>
    );
}
