"use client";

import { useState } from "react";

type Profile = {
    id: string;
    num: string;
    title: string;
    icon: JSX.Element;
};

/* ---------- Icônes "clay" 3D en SVG (dégradés + ombres, zéro dépendance) ---------- */

function IconMonitor() {
    return (
        <svg viewBox="0 0 120 120" width="76" height="76">
            <defs>
                <linearGradient id="mScreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3a3a38" />
                    <stop offset="100%" stopColor="#151513" />
                </linearGradient>
                <linearGradient id="mBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#dedcd4" />
                </linearGradient>
            </defs>
            <ellipse cx="60" cy="104" rx="26" ry="4" fill="#000" opacity="0.08" />
            <rect x="24" y="20" width="72" height="52" rx="8" fill="url(#mBody)" stroke="#c9c6bc" strokeWidth="1.5" />
            <rect x="31" y="27" width="58" height="38" rx="3" fill="url(#mScreen)" />
            <text x="38" y="42" fontFamily="monospace" fontSize="10" fill="#C6F135">{"</>"}</text>
            <rect x="38" y="49" width="34" height="3" rx="1.5" fill="#8f8f8f" />
            <rect x="38" y="55" width="26" height="3" rx="1.5" fill="#8f8f8f" />
            <rect x="55" y="72" width="10" height="14" fill="url(#mBody)" />
            <rect x="42" y="86" width="36" height="6" rx="3" fill="url(#mBody)" stroke="#c9c6bc" strokeWidth="1" />
        </svg>
    );
}

function IconRocket() {
    return (
        <svg viewBox="0 0 120 120" width="76" height="76">
            <defs>
                <linearGradient id="rBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#d9d7cd" />
                </linearGradient>
                <linearGradient id="rTip" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#DFFF6B" />
                    <stop offset="100%" stopColor="#8FB300" />
                </linearGradient>
            </defs>
            <ellipse cx="60" cy="106" rx="24" ry="4" fill="#000" opacity="0.08" />
            <path d="M60 18 C74 30 78 46 76 62 L44 62 C42 46 46 30 60 18 Z" fill="url(#rTip)" />
            <path d="M60 30 C70 40 73 52 72 62 L48 62 C47 52 50 40 60 30 Z" fill="url(#rBody)" />
            <circle cx="60" cy="48" r="7" fill="#2b2b28" />
            <circle cx="60" cy="48" r="7" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <path d="M48 55 L34 76 L48 70 Z" fill="#2b2b28" />
            <path d="M72 55 L86 76 L72 70 Z" fill="#2b2b28" />
            <path d="M50 62 L70 62 L64 78 L56 78 Z" fill="url(#rTip)" />
            <ellipse cx="60" cy="90" rx="16" ry="7" fill="#fff" opacity="0.9" />
            <ellipse cx="60" cy="96" rx="22" ry="7" fill="#fff" opacity="0.6" />
        </svg>
    );
}

function IconBuilding() {
    return (
        <svg viewBox="0 0 120 120" width="76" height="76">
            <defs>
                <linearGradient id="bFace" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e6e4db" />
                </linearGradient>
            </defs>
            <ellipse cx="58" cy="104" rx="34" ry="4" fill="#000" opacity="0.08" />
            <rect x="30" y="26" width="56" height="76" rx="3" fill="url(#bFace)" stroke="#cfccc1" strokeWidth="1.5" />
            <rect x="38" y="34" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="56" y="34" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="38" y="52" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="56" y="52" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="38" y="70" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="56" y="70" width="12" height="12" rx="2" fill="#2b2b28" />
            <rect x="46" y="90" width="16" height="12" rx="2" fill="#2b2b28" />
            <circle cx="92" cy="70" r="7" fill="#e6e4db" stroke="#cfccc1" strokeWidth="1.5" />
            <rect x="90" y="76" width="4" height="26" fill="#cfccc1" />
        </svg>
    );
}

function IconMagnifier() {
    return (
        <svg viewBox="0 0 120 120" width="76" height="76">
            <defs>
                <radialGradient id="glass" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#dcdad0" />
                </radialGradient>
            </defs>
            <ellipse cx="55" cy="100" rx="26" ry="4" fill="#000" opacity="0.08" />
            <circle cx="52" cy="52" r="26" fill="url(#glass)" stroke="#c9c6bc" strokeWidth="2" />
            <circle cx="52" cy="52" r="19" fill="#ffffff" stroke="#b9b6ab" strokeWidth="1.5" />
            <rect x="72" y="72" width="34" height="13" rx="6.5" transform="rotate(45 72 72)" fill="url(#glass)" stroke="#c9c6bc" strokeWidth="1.5" />
            <rect x="94" y="94" width="10" height="10" rx="3" transform="rotate(45 94 94)" fill="#C6F135" />
        </svg>
    );
}

