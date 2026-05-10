import Animate from "@/components/common/animate";
import ProjectCard, { type Project } from "./project-card";

const PROJECTS: Project[] = [
    {
        num: "01",
        cat: "Sponsorship · CRM · SaaS",
        name: "Sponsorvista",
        desc:
            "Sponsorvista is a SaaS platform that helps sports club manage sponsorships and partnerships. It provides tools for tracking leads, managing contacts, and streamlining communication with sponsors.",
        tags: ["Next.js", "Django", "PostgreSQL"],
        link: "https://sponsorvista.com",
    },
    {
        num: "02",
        cat: "E-commerce · Event Managment · Payment",
        name: "Saishinden",
        desc:
            "Saishinden is japanese spirtual ecommerce/ event management platform. It allows users to book appointments with spiritual healers, purchase spiritual products, and manage their spiritual wellness all in one place.",
        tags: ["Laravel", "Next.js", "Komoju", "PostgreSQL", "Gemini"],
        link: "https://saishinden.com",
    },
    {
        num: "03",
        cat: "Automobile · Search · Marketplace",
        name: "Meromoto",
        desc:
            "Meromoto is Nepal's leading automobile search platform. It helps users find and purchase vehicles that meet their needs and preferences, providing a comprehensive database of available cars and detailed information on each listing.",
        tags: ["Next.js", "Express.js", "Node.js"],
        link: "https://meromoto.com",
    },
    {
        num: "04",
        cat: "Service Provider · Service Management · Marketplace",
        name: "Sewalo",
        desc:
            "Sewalo.com is the service martketplace based in Nepal. It connects customers with local service providers across various categories, including home services, events, and wellness.",
        tags: ["Next.js", "Laravel", "PostgreSQL"],
        link: "https://sewalo.com",
    },
];

export default function Projects() {
    return (
        <div
            id="projects"
            className="border-y border-[var(--line)] bg-[var(--surface)] px-10 py-[100px] transition-colors duration-400"
        >
            <div className="mx-auto max-w-[1100px]">
                <div className="section-tag">02 — Selected work</div>

                <Animate>
                    <h2 className="section-heading mb-[60px]">
                        Projects that ship.
                    </h2>
                </Animate>

                <div
                    className="grid grid-cols-1 gap-px bg-[var(--line)] transition-colors duration-400 md:grid-cols-2"
                >
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.num} project={p} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
