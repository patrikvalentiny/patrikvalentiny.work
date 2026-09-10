import React from "react";
import {
    Code,
    GraduationCap,
    MapPin,
    ArrowUpRight,
    Mail,
    Linkedin,
    Github,
    Phone,
    Globe,
    Server,
    Database,
    Cloud,
    Box,
    Sparks,
    Trophy,
} from "iconoir-react";
import { motion, useReducedMotion } from "framer-motion";

const springTransition = { type: "spring", stiffness: 120, damping: 20 } as const;
const easeTransition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] } as const;

interface ExperienceRole {
    company: string;
    role: string;
    location: string;
    period: string;
    tag?: string;
    highlights: { title: string; text: string }[];
    impact?: string;
}

interface EducationItem {
    institution: string;
    degree: string;
    field: string;
    location: string;
    modules: { title: string; desc: string }[];
}

interface ProjectItem {
    title: string;
    tags: string[];
    description: string;
    link?: string;
    linkLabel?: string;
}

interface CertificationItem {
    title: string;
    issuer: string;
    date: string;
}

const experiences: ExperienceRole[] = [
    {
        company: "Siemens Gamesa",
        role: "Digitalization Engineer",
        location: "Vejle, Denmark",
        period: "05/2023 - PRESENT",
        tag: "Enterprise Digitalization",
        highlights: [
            {
                title: "Data Platform & Analytics Logic",
                text: "Engineered and maintained relational database models (SQL Server) to support business analytics and operational reporting across international project sites.",
            },
            {
                title: "Backend Services & APIs",
                text: "Designed, developed, and maintained custom backend integrations, internal tools, and automated workflows using Power Platform (Power BI, PowerApps, Power Automate), Mendix, and SQL-backed logic.",
            },
            {
                title: "BI & Analytics Support",
                text: "Built data-driven reporting structures in Power BI to deliver actionable operational insights to global stakeholders.",
            },
            {
                title: "Testing, Quality & Maintenance",
                text: "Managed software lifecycles by executing testing phases, debugging data and logic issues, gathering feedback, and directly responding to user feature requests and bug reports.",
            },
            {
                title: "Stakeholder Collaboration",
                text: "Collaborated directly with non-technical stakeholders to identify process bottlenecks and deliver pragmatic digital solutions.",
            },
        ],
        impact: "Generated annual operational savings exceeding €300,000 by replacing third-party software with maintainable internal tools.",
    },
    {
        company: "Freelance",
        role: "Creative Lead",
        location: "Worldwide",
        period: "2018 - PRESENT",
        tag: "Full-Stack & Digital Products",
        highlights: [
            {
                title: "Full-Stack Development",
                text: "Led project executions of frontend and full-stack applications, creating user-friendly interfaces for digital products.",
            },
            {
                title: "Client & Stakeholder Communication",
                text: "Communicated technical concepts simply to end users and clients, delivering pragmatic digital assets on schedule.",
            },
        ],
    },
];

const educationData: EducationItem[] = [
    {
        institution: "Syddansk Erhvervsakademi",
        degree: "Bachelor Degree",
        field: "Software Development & Computer Science",
        location: "Esbjerg, Denmark",
        modules: [
            {
                title: "Fullstack & Backend APIs",
                desc: "End-to-end applications in React, Angular, and TypeScript integrated with C# (.NET Core) services, RESTful interfaces, and database architectures.",
            },
            {
                title: "Machine Learning & AI Agents",
                desc: "Predictive models, RAG document pipelines, and autonomous AI agents designed with Python for automated decision-making and intelligent workflows.",
            },
            {
                title: "Distributed Systems & Cloud",
                desc: "Microservices orchestration, API Gateways, and scalable architectures designed for seamless data flow and heterogeneous platforms.",
            },
            {
                title: "DevOps & CI/CD Pipelines",
                desc: "Continuous integration, containerization, environment automation, and modern deployment lifecycles for robust delivery.",
            },
            {
                title: "Security & Threat Modeling",
                desc: "Security-by-design, defensive programming, and application hardening to protect enterprise systems and sensitive data.",
            },
            {
                title: "Software Quality & TDD",
                desc: "Test-Driven Development, automated testing frameworks, and QA methodologies within collaborative Agile / Scrum environments.",
            },
        ],
    },
];