function IconBulb() {
    return (
        <svg viewBox="0 0 120 120" width="76" height="76">
            <defs>
                <radialGradient id="bulbGlass" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e2e0d6" />
                </radialGradient>
            </defs>
            <ellipse cx="58" cy="104" rx="20" ry="4" fill="#000" opacity="0.08" />
            <g stroke="#cfccc1" strokeWidth="3" strokeLinecap="round" opacity="0.9">
                <line x1="58" y1="14" x2="58" y2="24" />
                <line x1="30" y1="26" x2="37" y2="33" />
                <line x1="86" y1="26" x2="79" y2="33" />
                <line x1="20" y1="52" x2="30" y2="52" />
                <line x1="96" y1="52" x2="86" y2="52" />
            </g>
            <circle cx="58" cy="56" r="28" fill="url(#bulbGlass)" stroke="#cfccc1" strokeWidth="1.5" />
            <path d="M48 78 h20 v6 a10 10 0 0 1 -20 0 Z" fill="#8a887e" />
            <rect x="48" y="86" width="20" height="4" rx="2" fill="#6f6d64" />
            <rect x="48" y="92" width="20" height="4" rx="2" fill="#6f6d64" />
            <path d="M50 62 C50 50 58 50 58 42 C58 50 66 50 66 62" fill="none" stroke="#8FB300" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

const PROFILES: Profile[] = [
    { id: "solo", num: "01", title: "Solo Builder", icon: <IconMonitor /> },
    { id: "agency", num: "02", title: "No-Code Agency", icon: <IconBuilding /> },
    { id: "startup", num: "03", title: "Pre-launch Startup", icon: <IconRocket /> },
    { id: "qa", num: "04", title: "QA Consultant", icon: <IconMagnifier /> },
    { id: "founder", num: "05", title: "Non-technical Founder", icon: <IconBulb /> },
];

// ordre d'affichage voulu pour la rangée du haut (comme la maquette)
const TOP_ORDER = ["solo", "startup", "agency"];
const BOTTOM_ORDER = ["qa", "founder"];

export default function ForWho() {
    const [activeId, setActiveId] = useState<string>("startup");

    const byId = (id: string) => PROFILES.find((p) => p.id === id)!;

    const renderCard = (id: string) => {
        const p = byId(id);
        const active = p.id === activeId;
        return (
            <button
                key={p.id}
                type="button"
                className={`fw-card ${active ? "fw-active" : ""}`}
                onClick={() => setActiveId(p.id)}
                onMouseEnter={() => setActiveId(p.id)}
            >
                <span className="fw-num">{p.num}</span>
                <div className="fw-icon">{p.icon}</div>
                <h3 className="fw-title">{p.title}</h3>
            </button>
        );
    };

    return (
        <section className="fw-section">
            <h2 className="fw-headline">Built for builders who ship.</h2>

            <div className="fw-row fw-row-top">{TOP_ORDER.map(renderCard)}</div>
            <div className="fw-row fw-row-bottom">{BOTTOM_ORDER.map(renderCard)}</div>

            <style jsx>{`
        .fw-section {
          --ink: #14140f;
          --paper: #ffffff;
          --bg: #ffffff;
          --lime: #c6f135;
          --lime-deep: #8fb300;
          --muted: #8a897f;
          --ring: #e7e5dc;

          background: var(--bg);
          color: var(--ink);
          padding: 88px 24px 100px;
          font-family: inherit;
        }

        .fw-headline {
          text-align: center;
          font-size: clamp(26px, 4.5vw, 38px);
          font-weight: 500;
          letter-spacing: -0.01em;
          margin: 0 0 56px;
        }

        .fw-row {
          display: grid;
          gap: 22px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .fw-row-top {
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 22px;
        }
        .fw-row-bottom {
          grid-template-columns: 1fr repeat(2, minmax(0, calc((100% - 44px) / 3))) 1fr;
        }
        .fw-row-bottom :global(.fw-card:nth-child(1)) {
          grid-column: 2;
        }
        .fw-row-bottom :global(.fw-card:nth-child(2)) {
          grid-column: 3;
        }

        .fw-card {
          all: unset;
          box-sizing: border-box;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          background: var(--paper);
          border: 1.5px solid var(--ring);
          border-radius: 20px;
          padding: 40px 20px 32px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .fw-card:focus-visible {
          outline: 2px solid var(--lime-deep);
          outline-offset: 2px;
        }

        .fw-card.fw-active {
          border-color: var(--lime);
          box-shadow: 0 18px 36px -20px rgba(20, 20, 15, 0.22);
        }

        .fw-num {
          position: absolute;
          top: -14px;
          left: 22px;
          background: var(--lime);
          color: var(--ink);
          font-weight: 800;
          font-size: 13px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px -4px rgba(20, 20, 15, 0.3);
        }

        .fw-icon {
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fw-title {
          font-size: 17px;
          font-weight: 800;
          margin: 0;
          color: var(--ink);
          transition: color 0.25s ease;
        }

        .fw-card.fw-active .fw-title {
          color: var(--lime-deep);
        }

        @media (max-width: 860px) {
          .fw-row-top,
          .fw-row-bottom {
            grid-template-columns: 1fr !important;
          }
          .fw-row-bottom :global(.fw-card:nth-child(1)),
          .fw-row-bottom :global(.fw-card:nth-child(2)) {
            grid-column: auto !important;
          }
          .fw-row {
            gap: 34px 0;
          }
          .fw-row-top {
            margin-bottom: 0;
          }
          .fw-row-bottom {
            margin-top: 34px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fw-card {
            transition: none;
          }
        }
      `}</style>
        </section>
    );
}