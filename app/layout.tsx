import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap", 
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Next.js & React Developer | Dieudonné Houndagnon | Premium UI/UX",
  description: "Explore my portfolio: premium interfaces and high-performance digital solutions built with Next.js, React, and Tailwind CSS.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Front-end Developer", "Benin"],

  openGraph: {
    title: "Next.js & React Developer | Dieudonné Houndagnon | Premium UI/UX",
    description: "Explore my portfolio: premium interfaces and high-performance digital solutions.",
    url: 'https://myportfolio-eta-eosin.vercel.app',
    siteName: 'Dieudonné Portfolio',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Aperçu du portfolio de Dieudonné',
      },
    ],
    locale: 'fr_BJ',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Next.js & React Developer | Dieudonné Houndagnon | Premium UI/UX",
    description: "Crafting premium web and mobile solutions with a focus on high performance and exceptional UI/UX.",
    images: ['/images/og-image.png'],
  },

  verification: {
    google: "_M81974KQb_dBv3rXZBgunEoqTN5dL7bHQHXkLisgRQ",
  },

  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },

  manifest: "/site.webmanifest",

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
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased text-slate-900" style={{
        fontFamily: "'Syne', sans-serif",
      }}>

        <div className="flex h-screen bg-[#F8FAFC]">
          <div className="flex flex-col flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-2 md:p-10 lg:p-16">
              <div className="max-w-7xl mx-auto">
                {children}
                <Analytics />
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
              "url": "https://myportfolio-eta-eosin.vercel.app",
              "image": "https://myportfolio-eta-eosin.vercel.app/images/profil.png",
              "jobTitle": "Full-Stack Web & Mobile Developer",
              "alumniOf": "EIG-Bénin",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cotonou", 
                "addressCountry": "BJ"
              },
              "sameAs": [
                "https://www.linkedin.com/in/dieudonné-houndagnon-093387250",
                "https://github.com/rolnelh",
              ],
              "knowsAbout": [
                "Next.js", "React.js", "React Native", "Tailwind CSS",
                "Framer Motion", "UI/UX Design", "TypeScript", "Expo"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}