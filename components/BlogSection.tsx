// components/BlogSection.tsx
import Link from 'next/link'

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
        slug: "premium-ui-ux-engineering-principles",
        title: "The Core Principles of Premium UI/UX Engineering for Freelancers",
        description: "How to move beyond basic templates and build high-converting, micro-animated interfaces using Tailwind CSS.",
        date: "May 12, 2026",
        readingTime: "4 min read",
        category: "Design",
        comingSoon: true // Pour marquer qu'il n'est pas encore cliquable
    }
]

export default function BlogSection() {
    return (
        <section id="blog" className="py-24 bg-[#F8FAFC] dark:bg-zinc-900/30 rounded-2xl">
            <div className="max-w-6xl mx-auto px-6 rounded-2xl">

                {/* Header de la section */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/30">
                        Writing & Insights
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white mt-4 mb-2">
                        Latest Articles
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl">
                        Deep dives into frontend engineering, web performance optimization, and crafting premium user experiences.
                    </p>
                </div>

                {/* Grille des articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <div
                            key={article.slug}
                            className={`bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md ${article.comingSoon ? 'opacity-60' : ''
                                }`}
                        >
                            <div>
                                {/* Meta */}
                                <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-4">
                                    <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <span>•</span>
                                    <time>{article.date}</time>
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600">
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {article.description}
                                </p>
                            </div>

                            {/* Actions conditional rendering */}
                            {article.comingSoon ? (
                                <span className="text-xs text-slate-400 dark:text-slate-500 italic font-medium">
                                    Coming soon...
                                </span>
                            ) : (
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 group"
                                >
                                    Read full article
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}