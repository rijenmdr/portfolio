"use client";

import { useState } from "react";
import Animate from "@/components/common/animate";

const LINKS = [
    { label: "rijen@email.com", href: "mailto:rijen@email.com", arrow: "↗" },
    { label: "github.com/rijen", href: "#", arrow: "↗" },
    { label: "linkedin.com/in/rijen", href: "#", arrow: "↗" },
    { label: "Download Resume", href: "#", arrow: "↓" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Wire to your Sanity mutation here
        await new Promise((r) => setTimeout(r, 1200));
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div
            id="contact"
            style={{
                background: "var(--surface)",
                borderTop: "1px solid var(--line)",
                padding: "100px 40px",
                transition: "background 0.4s, border-color 0.4s",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 80,
                    alignItems: "start",
                }}
                className="contact-grid"
            >
                {/* Left */}
                <Animate direction="left">
                    <div>
                        <div className="section-tag" style={{ marginBottom: 32 }}>
                            04 — Contact
                        </div>

                        <h2
                            style={{
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(48px, 6vw, 72px)",
                                color: "var(--heading)",
                                lineHeight: 1.05,
                                fontWeight: 400,
                                marginBottom: 24,
                                transition: "color 0.4s",
                            }}
                        >
                            Let&apos;s build
                            <br />
                            something{" "}
                            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                                great.
                            </em>
                        </h2>

                        <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.8 }}>
                            Open to full-time remote roles, freelance projects, and
                            interesting collaborations.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 40 }}>
                            {LINKS.map((link) => (
                                <ContactLink key={link.label} {...link} />
                            ))}
                        </div>
                    </div>
                </Animate>

                {/* Right — form */}
                <Animate direction="right" delay={120}>
                    <form
                        onSubmit={handleSubmit}
                        style={{ display: "flex", flexDirection: "column", gap: 28 }}
                    >
                        {sent ? (
                            <div
                                style={{
                                    border: "1px solid var(--accent)",
                                    padding: "24px",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 13,
                                    color: "var(--accent)",
                                    letterSpacing: "0.04em",
                                    textAlign: "center",
                                }}
                            >
                                Message sent. I&apos;ll be in touch soon ✓
                            </div>
                        ) : (
                            <>
                                <FormField
                                    label="Name"
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                                />
                                <FormField
                                    label="Email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                                />
                                <FormField
                                    label="Message"
                                    type="textarea"
                                    placeholder="What are you working on?"
                                    value={form.message}
                                    onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                                />
                                <button
                                    type="submit"
                                    disabled={sending}
                                    style={{
                                        alignSelf: "flex-start",
                                        background: sending ? "var(--muted)" : "var(--accent)",
                                        color: "var(--ink)",
                                        border: "none",
                                        padding: "13px 28px",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: 12,
                                        letterSpacing: "0.08em",
                                        cursor: sending ? "wait" : "pointer",
                                        fontWeight: 500,
                                        transition: "background 0.2s, transform 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!sending)
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    }}
                                >
                                    {sending ? "Sending..." : "Send message →"}
                                </button>
                            </>
                        )}
                    </form>
                </Animate>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
        </div>
    );
}

function ContactLink({
    label,
    href,
    arrow,
}: {
    label: string;
    href: string;
    arrow: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                paddingLeft: hovered ? 8 : 0,
                borderBottom: "1px solid var(--line)",
                textDecoration: "none",
                color: hovered ? "var(--heading)" : "var(--body)",
                transition: "color 0.2s, padding-left 0.2s, border-color 0.4s",
            }}
        >
            <span style={{ fontSize: 14 }}>{label}</span>
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: hovered ? "var(--accent)" : "var(--muted)",
                    transition: "color 0.2s",
                }}
            >
                {arrow}
            </span>
        </a>
    );
}

function FormField({
    label,
    type,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    type: "text" | "email" | "textarea";
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
}) {
    const [focused, setFocused] = useState(false);

    const sharedStyle: React.CSSProperties = {
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${focused ? "var(--accent)" : "var(--line)"}`,
        color: "var(--heading)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        padding: "10px 0",
        outline: "none",
        width: "100%",
        transition: "border-color 0.2s, color 0.4s",
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: focused ? "var(--accent)" : "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                }}
            >
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    rows={4}
                    style={{ ...sharedStyle, resize: "none" }}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={sharedStyle}
                />
            )}
        </div>
    );
}
