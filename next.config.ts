import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

// 1. Définition de ta configuration Next.js standard
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Tu pourras ajouter tes autres options ici (images, domaines, etc.)
};

// 2. Initialisation du plugin PWA
const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Désactivé en dev pour éviter les conflits
  register: true,
  // skipWaiting: true,
});

// 3. Exportation de la configuration combinée (CRUCIAL pour éviter le crash Vercel)
export default withPWA(nextConfig);