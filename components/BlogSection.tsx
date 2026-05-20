import Link from 'next/link'

// 💡 Si ton composant parent lui passe la langue, tu peux ajouter une interface pour les props
interface BlogSectionProps {
    lang?: string;
}

const articles = [
    {
        slug: "how-to-optimize-nextjs-15-vercel",
        title: "How to Deploy and Optimize Next.js 15 Applications on Vercel for Extreme Speed",
        description: "A step-by-step technical guide on leveraging Vercel's Edge Network, Next.js image optimization, and advanced caching to achieve perfect Core Web Vitals.",
        date: "May 20, 2026",
        readingTime: "5 min read",
        category: "Performance"
    },
    {
        slug: "why-minimalist-ui-converts-b2b-startups",
        title: "Why Minimalist UI is the Ultimate Conversion Lever for B2B Startups",
        description: "How stripping away visual noise, mastering negative space, and prioritizing performance directly impacts your business bottom line.",
        date: "May 20, 2026",
        readingTime: "4 min read",
        category: "Design"
    }
];

export default function BlogSection({ lang = "en" }: BlogSectionProps) {
    // 💡 Définition sécurisée pour éviter les erreurs de build
    const isFr = lang === "fr";

    return (
        <section id="blog" className="py-24 bg-[#F8FAFC] dark:bg-zinc-900/30 rounded-2xl">
            <div className="max-w-6xl mx-auto px-6 rounded-2xl">

                {/* Header de la section - Design Premium Épuré */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-slate-200/60 dark:border-zinc-700/50">
                        {isFr ? "Écrits & Insights" : "Writing & Insights"}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white mt-4 mb-2">
                        {isFr ? "Derniers Articles" : "Latest Articles"}
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl">
                        {isFr
                            ? "Analyses approfondies du frontend engineering, de l'optimisation des performances web et de la conception d'interfaces premium."
                            : "Deep dives into frontend engineering, web performance optimization, and crafting premium user experiences."
                        }
                    </p>
                </div>

                {/* Grille d'articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <div
                            key={article.slug}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                        >
                            <div>
                                {/* Meta */}
                                <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-4">
                                    <span className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                                        {isFr && article.category === "Design" ? "Design" : isFr && article.category === "Performance" ? "Performance" : article.category}
                                    </span>
                                    <span>•</span>
                                    <time>
                                        {isFr ? article.date.replace("May", "Mai") : article.date}
                                    </time>
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight transition-colors">
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {article.description}
                                </p>
                            </div>

                            {/* Actions de lecture */}
                            <Link
                                href={`/blog/${article.slug}`}
                                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 inline-flex items-center gap-1 group transition-colors"
                            >
                                {isFr ? "Lire l'article complet" : "Read full article"}
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}