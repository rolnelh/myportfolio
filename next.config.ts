import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Reste désactivé en dev
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  /* Tes options de configuration d'origine ici, sans la clé expérimentale */
};

export default withPWA(nextConfig);