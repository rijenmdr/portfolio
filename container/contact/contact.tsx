"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Animate from "@/components/common/animate";
import { sendContactMessage } from "@/sanity/sanity.mutation";

const validationSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
    message: z.string().min(1, { message: "Message is required." }),
});

const LINKS = [
    { label: "rijenmdr47@gmail.com", href: "mailto:rijenmdr47@gmail.com", arrow: "↗" },
    { label: "github.com/rijenmdr", href: "https://github.com/rijenmdr", arrow: "↗" },
    { label: "linkedin.com/in/rijenmanandhar", href: "https://www.linkedin.com/in/rijenmanandhar", arrow: "↗" },
    { label: "Download Resume", href: "/cv/cv.pdf", arrow: "↓" },
];

export default function Contact() {
    const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const [sent, setSent] = useState(false);

    async function onSubmit(values: z.infer<typeof validationSchema>) {
        try {
            await sendContactMessage(values);
            form.reset();
            setSent(true);
            // Reset sent message after 3 seconds
            setTimeout(() => setSent(false), 3000);
        } catch (error) {
            toast("Something went wrong", {
                description: error instanceof Error && error.message || "An error occurred while sending your message. Please try again.",
            });
        }
    }

    return (
        <div
            id="contact"
            className="border-t border-[var(--line)] bg-[var(--surface)] px-10 py-[100px] transition-colors duration-400"
        >
            <div
                className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20"
            >
                {/* Left */}
                <Animate direction="left">
                    <div>
                        <div className="section-tag mb-8">
                            04 — Contact
                        </div>

                        <h2
                            className="mb-6 font-serif text-[clamp(48px,6vw,72px)] font-normal leading-[1.05] text-[var(--heading)] transition-colors duration-400"
                        >
                            Let&apos;s build
                            <br />
                            something{" "}
                            <em className="italic text-[var(--accent)]">
                                great.
                            </em>
                        </h2>

                        <p className="text-[15px] leading-[1.8] text-[var(--body)]">
                            Open to full-time remote roles, freelance projects, and
                            interesting collaborations.
                        </p>

                        <div className="mt-10 flex flex-col">
                            {LINKS.map((link) => (
                                <ContactLink key={link.label} {...link} />
                            ))}
                        </div>
                    </div>
                </Animate>

                {/* Right — form */}
                <Animate direction="right" delay={120}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-7"
                    >
                        {sent ? (
                            <div
                                className="border border-[var(--accent)] p-6 text-center font-mono text-[13px] tracking-[0.04em] text-[var(--accent)]"
                            >
                                Message sent. I&apos;ll be in touch soon ✓
                            </div>
                        ) : (
                            <>
                                <Controller
                                    name="name"
                                    control={form.control}
                                    render={({ field, fieldState: { error } }) => (
                                        <FormField
                                            label="Name"
                                            type="text"
                                            placeholder="Your name"
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message}
                                        />
                                    )}
                                />
                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState: { error } }) => (
                                        <FormField
                                            label="Email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message}
                                        />
                                    )}
                                />
                                <Controller
                                    name="message"
                                    control={form.control}
                                    render={({ field, fieldState: { error } }) => (
                                        <FormField
                                            label="Message"
                                            type="textarea"
                                            placeholder="What are you working on?"
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            error={error?.message}
                                        />
                                    )}
                                />
                                <button
                                    type="submit"
                                    disabled={form.formState.isSubmitting}
                                    className={`self-start px-7 py-[13px] font-mono text-xs font-medium tracking-[0.08em] text-[var(--ink)] transition-all duration-200 ${form.formState.isSubmitting
                                        ? "cursor-wait bg-[var(--muted)]"
                                        : "cursor-pointer bg-[var(--accent)] hover:-translate-y-0.5"
                                        }`}
                                >
                                    {form.formState.isSubmitting ? "Sending..." : "Send message →"}
                                </button>
                            </>
                        )}
                    </form>
                </Animate>
            </div>
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
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-[var(--body)] no-underline transition-all duration-200 hover:pl-2 hover:text-[var(--heading)]"
        >
            <span className="text-sm">{label}</span>
            <span className="font-mono text-[13px] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--accent)]">
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
    onBlur,
    error,
}: {
    label: string;
    type: "text" | "email" | "textarea";
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
    error?: string;
}) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <label
                    className={`font-mono text-[10px] uppercase tracking-[0.1em] transition-colors duration-200 ${focused ? "text-[var(--accent)]" : "text-[var(--muted)]"
                        }`}
                >
                    {label}
                </label>
                {error && (
                    <span className="font-mono text-[10px] text-red-500">
                        {error}
                    </span>
                )}
            </div>

            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={() => {
                        onBlur();
                        setFocused(false);
                    }}
                    onFocus={() => setFocused(true)}
                    rows={4}
                    className={`w-full resize-none border-0 border-b bg-transparent py-[10px] font-sans text-[15px] text-[var(--heading)] outline-none transition-colors duration-200 ${focused ? "border-[var(--accent)]" : "border-[var(--line)]"
                        }`}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={() => {
                        onBlur();
                        setFocused(false);
                    }}
                    onFocus={() => setFocused(true)}
                    className={`w-full border-0 border-b bg-transparent py-[10px] font-sans text-[15px] text-[var(--heading)] outline-none transition-colors duration-200 ${focused ? "border-[var(--accent)]" : "border-[var(--line)]"
                        }`}
                />
            )}
        </div>
    );
}
