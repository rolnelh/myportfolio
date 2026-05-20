import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
    params: Promise<{ slug: string }>
}

// ==========================================
// 1. LE SEO DYNAMIQUE (GOOGLE & LINKEDIN)
// ==========================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params

    if (slug === "how-to-optimize-nextjs-15-vercel") {
        return {
            title: "How to Deploy and Optimize Next.js 15 Apps on Vercel | Dieudonné Houndagnon",
            description: "Learn the exact strategies to configure Next.js 15 and Vercel for maximum performance and perfect Core Web Vitals.",
        }
    }

    if (slug === "why-minimalist-ui-converts-b2b-startups") {
        return {
            title: "Why Minimalist UI is the Ultimate Conversion Lever for B2B Startups | Dieudonné Houndagnon",
            description: "Discover how a premium, minimalist user interface eliminates noise, boosts web speed, and directly multiplies user conversions.",
        }
    }

    return {
        title: "Article Not Found | Dieudonné Houndagnon",
    }
}

// ==========================================
// 2. LE CONTENU COMPLET DE MES ARTICLES
// ==========================================
export default async function ArticlePage({ params }: Props) {
    const { slug } = await params

    // ------------------------------------------
    // ARTICLE 1 : Next.js 15 & Vercel
    // ------------------------------------------
    if (slug === "how-to-optimize-nextjs-15-vercel") {
        return (
            <main className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
                {/* Lien responsive : s'adapte proprement sur mobile pour éviter les chevauchements */}
                <Link href="/#blog" className="mb-8 md:mb-0 md:absolute md:top-16 md:left-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 tracking-tight group">
                    <svg className="h-3 w-3 stroke-current transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 9.75L4 6L7.75 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Portfolio
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                        How to Deploy and Optimize Next.js 15 Applications on Vercel for Extreme Speed
                    </h1>
                    <p className="text-slate-400 text-sm mb-8">Published on May 20, 2026</p>

                    <p className="text-base leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300">
                        In modern web development, speed is no longer just a technical metric—it is a core business KPI.
                        Studies consistently show that a 1-second delay in page load time can drop conversions by up to 20%.
                        For startups and premium digital brands, performance is literally money.
                    </p>

                    <p className="text-base leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                        When building with Next.js 15, you are already using one of the most powerful frontend frameworks available.
                        But combining it with Vercel is where the real magic happens. Here is a step-by-step technical breakdown
                        of how to configure, deploy, and optimize your Next.js 15 applications to achieve perfect scores on Google Core Web Vitals.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
                        1. Smart Asset Optimization with Modern Formats
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                        Images often make up the bulk of a web page&apos;s weight. Leaving them unoptimized is the fastest way to ruin
                        your Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) scores. Next.js provides the native{' '}
                        <code className="text-zinc-900 dark:text-zinc-100 bg-slate-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">&lt;Image /&gt;</code>{' '}
                        component, which handles optimization automatically.
                    </p>

                    <div className="my-6 w-full max-w-full overflow-hidden rounded-xl bg-slate-950 p-4 text-xs sm:text-sm text-slate-200 font-mono">
                        <div className="flex justify-between text-xs text-slate-500 mb-2 border-b border-slate-800 pb-2">
                            <span>TypeScript</span>
                        </div>
                        <pre className="overflow-x-auto whitespace-pre block w-full target-scroll">
                            {`import Image from 'next/image'

export default function ProfileHero() {
  return (
    <Image
      src="/images/profil.webp"
      width={1200}
      height={630}
      alt="Dieudonné Houndagnon - Frontend Engineer"
      priority
      className="rounded-xl"
    />
  )
}`}
                        </pre>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        2. Leveraging Vercel’s Global Edge Network
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300">
                        Deploying on Vercel means your application code isn&apos;t sitting in a single data center. Vercel utilizes an
                        Edge Network that caches and serves your static assets from servers physically closest to your users—whether
                        they are accessing your site from Cotonou, Paris, or New York.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        3. Optimizing Core Web Vitals
                    </h2>
                    <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-slate-700 dark:text-slate-300">
                        <li><strong>LCP (Largest Contentful Paint):</strong> Measure how fast the main content loads. Optimize this by adding the priority attribute to your main hero images.</li>
                        <li><strong>INP (Interaction to Next Paint):</strong> Measures page responsiveness. Keep your JavaScript bundles lean by using dynamic imports for heavy third-party libraries.</li>
                        <li><strong>CLS (Cumulative Layout Shift):</strong> Avoid injecting dynamic content above existing text without reserving space for it beforehand.</li>
                    </ul>
                </article>
            </main>
        )
    }


    if (slug === "why-minimalist-ui-converts-b2b-startups") {
        return (
            <main className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
                <Link href="/#blog" className="mb-8 md:mb-0 md:absolute md:top-16 md:left-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 tracking-tight group">
                    <svg className="h-3 w-3 stroke-current transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 9.75L4 6L7.75 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Portfolio
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                        Why Minimalist UI is the Ultimate Conversion Lever for B2B Startups
                    </h1>
                    <p className="text-slate-400 text-sm mb-8">Published on May 20, 2026</p>

                    <p className="text-base leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300">
                        In modern software development, there is a dangerous misconception that to look &quot;innovative,&quot; a platform must be filled with heavy 3D elements, complex gradients, and aggressive scroll animations.
                    </p>
                    <p className="text-base leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                        But for B2B startups and premium brands, clutter is a silent killer. It destroys cognitive clarity, drives up bounce rates, and tanks conversion scores. Minimalism isn&apos;t just an aesthetic choice; it’s a direct business multiplier.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
                        1. The 3-Second Rule & Cognitive Friction
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                        When a decision-maker lands on your web product, they make a subconscious choice in under three seconds: <em>Can I trust this tool, and do I understand what it does?</em> Every unnecessary icon or decorative shape increases cognitive friction.
                    </p>

                    <blockquote className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 italic text-slate-600 dark:text-slate-400 my-6">
                        <strong>The Minimalist Rule:</strong> If an element doesn&apos;t actively help the user complete a task or understand a value proposition, it shouldn&apos;t exist.
                    </blockquote>

                    <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        2. The Three Pillars of Premium Minimalist Design
                    </h2>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                        Achieving a high-end minimalist aesthetic isn’t about leaving your layout empty. It’s about mastering three strict design principles:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-3 text-slate-700 dark:text-slate-300">
                        <li><strong>Dominant Typography:</strong> Typography is the voice of your interface. Using bold, structural typefaces establishes immediate authority without needing heavy images.</li>
                        <li><strong>Mastering Negative Space:</strong> White space is a feature. It isolates key sections, groups related data naturally, and lets the product breathe. Premium feels spacious.</li>
                        <li><strong>Subtle Micro-interactions:</strong> A pixel-perfect interface relies on invisible details: a smooth hover effect on a card or an elegant image reveal that triggers seamlessly.</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        3. The Performance Chain: Clean UI → Clean Code → High Conversion
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300">
                        There is a direct correlation between how clean an interface looks and how well it performs under the hood. Dropping heavy decorations means fewer scripts, perfect Core Web Vitals, and flawless rendering on any mobile network worldwide.
                    </p>
                </article>
            </main>
        )
    }

    return (
        <main className="max-w-3xl mx-auto px-6 py-48 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Article not found</h1>
            <p className="text-slate-500">The insights you are looking for don&apos;t exist or have been moved.</p>
        </main>
    )
}