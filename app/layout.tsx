import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dieudonné Houndagnon | Développeur Web & Mobile (Next.js • React • Expo)",
  description: "Développeur full-stack spécialisé dans la création d'interfaces premium et performantes. Je conçois des solutions numériques complètes, du web responsive aux applications mobiles natives, avec une attention particulière au clean code et à l'expérience utilisateur.",

  verification: {
    google: "_M81974KQb_dBv3rXZBgunEoqTN5dL7bHQHXkLisgRQ", 
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
            <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-16">
              <div className="max-w-7xl mx-auto">
                {children}
                <Analytics />

              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}