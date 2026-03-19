const colorSwatches = [
    {
        label: "Obsidian Matte",
        description: "Base surface and surrounding field",
        value: "#121212",
        className: "bg-base-100 text-base-content",
    },
    {
        label: "Industrial Bronze",
        description: "Core structure and anchoring tone",
        value: "#A67C52",
        className: "bg-primary text-primary-content",
    },
    {
        label: "Roubaix Pink",
        description: "Pulse, contrast, and emotional accent",
        value: "#FF3366",
        className: "bg-accent text-accent-content",
    },
    {
        label: "Concrete Grey",
        description: "Support surface for diagrams and notes",
        value: "#A8A8A8",
        className: "bg-base-200 text-base-content",
    },
];

const typeCards = [
    {
        label: "Display type",
        title: "Bebas Neue",
        description:
            "High-impact, condensed, and authoritative. Reserved for section heads and statements that need weight.",
        tags: ["all caps", "tight tracking"],
    },
    {
        label: "Interface reading",
        title: "Inter Regular",
        description:
            "Neutral, legible, and balanced. Used for long-form copy, navigation, and supporting explanation.",
        tags: ["variable weight", "sans serif"],
    },
    {
        label: "Metric data",
        title: "JetBrains Mono",
        description:
            "Monospaced and technical. Best for values, references, labels, and precision metadata.",
        tags: ["monospace", "data heavy"],
    },
];

const principles = [
    {
        title: "Rigid framework, human pulse",
        accent: "Bronze",
        description:
            "The core system stays structured and dependable. Pink appears only where emphasis, urgency, or emotion should break through.",
        metricLabel: "Consistency",
        metricValue: "99.9%",
    },
    {
        title: "Precision with contrast",
        accent: "Pink",
        description:
            "The language stays clear and restrained while the accent layer carries momentum. It should feel engineered, not decorative.",
        metricLabel: "Variance",
        metricValue: "Low",
    },
];

const systemNotes = ["0.2rem radius", "2px industrial borders", "Tonal stacking"];

