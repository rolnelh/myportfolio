"use client";

import { useEffect, useRef, useState } from "react";

type Tool = {
    label: string;
    mark: string;
    color: string;
    bg: string;
};

const TOOLS: Tool[] = [
    { label: "Bubble", mark: "B", color: "#2E6BE6", bg: "#EAF1FF" },
    { label: "Webflow", mark: "W", color: "#1C6DEB", bg: "#E9F1FF" },
    { label: "Framer", mark: "F", color: "#0A0A0A", bg: "#EFEFEF" },
    { label: "Glide", mark: "G", color: "#7C4DFF", bg: "#F1ECFF" },
    { label: "Softr", mark: "S", color: "#FF5C5C", bg: "#FFECEC" },
    { label: "Claude AI", mark: "C", color: "#D97757", bg: "#FBEFE9" },
    { label: "Cursor", mark: "↗", color: "#111111", bg: "#EFEFEF" },
    { label: "Lovable", mark: "L", color: "#FF4785", bg: "#FFE9F1" },
    { label: "Bolt", mark: "⚡", color: "#F5A623", bg: "#FFF4E0" },
];

/**
 * WorksWith — section "Fonctionne avec vos outils"
 * Cercle en pointillés avec les logos partenaires en orbite
 * autour d'une "scan card" (URL bar + check), en écho au hero.
 */
