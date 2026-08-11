import React from 'react';
import { Figma, Crown } from 'iconoir-react';

const universities = [
    { name: 'SDU', url: 'https://www.sdu.dk' },
    { name: 'AAU', url: 'https://www.aau.dk' },
    { name: 'UC Syd', url: 'https://www.ucsyd.dk' },
    { name: 'SEA', url: 'https://www.s-e-a.dk' },
    { name: 'FMS', url: 'https://www.fms.dk' },
    { name: 'SDMK', url: 'https://www.sdmk.dk' },
];

const KongekampenCaseStudy: React.FC = () => {
    return (
        <main data-theme="kongekampen" className="min-h-screen bg-base-100 text-base-content transition-colors duration-500">
            {/* Hero Blog Header */}
            <header className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center relative selection:bg-primary selection:text-primary-content">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-primary opacity-5 blur-3xl rounded-full mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[150%] bg-secondary opacity-5 blur-3xl rounded-full mix-blend-multiply pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="badge badge-primary badge-outline mb-6 p-4 text-xs font-bold tracking-[0.2em] uppercase">
                        Brand Case Study
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight uppercase text-base-content">
                        Championship Red: <br className="hidden md:block" />
                        <span className="text-primary">Reimagining Kongekampen</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-normal text-base-content/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Every year, the city of Esbjerg transforms. Textbooks are
                        traded for dodgeballs, and quiet campuses erupt into a sea of
                        costumes and competition. This is <strong>Kongekampen</strong>—the definitive social event for students at{' '}
                        {universities.map((uni, index) => (
                            <React.Fragment key={uni.name}>
                                {index === universities.length - 1 && 'and '}
                                <a href={uni.url} target="_blank" rel="noopener noreferrer" className="link link-hover text-base-content font-bold hover:text-primary transition-colors">
                                    {uni.name}
                                </a>
                                {index < universities.length - 1 ? ', ' : '.'}
                            </React.Fragment>
                        ))}
                    </p>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto font-light">
                        We undertook the challenge of rebranding Kongekampen to bridge the visual gap between
                        its inherently chaotic "student rowdiness" and the professional backing of <a href="https://e1education.dk" target="_blank" rel="noopener noreferrer" className="link link-hover text-base-content font-bold hover:text-primary transition-colors">
                            Education Esbjerg (E.1)
                        </a>.
                    </p>
                </div>
            </header>

            {/* Hero Splash Image */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 relative z-10">
                <figure className="relative rounded-box overflow-hidden shadow-2xl shadow-primary/10 border-8 border-base-100/50 bg-base-100">
                    <img
                        src="/kongekampen/poster-mocs/poster-full-vertical-roll.png"
                        alt="Kongekampen Concept Overview"
                        className="w-full object-cover max-h-[85vh] object-center"
                    />
                </figure>
            </section>

            {/* Section 01: Case for Change */}
            <section className="py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase tracking-tight mb-8">
                        <span className="text-secondary mr-4">01.</span>The Case for Change
                    </h2>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        The legacy branding was a relic of its time, relying on harsh gradients, chaotic sunbursts, and cluttered layouts.
                        It felt like a "party flyer" identity operating in a high-profile "city festival" reality. The redesign aimed to craft a visual system that is:
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100/80 backdrop-blur border border-base-content/10 shadow-xl shadow-base-content/5 hover:-translate-y-2 transition-transform duration-300">
                        <div className="card-body">
                            <h3 className="card-title text-base-content font-black uppercase tracking-wide text-lg flex items-center gap-2">
                                <Crown className="text-primary" /> Scalable
                            </h3>
                            <p className="text-base-content/70 font-medium leading-relaxed mt-2 grow">
                                High-impact execution across all touchpoints, from a business card to a massive bus shelter.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100/80 backdrop-blur border border-base-content/10 shadow-xl shadow-base-content/5 hover:-translate-y-2 transition-transform duration-300">
                        <div className="card-body">
                            <h3 className="card-title text-base-content font-black uppercase tracking-wide text-lg flex items-center gap-2">
                                <Crown className="text-primary" /> Social-First
                            </h3>
                            <p className="text-base-content/70 font-medium leading-relaxed mt-2 grow">
                                Uncompromising legibility and dynamic vibrancy on a 6-inch mobile screen.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100/80 backdrop-blur border border-base-content/10 shadow-xl shadow-base-content/5 hover:-translate-y-2 transition-transform duration-300">
                        <div className="card-body">
                            <h3 className="card-title text-base-content font-black uppercase tracking-wide text-lg flex items-center gap-2">
                                <Crown className="text-primary" /> Unified
                            </h3>
                            <p className="text-base-content/70 font-medium leading-relaxed mt-2 grow">
                                A cohesive partnership visual language natively integrating the E.1 corporate brand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 02: Power Palette & Typography */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-base-200/50">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase tracking-tight mb-8">
                        <span className="text-secondary mr-4">02.</span>The "Power" Palette
                    </h2>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        The rebrand is anchored by <strong>Championship Red (#FF2442)</strong>. It’s a color that demands an adrenaline spike—the visual
                        equivalent of a dodgeball whistle echoing across the court.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <div className="card bg-primary text-primary-content shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-500 cursor-default group">
                        <div className="card-body flex flex-col justify-between min-h-60">
                            <h3 className="font-mono text-sm opacity-90 uppercase tracking-widest font-bold">Primary</h3>
                            <div>
                                <div className="text-4xl font-black mb-4 group-hover:scale-110 origin-left transition-transform">#FF2442</div>
                                <p className="text-sm font-medium leading-relaxed">The Heartbeat. Action, intensity, and fierce competition.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-secondary text-secondary-content shadow-2xl shadow-secondary/30 hover:scale-105 transition-all duration-500 cursor-default group">
                        <div className="card-body flex flex-col justify-between min-h-60">
                            <h3 className="font-mono text-sm opacity-80 uppercase tracking-widest font-bold">Royal Gold</h3>
                            <div>
                                <div className="text-4xl font-black mb-4 group-hover:scale-110 origin-left transition-transform">#FFB830</div>
                                <p className="text-sm font-medium leading-relaxed">The Prize. A definitive nod to the titular "Konge" (King).</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 text-base-content shadow-xl hover:shadow-2xl hover:scale-105 border border-base-content/10 transition-all duration-500 cursor-default group">
                        <div className="card-body flex flex-col justify-between min-h-60">
                            <h3 className="font-mono text-sm opacity-60 uppercase tracking-widest font-bold">Soft Cream</h3>
                            <div>
                                <div className="text-4xl font-black mb-4 group-hover:scale-110 origin-left transition-transform">#FFEDDA</div>
                                <p className="text-sm font-medium leading-relaxed">The Sophisticate. Soft contrast ensuring premium readability.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-accent text-accent-content overflow-hidden shadow-2xl shadow-accent/30 hover:scale-105 transition-all duration-500 cursor-default relative group">
                        <div className="absolute -right-8 -top-8 text-8xl opacity-10 rotate-12 transition-transform group-hover:rotate-45 duration-700">🏆</div>
                        <div className="card-body flex flex-col justify-between min-h-60 relative z-10">
                            <h3 className="font-mono text-sm opacity-90 uppercase tracking-widest font-bold">Brand Blue</h3>
                            <div>
                                <div className="text-4xl font-black mb-4 group-hover:scale-110 origin-left transition-transform">#0059E7</div>
                                <p className="text-sm font-medium leading-relaxed">The Partner. Integrating the E.1 corporate identity seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        By swapping out harsh default whites for the inviting <code className="bg-base-100 px-2 py-1 rounded-box text-base-content border border-base-content/10">#FFEDDA</code> Cream, the brand
                        immediately establishes an intentional, premium tone that elevates the photography and typography.
                    </p>
                </div>

                {/* Print Detail Collage */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <figure className="md:col-span-2">
                        <img
                            src="/kongekampen/poster-mocs/poster-full-horizontal-roll.png"
                            alt="Typography and Grid Construction"
                            className="w-full rounded-box shadow-xl border border-base-content/10 object-cover"
                        />
                    </figure>
                    <figure className="group overflow-hidden rounded-box shadow-xl border border-base-content/10 bg-base-100">
                        <img
                            src="/kongekampen/poster-mocs/poster-close-fold-left.png"
                            alt="Brand Detail Fold Left"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </figure>
                    <figure className="group overflow-hidden rounded-box shadow-xl border border-base-content/10 bg-base-100">
                        <img
                            src="/kongekampen/poster-mocs/poster-close-fold-right.png"
                            alt="Brand Detail Fold Right"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </figure>
                </div>
            </section>

            {/* Section 03: Digital Dynamics */}
            <section className="py-20 md:py-32 px-6 md:px-12">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase tracking-tight mb-8">
                        <span className="text-secondary mr-4">03.</span>Digital Dynamics
                    </h2>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        A student event lives and dies on social media algorithms. The new social suite is engineered to slice through the feed.
                        Using glowing iconography—trophies, basketballs, glowing crowns—the layouts capture "motion blur" and the frantic energy of tournament day, even in static formats.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Phone Mockup */}
                    <div className="md:col-span-4 flex justify-center">
                        <div className="mockup-phone shadow-2xl drop-shadow-[0_20px_50px_rgba(255,36,66,0.2)] hover:-translate-y-4 transition-transform duration-500 scale-[0.85] md:scale-100 origin-center max-w-70">
                            <div className="camera"></div>
                            <div className="display bg-black">
                                <img src="/kongekampen/ig-story.png" alt="Instagram Story Design" className="w-[105%] h-[105%] object-cover object-center" />
                            </div>
                        </div>
                    </div>
                    {/* IG Post Feed */}
                    <div className="md:col-span-8 flex flex-col gap-8">
                        <figure className="rounded-box overflow-hidden shadow-2xl border border-base-content/10 bg-base-100 group">
                            <img
                                src="/kongekampen/ig-post.png"
                                alt="Instagram Post Template"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </figure>
                        <div className="card bg-base-100/80 backdrop-blur p-8 border border-base-content/10 shadow-xl max-w-xl self-end -mt-16 md:-mt-24 relative z-20 mx-4 md:mx-0 translate-y-8 md:translate-y-0 md:-translate-x-12">
                            <div className="card-body p-0">
                                <h4 className="card-title text-2xl font-black uppercase text-base-content mb-1">Feed Takeovers</h4>
                                <p className="text-lg text-base-content/70 leading-relaxed font-medium">
                                    Striking type scaling and high-contrast composition make every update feel like a major, adrenaline-fueled announcement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 04: Urban Takeover */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-base-200/50 border-y border-base-content/5">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase tracking-tight mb-8">
                        <span className="text-secondary mr-4">04.</span>The Urban Takeover
                    </h2>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        A true city-wide event must own the physical environment. The visual identity translates brilliantly to large-scale OOH displays,
                        creating heavy-hitting awareness across Esbjerg's urban landscape. Let it be digital screens on public transport, or tactical print assets—the consistency remains unshakeable.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    <figure className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-base-100 bg-base-100 group">
                        <img
                            src="/kongekampen/bus-stop-mock.png"
                            alt="Bus Stop Mockup"
                            className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />
                    </figure>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <figure className="rounded-box overflow-hidden shadow-2xl border-4 border-base-100 bg-base-100 group">
                                <img
                                    src="/kongekampen/business-cards-mock.png"
                                    alt="Business Cards Mockup"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </figure>
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-black uppercase text-base-content mb-6 drop-shadow-sm">Networking for Champions</h3>
                            <p className="text-xl text-base-content/80 leading-relaxed font-medium">
                                Even the smallest touchpoints carry massive weight. VIP networking cards utilized the heavy <strong className="text-primary">"Championship"</strong> red and dynamic typography
                                to ensure the organizers left an enduring mark on sponsors and partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 05: The Result */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-primary text-primary-content">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 drop-shadow-md">
                        05. The Result
                    </h2>
                    <p className="text-2xl font-medium text-primary-content/90 leading-relaxed mb-16">
                        Kongekampen now holds a visual toolkit that matches its immense legacy.
                        It walks the tightrope of royal pride and competitive, underground grit—an unstoppable brand defining Esbjerg's ultimate student tradition.
                    </p>
                    <figure className="rounded-box overflow-hidden shadow-2xl shadow-black/40 border-4 border-primary-content/20 hover:border-primary-content/40 transition-colors">
                        <img
                            src="/kongekampen/poster-mocs/poster-full-side-shot.png"
                            alt="Final Out of Home Showcase"
                            className="w-full h-auto object-cover"
                        />
                    </figure>
                </div>
            </section>

            {/* Quote Transition */}
            <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
                <Crown className="mx-auto w-16 h-16 text-secondary mb-8" />
                <p className="text-3xl md:text-4xl font-black text-base-content leading-snug uppercase tracking-tight">
                    "Rebranding isn't just about picking a new color;<br /> it’s about crafting a banner that a community is immensely proud to run under."
                </p>
            </section>

            {/* Project Credits Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                <div className="card bg-base-100 shadow-xl border border-base-content/10">
                    <div className="card-body p-10 md:p-16">
                        <h3 className="card-title text-xl font-black uppercase mb-10 text-primary flex items-center gap-3">
                            <Crown className="text-primary" /> Project Credits
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <p className="font-bold text-xs text-base-content/50 uppercase mb-2 ">
                                    Design Direction
                                </p>
                                <p className="font-black text-2xl text-base-content">Patrik Valentiny</p>
                            </div>
                            <div>
                                <p className="font-bold text-xs text-base-content/50 uppercase mb-2 ">
                                    Client
                                </p>
                                <a
                                    href="https://e1education.dk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover font-black text-2xl text-primary hover:text-base-content transition-colors inline-block"
                                >
                                    Education Esbjerg (E.1)
                                </a>
                            </div>
                            <div>
                                <p className="font-bold text-xs text-base-content/50 uppercase mb-2 ">
                                    Toolkit
                                </p>
                                <p className="font-black text-2xl text-base-content flex items-center gap-2">
                                    <Figma width={28} height={28} />
                                    Figma
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-12 text-center text-sm text-base-content/70">
                &copy; {new Date().getFullYear()} Patrik Valentiny. All rights reserved.
            </footer>
        </main>

    );
};

export default KongekampenCaseStudy;