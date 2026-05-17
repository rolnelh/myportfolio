import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

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
  title: " Dieudonné Houndagnon | Full-Stack Developer & UI/UX Designer ",
  description: "Premium Next.js, React, and Laravel developer crafting high-performance digital solutions worldwide. Specializing in high-converting landing pages, website redesigns, and custom SaaS platforms.",
  manifest: "/site.webmanifest",
  keywords: [

    "High-converting landing page",
    "Création landing page freelance",
    "Website redesign specialist",
    "Refonte de site internet",
    "Refonte de site web premium",
    "UI/UX modern website redesign",

    "Remote Full-Stack Developer",
    "Freelance Next.js developer",
    "Frontend developer",
    "React developer freelance",
    "Remote Web Developer",
    "Premium UI/UX Designer",

    "Développeur freelance ComeUp",
    "Freelance Laravel developer",
    "Développeur web freelance",
    "Full-stack Web Developer",

    "Next.js 15",
    "HTML5 & CSS3 expert",
    "Responsive web design",
    "Core web vitals optimization",
    "Next.js 15",
    "Next.js 15",
    "Tailwind CSS specialist",
    "Framer Motion animations",
    "Web performance optimization",
    "Shadcn UI developer",

    "Développeur web Cotonou",
    "Développeur web Frontend",
    "Développeur web Bénin"
  ],

  openGraph: {
    title: "Full-Stack Developer & UI/UX Designer | Dieudonné",
    description: "Crafting fast landing pages, premium website redesigns, and high-performance digital solutions with Next.js and Laravel worldwide.",
    url: 'https://dieudonne-dev.vercel.app/',
    siteName: 'Dieudonné Houndagnon | Portfolio',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dieudonné Houndagnon - Remote Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Full-Stack Developer & UI/UX Designer",
    description: "High-converting landing pages and premium website redesigns optimized for extreme speed and SEO.",
    images: ['/images/og-image.webp'],
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
            <main className="flex-1 overflow-y-auto p-2 md:p-4 lg:p-4">
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
              "url": "https://dieudonne-dev.vercel.app/",
              "image": "https://dieudonne-dev.vercel.app/images/profil.png",
              "jobTitle": "Freelance Full-Stack Developer & UI/UX Designer", 
              "description": "Remote web developer specializing in premium landing pages, website redesigns, Next.js, and Laravel.",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "EIG-Bénin"
              },
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
                "React.js",
                "Laravel",
                "Tailwind CSS",
                "Framer Motion",
                "UI/UX Design",
                "Website Redesign",
                "Landing Page Optimization",
                "TypeScript",
                "Web Performance Optimization"
              ],
              "offers": { 
                "@type": "Offer",
                "description": "Premium Web Development, Website Redesign, and High-Converting Landing Pages",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </body>
    </html>
  );
}