export default function BrandIdentityBoard() {
    return (
        <main
            className="min-h-screen bg-base-100 text-base-content"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-primary) 14%, transparent) 1px, transparent 0)",
                backgroundSize: "26px 26px",
            }}
        >
            <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
                <header className="flex flex-col gap-6 border-b border-base-content/20 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.35em] text-base-content/55 uppercase">
                            <span className="badge badge-outline badge-sm rounded-none border-base-content/25 px-3 py-3">
                                Brand System
                            </span>
                            <span>Visual identity board</span>
                        </div>

                        <h1 className="max-w-5xl text-balance text-6xl leading-[0.88] font-bebas tracking-[0.06em] text-base-content sm:text-7xl lg:text-[7.25rem]">
                            Brand Identity V1.0
                        </h1>

                        <p className="max-w-3xl text-base leading-7 text-base-content/70 sm:text-lg">
                            Engineering the system around restrained surfaces, disciplined typography, and one aggressive accent that carries the pulse.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-3 lg:items-end">
                        <span className="text-xs tracking-[0.35em] text-base-content/45 uppercase">
                            Ref: PV-BI-010
                        </span>
                        <div className="flex flex-wrap gap-2">
                            <span className="badge badge-soft badge-neutral rounded-none px-3 py-3">
                                Obsidian
                            </span>
                            <span className="badge badge-soft badge-primary rounded-none px-3 py-3">
                                Bronze core
                            </span>
                            <span className="badge badge-soft badge-accent rounded-none px-3 py-3">
                                Pulse layer
                            </span>
                        </div>
                    </div>
                </header>

                <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="card rounded-none border border-base-content/20 bg-base-100/80 shadow-none backdrop-blur-sm lg:row-span-2">
                            <div className="card-body gap-6 p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs tracking-[0.4em] text-base-content/50 uppercase">
                                            Base surface
                                        </p>
                                        <h2 className="mt-2 text-3xl font-bebas tracking-[0.06em] text-base-content sm:text-4xl">
                                            Obsidian Matte
                                        </h2>
                                    </div>
                                    <div className="badge badge-ghost rounded-none border border-base-content/15 px-3 py-3 font-mono text-[0.7rem] tracking-[0.28em] uppercase">
                                        0% sat / 7% val
                                    </div>
                                </div>

                                <div className="flex min-h-72 flex-col justify-between rounded-none border border-base-content/15 bg-base-200/50 p-5">
                                    <div>
                                        <p className="text-xs tracking-[0.4em] text-base-content/45 uppercase">
                                            Field behavior
                                        </p>
                                        <p className="mt-3 max-w-sm text-sm leading-7 text-base-content/65 sm:text-base">
                                            The background should stay calm and low-contrast so the typography and chromatic accents can carry hierarchy without visual noise.
                                        </p>
                                    </div>
                                    <div className="flex items-end justify-between gap-4">
                                        <div>
                                            <p className="text-xs tracking-[0.35em] text-base-content/40 uppercase">HEX</p>
                                            <p className="mt-2 font-mono text-lg tracking-[0.25em] text-base-content/55">#121212</p>
                                        </div>
                                        <div className="h-8 w-28 border border-base-content/20 bg-base-300/40" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {colorSwatches.slice(1, 3).map((swatch) => (
                                <div
                                    key={swatch.label}
                                    className={`card rounded-none border border-base-content/20 shadow-none ${swatch.className}`}
                                >
                                    <div className="card-body justify-between p-5 sm:p-6">
                                        <div>
                                            <p className="text-xs tracking-[0.4em] text-current/55 uppercase">
                                                {swatch.description}
                                            </p>
                                            <h2 className="mt-2 text-2xl font-bebas tracking-[0.06em] sm:text-3xl">
                                                {swatch.label}
                                            </h2>
                                        </div>
                                        <div className="mt-8 flex items-end justify-between gap-4">
                                            <p className="font-mono text-sm tracking-[0.25em] uppercase opacity-80">
                                                HEX {swatch.value}
                                            </p>
                                            <div className="h-10 w-10 border border-current/25 opacity-80" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="card rounded-none border border-base-content/20 bg-base-200/90 shadow-none">
                                <div className="card-body justify-between p-5 sm:p-6">
                                    <div>
                                        <p className="text-xs tracking-[0.4em] text-base-content/50 uppercase">
                                            Mechanical context
                                        </p>
                                        <h2 className="mt-2 text-2xl font-bebas tracking-[0.06em] sm:text-3xl">
                                            Concrete Grey
                                        </h2>
                                    </div>
                                    <div className="mt-8 flex items-end justify-between gap-4">
                                        <p className="font-mono text-sm tracking-[0.25em] uppercase text-base-content/75">
                                            HEX #A8A8A8
                                        </p>
                                        <div className="flex items-end gap-1 opacity-70" aria-hidden="true">
                                            <span className="h-8 w-2 bg-base-content/40" />
                                            <span className="h-12 w-2 bg-base-content/55" />
                                            <span className="h-6 w-2 bg-base-content/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="card rounded-none border border-base-content/20 bg-base-200/75 shadow-none">
                        <div className="card-body gap-5 p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs tracking-[0.4em] text-base-content/45 uppercase">
                                        Spectral analysis
                                    </p>
                                    <h2 className="mt-2 text-3xl font-bebas tracking-[0.06em] sm:text-4xl">
                                        Color hierarchy
                                    </h2>
                                </div>
                                <div className="badge badge-outline rounded-none border-base-content/20 px-3 py-3 font-mono text-[0.7rem] tracking-[0.28em] uppercase">
                                    4 channels
                                </div>
                            </div>

                            <div className="grid gap-3">
                                {colorSwatches.map((swatch) => (
                                    <div
                                        key={swatch.label}
                                        className="flex items-center gap-4 border border-base-content/15 bg-base-100/70 p-3"
                                    >
                                        <div className={`h-14 w-14 border border-base-content/15 ${swatch.className}`} aria-hidden="true" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-base-content">{swatch.label}</p>
                                            <p className="text-sm text-base-content/60">{swatch.description}</p>
                                        </div>
                                        <p className="font-mono text-xs tracking-[0.25em] text-base-content/55 uppercase">
                                            {swatch.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </section>

                <section className="grid gap-6">
                    <div className="flex items-center justify-between gap-4 border-b border-base-content/20 pb-3">
                        <h2 className="text-4xl font-bebas tracking-[0.06em] sm:text-5xl">
                            Typography tension
                        </h2>
                        <span className="text-xs tracking-[0.35em] text-base-content/45 uppercase">
                            Font stack hierarchy
                        </span>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {typeCards.map((typeCard) => (
                            <div key={typeCard.label} className="card rounded-none border border-base-content/20 bg-base-100/70 shadow-none">
                                <div className="card-body gap-5 p-5 sm:p-6">
                                    <p className="text-xs tracking-[0.35em] text-base-content/45 uppercase">
                                        {typeCard.label}
                                    </p>
                                    <h3 className="text-4xl leading-none font-bebas tracking-[0.05em] text-base-content sm:text-5xl">
                                        {typeCard.title}
                                    </h3>
                                    <p className="max-w-md text-sm leading-7 text-base-content/70 sm:text-base">
                                        {typeCard.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {typeCard.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="badge badge-ghost rounded-none border border-base-content/15 px-3 py-3 font-mono text-[0.65rem] tracking-[0.25em] uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="card rounded-none border border-base-content/20 bg-base-100/75 shadow-none">
                        <div className="card-body gap-0 p-0">
                            <div className="grid gap-px lg:grid-cols-2">
                                {principles.map((principle) => (
                                    <div key={principle.title} className="relative overflow-hidden border border-base-content/20 p-6 sm:p-7">
                                        <div className="absolute right-4 top-4 text-6xl font-bebas tracking-[0.08em] text-base-content/10 sm:text-7xl">
                                            {principle.accent === "Bronze" ? "01" : "02"}
                                        </div>
                                        <p className="text-xs tracking-[0.4em] text-base-content/45 uppercase">
                                            Phase {principle.accent === "Bronze" ? "01" : "02"}
                                        </p>
                                        <h3 className={`mt-3 max-w-md text-4xl leading-[0.95] font-bebas tracking-[0.05em] ${principle.accent === "Bronze" ? "text-primary" : "text-accent"}`}>
                                            {principle.title}
                                        </h3>
                                        <p className="mt-5 max-w-md text-sm leading-7 text-base-content/70 sm:text-base">
                                            {principle.description}
                                        </p>
                                        <div className="mt-8 border-l-4 border-current pl-4 text-xs tracking-[0.35em] uppercase text-base-content/55">
                                            <div>{principle.metricLabel} // {principle.metricValue}</div>
                                            <div>Outcome // {principle.accent === "Bronze" ? "framework" : "humanity"}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="card rounded-none border border-base-content/20 bg-base-200/75 shadow-none">
                            <div className="card-body gap-5 p-5 sm:p-6">
                                <p className="text-xs tracking-[0.4em] text-base-content/45 uppercase">
                                    System notes
                                </p>
                                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    {systemNotes.map((note, index) => (
                                        <div key={note} className="flex items-center gap-3 border border-base-content/15 bg-base-100/60 p-3">
                                            <span className="badge rounded-none border-base-content/15 bg-base-content/10 px-3 py-3 font-mono text-[0.7rem] tracking-[0.25em] uppercase">
                                                0{index + 1}
                                            </span>
                                            <span className="text-sm text-base-content/75">{note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card rounded-none border border-base-content/20 bg-base-100/70 shadow-none">
                            <div className="card-body gap-5 p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs tracking-[0.4em] text-base-content/45 uppercase">
                                            Deployment cues
                                        </p>
                                        <h3 className="mt-2 text-3xl font-bebas tracking-[0.06em]">Tonal stacking</h3>
                                    </div>
                                    <div className="flex gap-1 opacity-60" aria-hidden="true">
                                        <span className="h-5 w-5 bg-base-content/70" />
                                        <span className="h-5 w-5 bg-base-content/30" />
                                    </div>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    <div className="flex items-center justify-between border border-base-content/15 bg-base-200/60 p-3 text-sm">
                                        <span>Surface</span>
                                        <span className="font-mono text-xs tracking-[0.25em] uppercase">Matte</span>
                                    </div>
                                    <div className="flex items-center justify-between border border-base-content/15 bg-base-200/60 p-3 text-sm">
                                        <span>Border</span>
                                        <span className="font-mono text-xs tracking-[0.25em] uppercase">2px</span>
                                    </div>
                                    <div className="flex items-center justify-between border border-base-content/15 bg-base-200/60 p-3 text-sm">
                                        <span>Accent</span>
                                        <span className="font-mono text-xs tracking-[0.25em] uppercase">Pulse</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}