import React from "react";
import { Github, Instagram, Linkedin } from "iconoir-react";

const socialLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/patrikvalentiny/", icon: Linkedin },
    { label: "GITHUB", href: "https://github.com/patrikvalentiny", icon: Github },
    { label: "INSTAGRAM", href: "https://www.instagram.com/patrikvalentiny/", icon: Instagram },
];

const QuietlyIconic = () => {
    return (
        <div className="relative w-full h-full min-h-screen overflow-hidden bg-primary text-primary-content font-sans selection:bg-base-content selection:text-base-100 font-light m-0 p-0 box-border">
            <div className="relative w-full h-full overflow-hidden flex flex-col bg-primary/90">
                {/* Background Image Setup: We add a purple blend to closely match the image mood */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center object-cover saturate-150"
                    style={{
                        backgroundImage: `url('/bike-images/wide-sunset-grainy-bike.jpg')`,
                    }}
                />

                {/* Profile Picture Gradient Overlays */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-linear-to-br from-base-100/25 via-accent/10 to-error/15 opacity-20" />
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 70% 25%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 36%), radial-gradient(circle at 30% 75%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 40%)"
                    }}
                />

                {/* Grid Texture overlay
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-base-content) 12%, transparent) 1px, transparent 0)",
                        backgroundSize: "18px 18px",
                    }}
                /> */}

                {/* Content wrapper */}
                <div className="relative z-10 grid grid-rows-[auto_1fr_auto] h-full p-6 md:p-10 lg:p-14">
                    {/* Top Navbar */}
                    <header className="flex justify-between items-start md:items-center text-[10px] md:text-sm tracking-wide pt-2">
                        <div className="font-medium tracking-[0.2em] uppercase text-primary">
                            PATRIK VALENTINY
                        </div>
                    </header>

                    {/* Middle Content */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex sm:flex-row flex-col space-x-2 md:space-x-8 text-xs md:text-sm font-bold tracking-widest uppercase">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="btn btn-ghost text-xl hover:text-primary transition-colors flex sm:items-center gap-2 items-start justify-start sm:justify-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        <Icon className="size-5" />
                                        <span >{link.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                        <div className="text-right hidden md:block drop-shadow-md">
                            <div className="text-lg md:text-xl font-normal text-primary-content/90">
                                Developer & Technologist
                            </div>
                            <div className="text-xs md:text-sm text-primary-content/70 mt-1">
                                Esbjerg, DK
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left Content & Huge Center/Right Typography */}
                    <div className="flex flex-col lg:flex-row justify-between lg:items-end w-full gap-4 md:gap-8 pb-4 lg:pb-0">
                        <div className="order-2 lg:order-1 max-w-xs md:max-w-md lg:max-w-lg text-primary-content/80 text-base md:text-xl lg:text-2xl leading-snug md:leading-relaxed font-light drop-shadow-md lg:pb-4">
                            Slovak-born. Denmark-based. Bridging the gap between raw hardware
                            logic and cinematic human experience. I build systems that scale
                            and capture light that moves.
                        </div>

                        <div className="order-1 lg:order-2 flex justify-end items-end w-full pointer-events-none relative z-0">
                            <h1 className="leading-[0.9] text-right">
                                <span className="block text-[4.5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-accent/50 text-balance text-right max-w-4xl uppercase font-bebas mb-0 pb-0">
                                    Creating the unknown.
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuietlyIconic;
