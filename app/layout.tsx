import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://dieudonne-dev.vercel.app/'),
  title: "Dieudonné Houndagnon | Frontend Engineer & UI/UX Specialist",
  description: "Premium Next.js, React, and modern UI/UX developer crafting high-performance digital solutions worldwide. Specializing in conversion-focused landing pages, website redesigns, and custom SaaS products.",
  manifest: "/site.webmanifest",
  keywords: [
    // 1. Intentions d'achat (Clients internationaux & locaux)
    "High-converting landing page",
    "Création landing page freelance",
    "Website redesign specialist",
    "Refonte de site internet",
    "Refonte de site web premium",
    "UI/UX modern website redesign",
    "Custom SaaS platform development",

    // 2. Ton profil / Métier (Cohérent avec ton titre)
    "Remote Frontend Engineer",
    "Freelance Next.js developer",
    "React developer freelance",
    "Remote Web Developer",
    "Premium UI/UX Designer",
    "Développeur web freelance",
    "Développeur freelance ComeUp",
    "Freelance Laravel developer",

    // 3. Stack Technique & Performance (Ce qui fait ta force)
    "Next.js 15",
    "HTML5 & CSS3 expert",
    "Responsive web design",
    "Core web vitals optimization",
    "Tailwind CSS specialist",
    "Shadcn UI developer",
    "Framer Motion animations",
    "Core web vitals optimization",
    "Web performance optimization",
    "Responsive web design",
    "Vercel deployment expert",
    "Hébergement Vercel freelance",
    "Next.js Vercel optimization",
    "Vercel serverless configuration",

    // 4. Ciblage Géographique Local
    "Développeur web Cotonou",
    "Développeur web Bénin",
    "Développeur frontend Bénin"
  ],

  openGraph: {
    // 1. Titre : Un titre clair et orienté "résultats" en anglais, universel.
    title: "Dieudonné Houndagnon | Frontend Engineer & UI/UX Specialist",

    // 2. Description : En anglais pour capter le marché mondial.
    description: "Building high-performance digital experiences and premium web interfaces. Specialized in Next.js, React, and modern UI/UX design. Let's build your next project together.",

    url: 'https://dieudonne-dev.vercel.app/',
    siteName: 'Dieudonné Houndagnon | Frontend Engineering',

    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dieudonné Houndagnon - Frontend Engineer Portfolio',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    // On garde la cohérence avec le titre OG pour renforcer l'identité
    title: "Dieudonné Houndagnon | Frontend Engineer & UI/UX Specialist",

    // Description courte, punchy et axée sur la valeur technique
    description: "Building high-performance digital experiences. Next.js, React & modern UI/UX design. Let's scale your web presence.",

    // Assure-toi que le chemin est correct
    images: ['https://dieudonne-dev.vercel.app/images/og-image.webp'],

    // Ajoute ton handle Twitter si tu en as un, c'est crucial pour le branding
    creator: '@Dsquare_15',
  },

  verification: {
    google: "_M81974KQb_dBv3rXZBgunEoqTN5dL7bHQHXkLisgRQ",
  },

  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },

  // manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dieudonné",
    startupImage: [
      {
        url: "/images/splash/icons8-developer.png",
        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${poppins.variable}`}>
      <body className="antialiased text-slate-900" style={{
        fontFamily: "'Syne', sans-serif",
      }}>

        <div className="flex h-screen">
          <div className="flex flex-col flex-1">
            <main className="flex-1 overflow-y-auto bg-black">
              <div className="max-w-7xl mx-auto">
                {children}
                <Analytics />
                <GoogleAnalytics gaId="G-KBCJF0W9HX" />
              </div>
            </main>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dieudonné Houndagnon",
              "url": "https://dieudonne-dev.vercel.app/",
              "image": "https://dieudonne-dev.vercel.app/images/profil.webp",
              "jobTitle": "Frontend Engineer & UI/UX Specialist",
              "description": "Remote frontend engineer specializing in premium web interfaces, high-performance website redesigns, and Next.js applications custom-built for global clients.",
              // 2. Ajout de ton parcours académique complet
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "EIG-Bénin"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Epitech"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Université d'Abomey-Calavi (FASEG-UAC)"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cotonou",
                "addressRegion": "Littoral",
                "addressCountry": "BJ"
              },
              "sameAs": [
                "https://www.linkedin.com/in/dieudonné-houndagnon-093387250",
                "https://github.com/rolnelh",
                "https://comeup.com/fr/@dieudonne-dev"
              ],

              "knowsAbout": [
                "Next.js",
                "React",
                "React Native",
                "Vercel Deployment & Optimization",
                "Tailwind CSS",
                "Framer Motion",
                "UI/UX Design",
                "TypeScript",
                "Website Redesign",
                "Web Performance Optimization",
                "Laravel"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Premium Frontend Engineering, Modern Website Redesign, and Conversion-Focused Landing Pages",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </body>
    </html>
  );
}