import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Articles & Insights | Dieudonné Houndagnon",
    description: "Deep dives into frontend engineering, performance optimization, and modern UI/UX design.",
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

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-slate-50 py-24 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header de la section */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-4 border border-blue-100 dark:border-blue-900/50">
                        <span>Writing & Insights</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-50 dark:to-slate-400 bg-clip-text text-transparent">
                        Articles
                    </h1>
                    <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl">
                        Deep dives into frontend engineering, web performance optimization, and crafting premium user experiences.
                    </p>
                </header>

                <hr className="border-slate-200 dark:border-slate-800 mb-12" />

                {/* Liste des articles */}
                <div className="flex flex-col gap-12">
                    {articles.map((article) => (
                        <article key={article.slug} className="group relative flex flex-col items-start">

                            {/* Méta-données (Date & Catégorie) */}
                            <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-3">
                                <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span>•</span>
                                <time>{article.date}</time>
                                <span>•</span>
                                <span>{article.readingTime}</span>
                            </div>

                            {/* Titre avec effet au survol */}
                            <h2 className="text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-3">
                                <Link href={`/blog/${article.slug}`}>
                                    <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-50 dark:bg-slate-900/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                                    <span className="relative z-10">{article.title}</span>
                                </Link>
                            </h2>

                            {/* Description */}
                            <p className="relative z-10 text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                {article.description}
                            </p>

                            {/* Lien "Read article" discret */}
                            <div className="relative z-10 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                                Read article
                                <svg className="ml-1 h-3 w-3 stroke-current transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 12 12">
                                    <path d="M3.75 2.25L7.5 6L3.75 9.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </main>
    )
}