export default function With() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [radius, setRadius] = useState(0);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const update = () => {
            const size = el.getBoundingClientRect().width;
            setRadius(size * 0.42);
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <section className="ww-section">
            <div className="ww-eyebrow">Intégrations</div>
            <h2 className="ww-headline">
                Fonctionne avec <em>vos outils</em>,
                <br />
                pas contre eux
            </h2>
            <p className="ww-sub">
                Connectez votre stack en un clic. Vibe and Go teste vos apps là où
                vous les construisez déjà.
            </p>

            <div className="ww-orbit-wrap" ref={wrapRef}>
                <div className="ww-orbit-ring" />
                <div className="ww-orbit-ring ww-inner" />

                <div className="ww-hub">
                    <div className="ww-hub-urlbar">
                        <span className="ww-lock">🔒</span>
                        <span>my-app.io</span>
                    </div>
                    <div className="ww-hub-scan">
                        <span className="ww-ring" />
                        <span className="ww-ring ww-d2" />
                        <span className="ww-check">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                                <path
                                    d="M5 12.5 L10 17 L19 7"
                                    stroke="#14140F"
                                    strokeWidth="2.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="ww-hub-tag">Testé en direct</div>
                </div>

                {radius > 0 &&
                    TOOLS.map((tool, i) => {
                        const angle = (i / TOOLS.length) * 2 * Math.PI - Math.PI / 2;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        return (
                            <div
                                key={tool.label}
                                className="ww-node"
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                            >
                                <div
                                    className="ww-node-inner"
                                    style={{ color: tool.color, background: tool.bg }}
                                >
                                    {tool.mark}
                                </div>
                                <div className="ww-node-label">{tool.label}</div>
                            </div>
                        );
                    })}
            </div>

            <div className="ww-more-pill">
                <span className="ww-plus">+</span> Et bien plus encore
            </div>

            <style jsx>{`
        .ww-section {
          --ink: #14140f;
          --paper: #f3f1ec;
          --paper-2: #eae7df;
          --lime: #c6f135;
          --lime-deep: #8fb300;
          --white: #ffffff;
          --muted: #8a897f;
          --ring: #d8d5ca;

          position: relative;
          background: var(--paper);
          color: var(--ink);
          padding: 88px 24px 96px;
          overflow: hidden;
          font-family: inherit;
        }

        .ww-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px 300px at 50% -10%,
            rgba(198, 241, 53, 0.16),
            transparent 70%
          );
          pointer-events: none;
        }

        .ww-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 14px;
        }
        .ww-eyebrow::before,
        .ww-eyebrow::after {
          content: "";
          width: 22px;
          height: 1px;
          background: var(--ring);
        }

        .ww-headline {
          text-align: center;
          font-size: clamp(28px, 5vw, 42px);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .ww-headline em {
          font-style: normal;
          color: var(--lime-deep);
          position: relative;
          white-space: nowrap;
        }
        .ww-headline em::after {
          content: "";
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: 2px;
          height: 0.34em;
          background: var(--lime);
          z-index: -1;
          border-radius: 3px;
        }

        .ww-sub {
          text-align: center;
          max-width: 480px;
          margin: 0 auto 64px;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.6;
        }

        .ww-orbit-wrap {
          position: relative;
          width: min(560px, 100%);
          aspect-ratio: 1 / 1;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ww-orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px dashed var(--ring);
          animation: ww-spin 90s linear infinite;
        }

        .ww-orbit-ring.ww-inner {
          inset: 14%;
          border-color: rgba(143, 179, 0, 0.35);
          animation-duration: 70s;
          animation-direction: reverse;
        }

        @keyframes ww-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .ww-hub {
          position: relative;
          z-index: 3;
          width: 158px;
          height: 158px;
          border-radius: 50%;
          background: var(--white);
          border: 1px solid var(--paper-2);
          box-shadow: 0 12px 30px -8px rgba(20, 20, 15, 0.16),
            0 0 0 10px var(--paper);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          padding: 0 14px;
        }

        .ww-hub-urlbar {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--paper);
          border: 1px solid var(--ring);
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 10.5px;
          font-weight: 600;
          color: var(--ink);
          max-width: 100%;
        }
        .ww-hub-urlbar .ww-lock {
          font-size: 9px;
          line-height: 0;
        }
        .ww-hub-urlbar span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ww-hub-scan {
          position: relative;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ww-hub-scan .ww-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid var(--lime);
          opacity: 0;
          animation: ww-pulse 2.2s ease-out infinite;
        }
        .ww-hub-scan .ww-ring.ww-d2 {
          animation-delay: 1.1s;
        }
        @keyframes ww-pulse {
          0% {
            transform: scale(0.4);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .ww-hub-scan .ww-check {
          position: relative;
          z-index: 1;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ww-hub-tag {
          font-size: 9.5px;
          color: var(--muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .ww-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 64px;
          height: 64px;
          margin: -32px 0 0 -32px;
          z-index: 2;
        }

        .ww-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          border: 1px solid var(--paper-2);
          box-shadow: 0 8px 18px -8px rgba(20, 20, 15, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ww-node:hover .ww-node-inner {
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 14px 26px -8px rgba(20, 20, 15, 0.26);
        }

        .ww-node-label {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          font-size: 11px;
          font-weight: 600;
          color: var(--muted);
          white-space: nowrap;
        }

        .ww-more-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 220px;
          margin: 56px auto 0;
          padding: 11px 20px;
          border-radius: 999px;
          border: 1px solid var(--ring);
          background: var(--white);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--ink);
        }
        .ww-more-pill .ww-plus {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
        }

        @media (max-width: 640px) {
          .ww-section {
            padding: 64px 18px 72px;
          }
          .ww-sub {
            margin-bottom: 44px;
          }
          .ww-orbit-wrap {
            width: min(340px, 92vw);
          }
          .ww-hub {
            width: 118px;
            height: 118px;
            gap: 6px;
            padding: 0 8px;
          }
          .ww-hub-urlbar {
            font-size: 8.5px;
            padding: 4px 9px;
            gap: 4px;
          }
          .ww-hub-scan {
            width: 26px;
            height: 26px;
          }
          .ww-hub-scan .ww-check {
            width: 20px;
            height: 20px;
          }
          .ww-hub-tag {
            font-size: 7.5px;
          }
          .ww-node {
            width: 52px;
            height: 52px;
            margin: -26px 0 0 -26px;
          }
          .ww-node-inner {
            border-radius: 13px;
            font-size: 14px;
          }
          .ww-node-label {
            font-size: 9.5px;
            margin-top: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ww-orbit-ring {
            animation: none;
          }
          .ww-node-inner {
            transition: none;
          }
          .ww-ring {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}