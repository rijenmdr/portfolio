import Animate from "@/components/common/animate";
import ExpRow, { type Experience } from "./exp-row";

const EXPERIENCES: Experience[] = [
    {
        period: "Mar 2025 — Present",
        role: "Software Engineer",
        company: "Extra Space Storage",
        badge: "Current",
        duration: null,
    },
    {
        period: "Jan 2025 — Jan 2026",
        role: "Freelancer",
        company: "Sponsorvista",
        badge: "1yrs",
        duration: null,
    },
    {
        period: "Nov 2022 — Oct 2024",
        role: "Software Engineer",
        company: "Asterdio Inc",
        badge: "2yrs",
        duration: null,
    },
    {
        period: "Jul 2021 — Nov 2022",
        role: "Frontend Developer",
        company: "Silk Innovation",
        badge: "1yr 4mo",
        duration: null,
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-[1100px] px-10 py-[100px]"
        >
            <div className="section-tag">03 — Experience</div>

            <Animate>
                <h2 className="section-heading mb-[60px]">
                    Where I&apos;ve built.
                </h2>
            </Animate>

            <div className="border-t border-[var(--line)] transition-colors duration-400">
                {EXPERIENCES.map((exp, i) => (
                    <ExpRow key={exp.company} exp={exp} index={i} />
                ))}
            </div>
        </section>
    );
}