const projects: ProjectItem[] = [
    {
        title: "Kongekampen Tournament Dashboard",
        tags: ["React", "Tailwind CSS", "Supabase", "Real-Time DB"],
        description:
            "Developed the official live tournament tracking platform for Esbjerg's premier student sports event with real-time score updates and bracket subscriptions via Supabase, built with a mobile-first responsive UI.",
        link: "https://github.com/patrikvalentiny/kongekampen",
        linkLabel: "GitHub",
    },
    {
        title: "AI Exam Generator",
        tags: ["Python", "AutoGen", "ChromaDB", "RAG"],
        description:
            "Built an automated multi-agent system using Python to parse documentation and generate structured technical outputs. Designed document indexing and retrieval pipelines using ChromaDB and specialized validation logic to ensure data accuracy.",
        link: "https://github.com/pvEASV/ml-exam",
        linkLabel: "GitHub",
    },
    {
        title: "ClimateCtrl",
        tags: ["IoT", ".NET", "Angular", "DevOps", "Toit.io", "WebSockets"],
        description:
            "Created an IoT environmental monitor utilizing Toit.io sensors and a .NET / WebSocket backend for real-time telemetry. Managed the full deployment lifecycle through a robust CI/CD pipeline to ensure seamless hardware and software integration.",
        link: "https://github.com/pvEASV/ClimateCtrl",
        linkLabel: "GitHub",
    },
];

const skillClusters = [
    {
        name: "Software Engineering",
        icon: Code,
        skills: ["C#", "React", "Python", ".NET Core", "Angular", "TypeScript", "JavaScript"],
    },
    {
        name: "Data & Cybersecurity",
        icon: Database,
        skills: ["PostgreSQL", "SQL Server", "Cybersecurity", "Row Level Security (RLS)"],
    },
    {
        name: "AI & Automation",
        icon: Sparks,
        skills: ["Python", "RAG", "AutoGen", "Machine Learning", "AI Agents"],
    },
    {
        name: "DevOps & Quality",
        icon: Cloud,
        skills: ["Azure", "AWS", "CI/CD", "Git", "GitHub Copilot", "Docker", "Unit Testing", "Test Automation", "Test Driven Development"],
    },
    {
        name: "Architecture & Design",
        icon: Server,
        skills: ["Microservices", "IoT", "UI/UX (Figma)", "Agile/Scrum", "System Architecture", "REST APIs"],
    },
    {
        name: "Low-Code Development",
        icon: Box,
        skills: ["Power Apps", "Power Automate", "Power BI", "Mendix", "Rapid Prototyping"],
    },
];

const references = [
    {
        name: "Adam Minarik",
        title: "Senior Digitalization Project Manager",
        company: "Siemens Energy",
        phone: "+45 93 84 26 32",
        email: "adam.minarik@siemens-energy.com",
    },
    {
        name: "Matias Strøm",
        title: "Event Manager",
        company: "Education Esbjerg",
        phone: "+45 20 83 85 08",
        email: "mas@educationesbjerg.com",
    },
];

const certifications: CertificationItem[] = [
    {
        title: "AI-Assisted Code Modernization with IBM",
        issuer: "ProoV by Projectstudy.in",
        date: "Aug 2026",
    },
    {
        title: "Get started with Azure",
        issuer: "Microsoft",
        date: "Aug 2026",
    },
    {
        title: "Python",
        issuer: "Kaggle",
        date: "Jul 2026",
    },
    {
        title: "Build and Ship Cloud-Native Python Apps",
        issuer: "JetBrains Academy",
        date: "May 2026",
    },
    {
        title: "CS50x",
        issuer: "CS50 at Harvard University",
        date: "Oct 2023",
    },
    {
        title: "Elements of AI: Building AI",
        issuer: "University of Helsinki",
        date: "Mar 2023",
    },
];

const languages = [
    { name: "English", level: "Fluent" },
    { name: "Slovak", level: "Native" },
    { name: "Danish", level: "Basic" },
    { name: "German", level: "Basic" },
];

const interests = [
    { label: "Cycling" },
    { label: "Motorsports" },
    { label: "Weightlifting" },
    { label: "Running" },
    { label: "Photography" },
    { label: "Cinematography" },
];

