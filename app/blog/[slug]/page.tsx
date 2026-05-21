import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
    params: Promise<{ slug: string }>
}


const articlesContent: Record<string, {
    title: { fr: string; en: string };
    description: { fr: string; en: string };
    date: { fr: string; en: string };
    backText: { fr: string; en: string };
    notFound: { title: { fr: string; en: string }; desc: { fr: string; en: string } };
}> = {
    "how-to-optimize-nextjs-15-vercel": {
        title: {
            en: "How to Deploy and Optimize Next.js 15 Applications on Vercel for Extreme Speed",
            fr: "Comment déployer et optimiser les applications Next.js 15 sur Vercel pour une vitesse extrême"
        },
        description: {
            en: "Learn the exact strategies to configure Next.js 15 and Vercel for maximum performance and perfect Core Web Vitals.",
            fr: "Découvrez les stratégies exactes pour configurer Next.js 15 et Vercel pour un niveau de performance maximal."
        },
        date: { en: "Published on May 20, 2026", fr: "Publié le 20 mai 2026" },
        backText: { en: "Back to Portfolio", fr: "Retour au Portfolio" },
        notFound: { title: { fr: "", en: "" }, desc: { fr: "", en: "" } }
    },
    "why-minimalist-ui-converts-b2b-startups": {
        title: {
            en: "Why Minimalist UI is the Ultimate Conversion Lever for B2B Startups",
            fr: "Pourquoi le Minimalisme est le Meilleur Levier de Conversion pour les Startups B2B"
        },
        description: {
            en: "Discover how a premium, minimalist user interface eliminates noise, boosts web speed, and directly multiplies user conversions.",
            fr: "Découvrez comment une interface utilisateur minimaliste et premium élimine le bruit, booste la vitesse et multiplie les conversions."
        },
        date: { en: "Published on May 20, 2026", fr: "Publié le 20 mai 2026" },
        backText: { en: "Back to Portfolio", fr: "Retour au Portfolio" },
        notFound: { title: { fr: "", en: "" }, desc: { fr: "", en: "" } }
    }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = articlesContent[slug]

    if (article) {
        return {
            title: `${article.title.en} | Dieudonné Houndagnon`,
            description: article.description.en,
        }
    }

    return {
        title: "Article Not Found | Dieudonné Houndagnon",
    }
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params

    const lang: string = "en";
    const isFr = lang === "fr";

    // ------------------------------------------
    // ARTICLE 1 : Next.js 15 & Vercel
    // ------------------------------------------
    if (slug === "how-to-optimize-nextjs-15-vercel") {
        return (
            <main className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
                <Link href="/#blog" className="mb-8 md:mb-0 md:absolute md:top-16 md:left-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 tracking-tight group">
                    <svg className="h-3 w-3 stroke-current transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 9.75L4 6L7.75 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {isFr ? "Retour au Portfolio" : "Back to Portfolio"}
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                        {isFr ? articlesContent[slug].title.fr : articlesContent[slug].title.en}
                    </h1>
                    <p className="text-slate-400 text-sm mb-8">{isFr ? "Publié le 20 mai 2026" : "Published on May 20, 2026"}</p>

                    {isFr ? (
                        <>
                            <p className="text-base leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300">
                                Dans le développement web moderne, la vitesse n&apos;est plus seulement une métrique technique — c&apos;est un indicateur clé de performance (KPI) business. Des études montrent systématiquement qu&apos;un retard d&apos;une seconde dans le chargement d&apos;une page peut faire chuter les conversions de 20%. Pour les startups et les marques numériques premium, la performance, c&apos;est littéralement de l&apos;argent.
                            </p>
                            <p className="text-base leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                                En construisant avec Next.js 15, vous utilisez déjà l&apos;un des frameworks frontend les plus puissants disponibles. Mais l&apos;associer à Vercel est lourd de sens. Voici une analyse technique étape par étape de la configuration et de l&apos;optimisation pour atteindre des scores parfaits sur Google Core Web Vitals.
                            </p>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}

                    <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
                        {isFr ? "1. Optimisation intelligente des assets avec des formats modernes" : "1. Smart Asset Optimization with Modern Formats"}
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {isFr ? (
                            <>Les images représentent souvent la majeure partie du poids d&apos;une page. Next.js fournit le composant natif <code className="text-zinc-900 dark:text-zinc-100 bg-slate-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">&lt;Image /&gt;</code> pour gérer cela automatiquement.</>
                        ) : (
                            <>Images often make up the bulk of a web page&apos;s weight. Leaving them unoptimized is the fastest way to ruin your CLS and LCP scores. Next.js provides the native <code className="text-zinc-900 dark:text-zinc-100 bg-slate-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">&lt;Image /&gt;</code> component.</>
                        )}
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
                        {isFr ? "2. Exploiter le réseau Edge mondial de Vercel" : "2. Leveraging Vercel’s Global Edge Network"}
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300">
                        {isFr ? "Déployer sur Vercel signifie que le code de votre application utilise un réseau Edge qui met en cache et sert vos fichiers statiques à partir des serveurs physiquement les plus proches de vos utilisateurs (Cotonou, Paris, New York)." : "Deploying on Vercel means your application code isn't sitting in a single data center. Vercel utilizes an Edge Network that caches and serves your static assets from servers physically closest to your users."}
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        {isFr ? "3. Optimisation des Core Web Vitals" : "3. Optimizing Core Web Vitals"}
                    </h2>
                    <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-slate-700 dark:text-slate-300">
                        {isFr ? (
                            <>
                                <li><strong>LCP (Largest Contentful Paint) :</strong> Mesure la vitesse de chargement du contenu principal.</li>
                                <li><strong>INP (Interaction to Next Paint) :</strong> Mesure la réactivité de la page lors des clics.</li>
                                <li><strong>CLS (Cumulative Layout Shift) :</strong> Évite les changements de mise en page inattendus.</li>
                            </>
                        ) : (
                            <>
                                <li><strong>LCP (Largest Contentful Paint):</strong> Measure how fast the main content loads.</li>
                                <li><strong>INP (Interaction to Next Paint):</strong> Measures page responsiveness.</li>
                                <li><strong>CLS (Cumulative Layout Shift):</strong> Avoid injecting dynamic content without reserving space.</li>
                            </>
                        )}
                    </ul>
                </article>
            </main>
        )
    }

    // ------------------------------------------
    // ARTICLE 2 : Premium Minimalist UI
    // ------------------------------------------
    if (slug === "why-minimalist-ui-converts-b2b-startups") {
        return (
            <main className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
                {/* Bouton Retour - Optimisé pour mobile (Devient un bloc au-dessus sur mobile pour ne pas écraser le titre) */}
                <Link
                    href="/#blog"
                    className="mb-8 md:mb-0 md:absolute md:top-16 md:left-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 tracking-tight group"
                >
                    <svg className="h-3 w-3 stroke-current transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 9.75L4 6L7.75 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {isFr ? "Retour au Portfolio" : "Back to Portfolio"}
                </Link>

                {/* Balise Article - Ajout de break-words pour casser les mots longs sur mobile (ex: B2B, micro-interactions) */}
                <article className="prose dark:prose-invert max-w-none break-words overflow-hidden">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                        {isFr ? articlesContent[slug].title.fr : articlesContent[slug].title.en}
                    </h1>
                    <p className="text-slate-400 text-sm mb-8">{isFr ? "Publié le 20 mai 2026" : "Published on May 20, 2026"}</p>

                    {isFr ? (
                        <>
                            <p className="text-base leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300">
                                Dans le développement de logiciels modernes, il existe une idée reçue dangereuse selon laquelle pour paraître &quot;innovante&quot;, une plateforme doit regorger d&apos;éléments 3D lourds, de dégradés complexes et d&apos;animations agressives.
                            </p>
                            <p className="text-base leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                                Mais pour les startups B2B et les marques premium, la surcharge visuelle est un tueur silencieux. Elle détruit la clarté cognitive et fait grimper le taux de rebond. Le minimalisme n&apos;est pas un simple choix esthétique ; c&apos;est un multiplicateur de performances commerciales.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-base leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300">
                                In modern software development, there is a dangerous misconception that to look &quot;innovative,&quot; a platform must be filled with heavy 3D elements, complex gradients, and aggressive scroll animations.
                            </p>
                            <p className="text-base leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                                But for B2B startups and premium brands, clutter is a silent killer. It destroys cognitive clarity, drives up bounce rates, and tanks conversion scores. Minimalism isn&apos;t just an aesthetic choice; it’s a direct business multiplier.
                            </p>
                        </>
                    )}

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-white">
                        {isFr ? "1. La règle des 3 secondes et la friction cognitive" : "1. The 3-Second Rule & Cognitive Friction"}
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                        {isFr ? "Lorsqu&apos;un décideur atterrit sur votre site, il fait un choix inconscient en moins de trois secondes : Puis-je faire confiance à cet outil ? Chaque icône inutile augmente la friction." : "When a decision-maker lands on your web product, they make a subconscious choice in under three seconds: Can I trust this tool, and do I understand what it does? Every unnecessary icon or decorative shape increases cognitive friction."}
                    </p>

                    <blockquote className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 italic text-slate-600 dark:text-slate-400 my-6 text-sm sm:text-base">
                        <strong>{isFr ? "La règle minimaliste :" : "The Minimalist Rule:"}</strong> {isFr ? "Si un élément n&apos;aide pas activement l&apos;utilisateur à accomplir une tâche, il ne devrait pas exister." : "If an element doesn&apos;t actively help the user complete a task or understand a value proposition, it shouldn&apos;t exist."}
                    </blockquote>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        {isFr ? "2. Les trois piliers du design minimaliste premium" : "2. The Three Pillars of Premium Minimalist Design"}
                    </h2>

                    {/* Liste à puces : Nettoyage du padding mobile pour éviter l'overflow */}
                    <ul className="list-disc pl-4 sm:pl-6 mb-6 space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                        {isFr ? (
                            <>
                                <li><strong>Typographie dominante :</strong> Elle incarne la voix de votre interface (ex: Syne, Inter). Un choix fort donne une autorité immédiate.</li>
                                <li><strong>Maîtrise de l&apos;espace négatif :</strong> Le &quot;White Space&quot; n&apos;est pas vide, c&apos;est une fonctionnalité qui laisse respirer le produit.</li>
                                <li><strong>Micro-interactions subtiles :</strong> Un effet de survol millimétré ou une apparition fluide indique un travail d&apos;artisan d&apos;élite.</li>
                            </>
                        ) : (
                            <>
                                <li><strong>Dominant Typography:</strong> Typography is the voice of your interface. Using bold, structural typefaces establishes immediate authority.</li>
                                <li><strong>Mastering Negative Space:</strong> White space is a feature. It isolates key sections and lets the product breathe.</li>
                                <li><strong>Subtle Micro-interactions:</strong> A pixel-perfect interface relies on invisible details: a smooth hover effect or an elegant image reveal.</li>
                            </>
                        )}
                    </ul>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                        {isFr ? "3. Chaîne de performance : Interface épurée → Code propre → Conversion élevée" : "3. The Performance Chain: Clean UI → Clean Code → High Conversion"}
                    </h2>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                        {isFr ? "Une interface épurée signifie moins de scripts lourds, des Core Web Vitals parfaits (100/100) et un rendu instantané partout dans le monde, y compris sur les réseaux mobiles." : "There is a direct correlation between how clean an interface looks and how well it performs under the hood. Dropping heavy decorations means fewer scripts, perfect Core Web Vitals, and flawless rendering on any mobile network worldwide."}
                    </p>
                </article>
            </main>
        )
    }

    // ------------------------------------------
    // PAGE 404 : Article Non Trouvé
    // ------------------------------------------
    return (
        <main className="max-w-3xl mx-auto px-6 py-48 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {isFr ? "Article non trouvé" : "Article not found"}
            </h1>
            <p className="text-slate-500">
                {isFr ? "Les insights que vous recherchez n&apos;existent pas ou ont été déplacés." : "The insights you are looking for don&apos;t exist or have been moved."}
            </p>
        </main>
    )
}