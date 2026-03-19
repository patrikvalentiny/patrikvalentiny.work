import { Github, Instagram, Linkedin } from "iconoir-react";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/patrikvalentiny",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/patrikvalentiny/",
        icon: Linkedin,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/patrikvalentiny/",
        icon: Instagram,
    },
];

export default function MinimalistHomepage(): JSX.Element {
    return (
        <main className="min-h-screen bg-linear-to-b from-base-100 via-base-100 to-base-200">
            <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-8 lg:px-10">
                <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div className="space-y-8">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="badge badge-outline px-4 py-3 tracking-[0.2em] uppercase">
                                Patrik Valentiny
                            </span>
                            <span className="badge badge-soft">Developer / Creative</span>
                            <span className="badge badge-ghost">Esbjerg, Denmark</span>
                        </div>

                        <div className="space-y-5">
                            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                                Thoughtful digital work.
                                <span className="block text-base-content/70">
                                    Built with clarity and intent.
                                </span>
                            </h1>
                            <p className="max-w-xl text-lg leading-8 text-base-content/70 sm:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <a
                                        key={link.label}
                                        className="btn btn-ghost btn-sm gap-2"
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

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a className="btn btn-primary btn-sm gap-2" href="/brand-identity">
                                <span>View brand identity</span>
                            </a>
                            <a className="btn btn-ghost btn-sm" href="/su-holidays">
                                SU holidays
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}