export default function CurriculumVitaeView(): JSX.Element {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main
            className="relative min-h-dvh overflow-hidden bg-base-100 text-base-content pt-20 pb-24"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-primary) 14%, transparent) 1px, transparent 0)",
                backgroundSize: "26px 26px",
            }}
        >
            {/* Ambient Background Glow matching homepage */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full bg-accent/12 blur-3xl"
                animate={shouldReduceMotion ? undefined : { x: [0, 24, 0], y: [0, -20, 0], opacity: [0.3, 0.55, 0.3] }}
                transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-accent/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[18px_18px] opacity-20" />

            <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 space-y-16">
                {/* Hero Profile Header */}
                <header className="border-b border-base-content/15 pb-12 pt-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                                    Digitalization Engineer · Full-Stack Developer
                                </span>
                            </div>

                            <motion.h1
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={easeTransition}
                                className="text-balance text-6xl leading-[0.88] font-bebas tracking-wide text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-accent/60 sm:text-7xl lg:text-8xl"
                            >
                                Patrik Valentiny
                            </motion.h1>

                            <p className="max-w-3xl text-pretty text-base leading-7 text-base-content/80 sm:text-lg">
                                Software Development professional with hands-on experience building full-stack applications,
                                backend APIs, and analytics solutions. Proficient in SQL (PostgreSQL, SQL Server), Python,
                                C# (.NET), React, Angular, and modern AI-assisted workflows. Experienced in translating
                                complex business processes into reliable internal digital tools.
                            </p>

                            {/* Contact & Profile Meta Strip */}
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-base-content/75 pt-2">
                                <a
                                    href="mailto:patrikeyvalentiny@gmail.com"
                                    className="flex items-center gap-1.5 hover:text-accent transition-colors"
                                >
                                    <Mail className="size-3.5 text-accent" />
                                    patrikeyvalentiny@gmail.com
                                </a>
                                <span>•</span>
                                <a
                                    href="tel:+4571407231"
                                    className="flex items-center gap-1.5 hover:text-accent transition-colors"
                                >
                                    <Phone className="size-3.5 text-accent" />
                                    +45 71 40 72 31
                                </a>
                                <span>•</span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="size-3.5 text-accent" />
                                    Denmark
                                </span>
                                <span>•</span>
                                <a
                                    href="https://patrikvalentiny.work"
                                    className="flex items-center gap-1.5 hover:text-accent transition-colors"
                                >
                                    <Globe className="size-3.5 text-accent" />
                                    patrikvalentiny.work
                                </a>
                            </div>
                        </div>

                        {/* Profile Image with matching 3D hover style */}
                        <div className="flex flex-col items-center sm:items-start lg:items-end gap-4">
                            <div className="hover-3d w-44 sm:w-52">
                                <figure className="relative flex h-56 sm:h-64 w-full items-end overflow-hidden rounded-2xl border border-base-content/15 bg-base-100 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                                    <img
                                        src="/profile-image.jpg"
                                        alt="Portrait of Patrik Valentiny"
                                        className="absolute inset-0 h-full w-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-base-100/20 via-accent/10 to-error/15" />
                                </figure>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <a
                                    href="https://www.linkedin.com/in/patrikvalentiny/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline btn-sm h-9 px-3 text-xs uppercase tracking-wider gap-1.5"
                                >
                                    <Linkedin className="size-3.5" />
                                    LinkedIn
                                    <ArrowUpRight className="size-3 opacity-60" />
                                </a>
                                <a
                                    href="https://github.com/patrikvalentiny"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline btn-sm h-9 px-3 text-xs uppercase tracking-wider gap-1.5"
                                >
                                    <Github className="size-3.5" />
                                    GitHub
                                    <ArrowUpRight className="size-3 opacity-60" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Section 01: Experience */}
                <section className="space-y-8">
                    <div className="flex items-end justify-between border-b border-base-content/15 pb-4">
                        <div>
                            <div className="badge badge-primary badge-outline mb-2 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Professional Journey
                            </div>
                            <h2 className="text-4xl font-bebas tracking-wide text-base-content sm:text-5xl">
                                Experience
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-base-content/50 uppercase">
                            01 / Experience
                        </span>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <motion.article
                                key={exp.company + exp.role}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={easeTransition}
                                className="rounded-2xl border border-base-300/70 bg-base-100/80 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm hover:border-accent/40 transition-colors"
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between border-b border-base-content/10 pb-4">
                                    <div>
                                        {exp.tag && (
                                            <span className="badge badge-accent badge-soft text-[10px] font-mono uppercase tracking-wider mb-2">
                                                {exp.tag}
                                            </span>
                                        )}
                                        <h3 className="text-3xl font-bebas tracking-wide text-base-content">
                                            {exp.company}
                                        </h3>
                                        <p className="text-base font-semibold text-primary">
                                            {exp.role} · <span className="font-normal text-base-content/70">{exp.location}</span>
                                        </p>
                                    </div>
                                    <div className="text-xs font-mono text-base-content/70 tracking-wider">
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-base-content/80">
                                    {exp.highlights.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="text-accent mt-1 shrink-0">•</span>
                                            <span>
                                                <strong className="text-base-content font-semibold">{item.title}:</strong>{" "}
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.impact && (
                                    <div className="mt-6 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-base-content">
                                        <span className="font-mono text-xs uppercase font-bold text-success tracking-wider mr-2">
                                            Key Impact:
                                        </span>
                                        {exp.impact}
                                    </div>
                                )}
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Section 02: Education */}
                <section className="space-y-8">
                    <div className="flex items-end justify-between border-b border-base-content/15 pb-4">
                        <div>
                            <div className="badge badge-primary badge-outline mb-2 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Academic Foundation
                            </div>
                            <h2 className="text-4xl font-bebas tracking-wide text-base-content sm:text-5xl">
                                Education
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-base-content/50 uppercase">
                            02 / Education
                        </span>
                    </div>

                    <div className="w-full">
                        {educationData.map((edu) => (
                            <motion.div
                                key={edu.degree}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={easeTransition}
                                className="rounded-2xl border border-base-300/70 bg-base-100/80 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs font-mono text-base-content/60">
                                        <span className="flex items-center gap-1.5 text-accent font-semibold">
                                            <GraduationCap className="size-4" />
                                            {edu.degree}
                                        </span>
                                    </div>
                                    <h3 className="mt-3 text-3xl font-bebas tracking-wide text-base-content">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-base font-semibold text-primary">{edu.field}</p>
                                    <p className="text-xs text-base-content/60 mt-0.5">{edu.location}</p>

                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 border-t border-base-content/10 pt-5 text-xs leading-relaxed text-base-content/80">
                                        {edu.modules.map((mod, i) => (
                                            <div key={i} className="p-3.5 rounded-xl bg-base-200/40 border border-base-content/5 space-y-1">
                                                <div className="font-semibold text-base-content font-mono text-[11px] text-accent">
                                                    • {mod.title}
                                                </div>
                                                <p className="text-base-content/75">{mod.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 03: Projects */}
                <section className="space-y-8">
                    <div className="flex items-end justify-between border-b border-base-content/15 pb-4">
                        <div>
                            <div className="badge badge-primary badge-outline mb-2 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Engineering & Products
                            </div>
                            <h2 className="text-4xl font-bebas tracking-wide text-base-content sm:text-5xl">
                                Projects
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-base-content/50 uppercase">
                            03 / Projects
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {projects.map((proj) => (
                            <motion.div
                                key={proj.title}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={easeTransition}
                                className="rounded-2xl border border-base-300/70 bg-base-100/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm flex flex-col justify-between hover:border-primary/40 transition-colors"
                            >
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bebas tracking-wide text-base-content">
                                        {proj.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {proj.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="badge badge-outline border-base-content/20 text-[10px] font-mono px-2 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs leading-relaxed text-base-content/75 pt-2">
                                        {proj.description}
                                    </p>
                                </div>

                                {proj.link && (
                                    <div className="pt-4 mt-4 border-t border-base-content/10">
                                        <a
                                            href={proj.link}
                                            target={proj.link.startsWith("http") ? "_blank" : undefined}
                                            rel={proj.link.startsWith("http") ? "noreferrer" : undefined}
                                            className="btn btn-outline btn-xs h-8 px-3 text-[11px] font-semibold uppercase tracking-wider gap-1 text-primary hover:text-primary-content"
                                        >
                                            {proj.linkLabel || "View Project"}
                                            <ArrowUpRight className="size-3" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 04: Skills */}
                <section className="space-y-8">
                    <div className="flex items-end justify-between border-b border-base-content/15 pb-4">
                        <div>
                            <div className="badge badge-primary badge-outline mb-2 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Technical Taxonomy
                            </div>
                            <h2 className="text-4xl font-bebas tracking-wide text-base-content sm:text-5xl">
                                Skills
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-base-content/50 uppercase">
                            04 / Skills
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {skillClusters.map((cluster) => {
                            const IconComponent = cluster.icon;
                            return (
                                <div
                                    key={cluster.name}
                                    className="rounded-2xl border border-base-300/70 bg-base-100/80 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm space-y-3"
                                >
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                        <IconComponent className="size-4" />
                                        <h3 className="text-lg font-bebas tracking-wide text-base-content">
                                            {cluster.name}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cluster.skills.map((s) => (
                                            <span
                                                key={s}
                                                className="badge badge-neutral badge-sm text-xs font-mono"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Section 05: References & Certifications */}
                <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* References */}
                    <div className="space-y-6">
                        <div className="border-b border-base-content/15 pb-3">
                            <h2 className="text-3xl font-bebas tracking-wide text-base-content">
                                References
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {references.map((ref) => (
                                <div
                                    key={ref.name}
                                    className="rounded-2xl border border-base-300/70 bg-base-100/80 p-5 shadow-sm space-y-2"
                                >
                                    <h3 className="text-xl font-bebas tracking-wide text-base-content">
                                        {ref.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-primary">
                                        {ref.title} · <span className="font-normal text-base-content/70">{ref.company}</span>
                                    </p>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-base-content/70 pt-1">
                                        <a href={`tel:${ref.phone.replace(/\s+/g, "")}`} className="hover:text-accent">
                                            {ref.phone}
                                        </a>
                                        <span>•</span>
                                        <a href={`mailto:${ref.email}`} className="hover:text-accent">
                                            {ref.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <div className="border-b border-base-content/15 pb-3">
                            <h2 className="text-3xl font-bebas tracking-wide text-base-content">
                                Certifications
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.title + cert.date}
                                    className="flex items-center justify-between rounded-xl border border-base-content/10 bg-base-100/70 p-3.5 text-xs"
                                >
                                    <div>
                                        <p className="font-semibold text-base-content">{cert.title}</p>
                                        <p className="text-base-content/60 font-mono text-[11px]">{cert.issuer}</p>
                                    </div>
                                    <span className="badge badge-neutral badge-sm font-mono text-[10px] shrink-0 ml-2">
                                        {cert.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 06: Languages & Interests */}
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Languages */}
                    <div className="rounded-2xl border border-base-300/70 bg-base-100/80 p-6 shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b border-base-content/10 pb-3">
                            <h3 className="text-2xl font-bebas tracking-wide text-base-content">
                                Languages
                            </h3>
                            <span className="text-xs font-mono text-base-content/50 uppercase">Proficiency</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {languages.map((lang) => (
                                <div key={lang.name} className="p-3 rounded-xl bg-base-200/50 border border-base-content/5">
                                    <div className="font-semibold text-base-content">{lang.name}</div>
                                    <div className="text-xs font-mono text-primary mt-0.5">{lang.level}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="rounded-2xl border border-base-300/70 bg-base-100/80 p-6 shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b border-base-content/10 pb-3">
                            <h3 className="text-2xl font-bebas tracking-wide text-base-content flex items-center gap-2">
                                <Trophy className="size-5 text-accent" />
                                Interests
                            </h3>
                            <span className="text-xs font-mono text-base-content/50 uppercase">Disciplines</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {interests.map((item) => (
                                <span
                                    key={item.label}
                                    className="badge badge-outline border-base-content/20 text-xs font-mono px-3 py-2.5 rounded-lg"
                                >
                                    {item.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Box */}
                <footer className="relative overflow-hidden rounded-2xl border border-primary/40 bg-base-100/90 p-8 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-bebas tracking-wide text-base-content">
                            Let's Build Something High-Performance
                        </h2>
                        <p className="text-sm text-base-content/75 max-w-xl">
                            Available for software engineering and digitalization roles.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                        <a
                            href="mailto:patrikeyvalentiny@gmail.com"
                            className="btn btn-accent px-6 h-12 text-xs uppercase tracking-wider text-accent-content font-bold gap-2"
                        >
                            <Mail className="size-4" />
                            patrikeyvalentiny@gmail.com
                        </a>
                        <a
                            href="/"
                            className="btn btn-outline px-6 h-12 text-xs uppercase tracking-wider"
                        >
                            Home
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}

