import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

type Props = {
    params: Promise<{ slug: string }>
}

// 1. Le SEO dynamique pour Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params

    if (slug === "how-to-optimize-nextjs-15-vercel") {
        return {
            title: "How to Deploy and Optimize Next.js 15 Apps on Vercel | Dieudonné Houndagnon",
            description: "Learn the exact strategies to configure Next.js 15 and Vercel for maximum performance and perfect Core Web Vitals.",
        }
    }

    return {
        title: "Article Not Found | Dieudonné Houndagnon",
    }
}

// 2. Le contenu de ton article
export default async function ArticlePage({ params }: Props) {
    const { slug } = await params

    // Si l'URL correspond à notre premier article
    if (slug === "how-to-optimize-nextjs-15-vercel") {
        return (
            <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">

                <Link href="/#blog" className="absolute top-16 left-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 tracking-tight group">

                    {/* OPTION A : Avec un SVG simple */}
                    <svg className="h-3 w-3 stroke-current transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 9.75L4 6L7.75 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    Back to Portfolio
                </Link>

                <article className="prose dark:prose-invert max-w-none">

                    {/* Titre de l'article */}
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                        How to Deploy and Optimize Next.js 15 Applications on Vercel for Extreme Speed
                    </h1>

                    <p className="text-slate-400 text-sm mb-8">Published on May 20, 2026</p>

                    {/* Corps du texte (On utilise text-slate-700 pour un meilleur contraste) */}
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

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
                        1. Smart Asset Optimization with Modern Formats
                    </h2>
                    {/* Correction de l'espace ici autour de <Image /> */}
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                        Images often make up the bulk of a web page's weight. Leaving them unoptimized is the fastest way to ruin
                        your Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) scores. Next.js provides the native{' '}
                        <code className="text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono text-sm">&lt;Image /&gt;</code>{' '}
                        component, which handles optimization automatically.
                    </p>

                    {/* Exemple de code intégré proprement */}
                    <div className="my-6 overflow-hidden rounded-xl bg-slate-950 p-4 text-sm text-slate-200 font-mono">
                        <div className="flex justify-between text-xs text-slate-500 mb-2 border-b border-slate-800 pb-2">
                            <span>TypeScript</span>
                        </div>
                        <pre className="overflow-x-auto">
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

                    <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-950 dark:text-white">
                        2. Leveraging Vercel’s Global Edge Network
                    </h2>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                        Deploying on Vercel means your application code isn't sitting in a single data center. Vercel utilizes an
                        Edge Network that caches and serves your static assets from servers physically closest to your users—whether
                        they are accessing your site from Cotonou, Paris, or New York.
                    </p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                        To maximize this, make sure you are utilizing Next.js 15’s Server Components (RSC) and Partial Prerendering (PPR).
                        By rendering static shells instantly from the Edge and streaming dynamic content as it resolves, your users experience near-zero latency.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-950 dark:text-white">
                        3. Optimizing Core Web Vitals
                    </h2>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                        To hit that coveted 100/100 Lighthouse score, you need to focus on three main metrics:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-300">
                        <li><strong>LCP (Largest Contentful Paint):</strong> Measure how fast the main content loads. Optimize this by adding the priority attribute to your main hero images.</li>
                        <li><strong>INP (Interaction to Next Paint):</strong> Measures page responsiveness. Keep your JavaScript bundles lean by using dynamic imports for heavy third-party libraries.</li>
                        <li><strong>CLS (Cumulative Layout Shift):</strong> Avoid injecting dynamic content above existing text without reserving space for it beforehand.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-950 dark:text-white">
                        Conclusion: Ready to Scale
                    </h2>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                        Deploying a website is easy; deploying a high-converting, blazing-fast digital infrastructure requires precision.
                        By combining Next.js 15's architectural patterns with Vercel's deployment optimizations, you create websites that look
                        premium, rank high on Google, and convert visitors into loyal customers.
                    </p>

                </article>
            </main>
        )
    }

    // Si l'URL n'existe pas
    return (
        <main className="max-w-3xl mx-auto px-6 py-48 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Article not found</h1>
            <p className="text-slate-500">The insights you are looking for doesn't exist or has been moved.</p>
        </main>
    )
}