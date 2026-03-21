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
  title: "Dieudonné Houndagnon | Développeur Front-End",
  description: "Portfolio premium présentant mes projets et mon expertise en développement web moderne.",
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