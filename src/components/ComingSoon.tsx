export default function ComingSoon(): JSX.Element {
    return (
        <section className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <div className="mb-6 flex justify-center gap-2">
                        <span className="badge badge-outline">Portfolio</span>
                        <span className="badge">2026</span>
                    </div>
                    <h1 className="text-5xl font-bold">Patrik Valentiny</h1>
                    <p className="py-3 text-lg font-semibold opacity-90">Developer • Videographer • Photographer • Creative Lead</p>
                    <p className="py-6 opacity-70">
                        Welcome to my portfolio. A focused space for case studies, creative projects, and strategic work. 
                        Based in Esbjerg, Denmark. The launch is in motion. Stay close.
                    </p>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <p className="text-sm uppercase opacity-60">Status</p>
                            <p className="text-2xl font-semibold">Designing the story</p>
                        </div>
                    </div>
                    <div className="mt-6 stats stats-vertical shadow lg:stats-horizontal">
                        <div className="stat">
                            <div className="stat-title">Design</div>
                            <div className="stat-value text-2xl">90%</div>
                            <div className="stat-desc">Visuals and narrative</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Build</div>
                            <div className="stat-value text-2xl">45%</div>
                            <div className="stat-desc">Astro + React</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Launch</div>
                            <div className="stat-value text-2xl">2026</div>
                            <div className="stat-desc">Final polish</div>
                        </div>
                    </div>
                    <div className="divider mt-8">Notify</div>
                    <p className="text-sm opacity-70">hello@patrikvalentiny.work</p>
                </div>
            </div>
        </section>
    );
}
