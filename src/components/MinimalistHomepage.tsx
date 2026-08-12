import { Github, Instagram, Linkedin } from "iconoir-react";

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
                {/* <div className="grid flex-1 grid-cols-2 w-full gap-4 mt-10 lg:mt-0">
                    <div className="bg-primary/30 rounded-lg">
                        Dev
                    </div>
                    <div className="bg-accent/30 rounded-lg">
                        Creative
                    </div>
                </div> */}
            </section>
        </main>
    );
}