import { Github, Instagram, Linkedin, GitBranch } from "iconoir-react";

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/patrikvalentiny/",
        icon: Linkedin,
    },
    {
        label: "GitHub",
        href: "https://github.com/patrikvalentiny",
        icon: Github,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/patrikvalentiny/",
        icon: Instagram,
    },
];

const shellClass = "relative  overflow-hidden min-h-dvh bg-base-100 text-base-content pt-20";
const topGlowClass = "pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-accent/10 to-transparent";
const gridTextureClass = "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[18px_18px] opacity-20";
const headerBadgeClass = "badge badge-outline border-accent/70 bg-transparent px-4 py-3 text-md tracking-wide uppercase text-accent";
const socialButtonClass = "btn btn-ghost";

export default function MinimalistHomepage(): JSX.Element {
    return (
        <main className={shellClass}
            style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-primary) 14%, transparent) 1px, transparent 0)",
                backgroundSize: "26px 26px",
            }}>
            <div className={gridTextureClass} />
            <div className={topGlowClass} />
            <section className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
                <div className="grid flex-1 items-center gap-10 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pt-0">
                    <div className="max-w-5xl space-y-8">
                        <h1 className="max-w-4xl text-balance text-[clamp(4.25rem,14vw,10rem)] uppercase leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-accent/50">
                            Creating the unknown.
                        </h1>

                        <p className="max-w-2xl text-pretty text-lg leading-8 text-base-content/75 sm:text-xl technical-spec">
                            Slovak-born. Denmark-based. Bridging the gap between raw
                            hardware logic and cinematic human experience. I build
                            systems that scale and capture light that moves.
                        </p>

                        {/* <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a className={primaryButtonClass} href="/brand-identity">
                                View brand identity
                            </a>
                            <a className={secondaryButtonClass} href="/su-holidays">
                                SU holidays
                            </a>
                        </div> */}

                        <div className="flex flex-wrap gap-3 pt-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <a
                                        key={link.label}
                                        className={socialButtonClass}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.label}
                                    >
                                        <Icon className="size-4" />
                                        <span>{link.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="hover-3d w-full max-w-96">
                            <figure className="relative flex h-88 w-full items-end overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:h-112 sm:max-w-md">
                                <img
                                    src="/profile-image.jpg"
                                    alt="Portrait of Patrik Valentiny"
                                    className="absolute inset-0 h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-base-100/25 via-accent/10 to-error/15" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,90,123,0.18),transparent_36%),radial-gradient(circle_at_30%_75%,rgba(248,197,143,0.14),transparent_40%)]" />
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
                    </div>

                </div>
                <section className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-base-300/60 bg-base-100/80 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_42%)]" />
                    <div className="relative grid items-center gap-5 px-5 py-5 sm:px-6 sm:py-6 md:grid-cols-[1.2fr_0.8fr] md:gap-6 md:px-7 md:py-6">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="badge badge-outline badge-sm border-base-content/20 bg-transparent px-2.5 text-[10px] uppercase tracking-[0.18em] text-base-content/80">
                                    Showcase
                                </span>
                                <span className="badge badge-success badge-sm gap-1 px-2.5 text-[10px] uppercase tracking-[0.16em]">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-success-content" />
                                    Production
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-black uppercase leading-none text-base-content sm:text-3xl">
                                    SU Holidays Generator
                                </h2>
                                <p className="max-w-xl text-sm leading-6 text-base-content/70 sm:text-[0.96rem]">
                                    A privacy-first PDF workflow for students managing SU paperwork, built to simplify a repetitive process without adding friction.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-base-content/55">
                                <span>React</span>
                                <span className="text-base-content/30">•</span>
                                <span>Client-side PDF</span>
                                <span className="text-base-content/30">•</span>
                                <span>Accessibility</span>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-1">
                                <a
                                    href="https://su-holidays.patrikvalentiny.work"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-accent btn-sm h-10 min-h-10 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent-content"
                                >
                                    Explore
                                </a>
                                <a
                                    href="https://github.com/patrikvalentiny/su-holidays"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline btn-sm h-10 min-h-10 px-4 text-xs font-semibold uppercase tracking-[0.12em]"
                                    aria-label="View on GitHub"
                                >
                                    <Github className="size-3.5" />
                                    Code
                                </a>
                            </div>
                        </div>

                        <div className="relative rounded-xl border border-base-content/10 bg-base-200/60 p-3 shadow-inner shadow-base-content/5">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-base-content/25" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-base-content/25" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-base-content/25" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.18em] text-base-content/45">PDF</span>
                            </div>

                            <div className="space-y-2">
                                <div className="rounded-lg bg-base-100 p-3 shadow-sm">
                                    <div className="mb-2 h-2 w-20 rounded-full bg-primary/20" />
                                    <div className="space-y-2">
                                        <div className="h-2 w-full rounded-full bg-base-content/10" />
                                        <div className="h-2 w-5/6 rounded-full bg-base-content/10" />
                                        <div className="h-2 w-2/3 rounded-full bg-base-content/10" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="rounded-lg bg-primary/8 p-2.5">
                                        <div className="text-[10px] uppercase tracking-[0.14em] text-base-content/50">Users</div>
                                        <div className="mt-1 text-xl font-black text-primary">200+</div>
                                    </div>
                                    <div className="rounded-lg bg-accent/8 p-2.5">
                                        <div className="text-[10px] uppercase tracking-[0.14em] text-base-content/50">Exports</div>
                                        <div className="mt-1 text-xl font-black text-accent">50+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}