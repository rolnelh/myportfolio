"use client";

/**
 * HowItWorks — section "Three steps. Two minutes."
 * 1) URL bar interactive
 * 2) Phone mockup entouré des logos partenaires en orbite
 * 3) Carte "Scan summary" avec résultats
 */
export default function HowItWorks() {
    return (
        <section className="hiw-section">
            <h2 className="hiw-headline">Three steps. 60 Seconds.</h2>

            <div className="hiw-grid">
                {/* STEP 1 */}
                <div className="hiw-step">
                    <span className="hiw-badge">01</span>
                    <h3 className="hiw-step-title">Paste your URL</h3>

                    <div className="hiw-step-visual hiw-step1-visual">
                        <div className="hiw-urlbar">
                            <svg className="hiw-globe" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8A897F" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" />
                            </svg>
                            <span className="hiw-url-text">my-app.io</span>
                            <span className="hiw-url-go">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#14140F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hiw-connector" aria-hidden="true">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                        <line x1="0" y1="5" x2="90" y2="5" stroke="#C6F135" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M85 1 L94 5 L85 9" fill="none" stroke="#C6F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* STEP 2 */}
                <div className="hiw-step">
                    <span className="hiw-badge">02</span>
                    <h3 className="hiw-step-title">We simulate real users</h3>

                    <div className="hiw-step-visual hiw-step2-visual">
                        <div className="hiw-orbit">
                            <div className="hiw-orbit-ring" />

                            <div className="hiw-sat hiw-sat-1">
                                <span style={{ color: "#1C6DEB", fontWeight: 800, fontStyle: "italic" }}>b.</span>
                            </div>
                            <div className="hiw-sat hiw-sat-2">
                                <span style={{ color: "#1C6DEB", fontWeight: 800 }}>W</span>
                            </div>
                            <div className="hiw-sat hiw-sat-3">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="#14140F">
                                    <path d="M2 12 L12 2 L22 12 L12 22 Z" opacity="0" />
                                    <path d="M3 12 L12 3 L12 21 Z" />
                                </svg>
                            </div>
                            <div className="hiw-sat hiw-sat-4">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#14140F" strokeWidth="1.6">
                                    <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
                                    <path d="M12 2 L12 22 M3 7 L21 17 M21 7 L3 17" />
                                </svg>
                            </div>

                            <div className="hiw-phone">
                                <div className="hiw-phone-notch" />
                                <div className="hiw-phone-screen">
                                    <div className="hiw-phone-topbar">
                                        <svg viewBox="0 0 48 40" width="16" height="13" fill="none">
                                            <path d="M2 4 L16 34 L24 18" stroke="#14140F" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 20 C 30 22, 38 16, 46 4" stroke="#C6F135" strokeWidth="7" strokeLinecap="round" />
                                        </svg>
                                        <span className="hiw-phone-menu">☰</span>
                                    </div>

                                    <span className="hiw-phone-pill">AI-Powered Testing</span>

                                    <h4 className="hiw-phone-h">
                                        Ship with confidence.
                                        <br />
                                        Every time.
                                    </h4>
                                    <p className="hiw-phone-p">
                                        Automated tests for every edge case. Because quality is not optional.
                                    </p>

                                    <div className="hiw-phone-btns">
                                        <span className="hiw-btn-dark">Get Started</span>
                                        <span className="hiw-btn-outline">Watch Demo</span>
                                    </div>

                                    <ul className="hiw-phone-list">
                                        <li>
                                            <span className="hiw-li-icon">⚡</span>
                                            <span>
                                                <b>Lightning Fast</b>
                                                <em>Test in seconds, not hours</em>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="hiw-li-icon">🌐</span>
                                            <span>
                                                <b>Cross-Browser</b>
                                                <em>Cover 100+ browsers</em>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="hiw-li-icon">📊</span>
                                            <span>
                                                <b>Smart Reports</b>
                                                <em>Clear insights instantly</em>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hiw-connector" aria-hidden="true">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                        <line x1="0" y1="5" x2="90" y2="5" stroke="#C6F135" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M85 1 L94 5 L85 9" fill="none" stroke="#C6F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* STEP 3 */}
                <div className="hiw-step">
                    <span className="hiw-badge">03</span>
                    <h3 className="hiw-step-title">Get a clear report</h3>

                    <div className="hiw-step-visual hiw-step3-visual">
                        <div className="hiw-report">
                            <div className="hiw-report-head">
                                <span className="hiw-report-title">Scan summary</span>
                                <span className="hiw-report-time">10m ago</span>
                            </div>

                            <div className="hiw-stats">
                                <div className="hiw-stat">
                                    <span className="hiw-stat-num">3</span>
                                    <span className="hiw-stat-label">Tested</span>
                                </div>
                                <div className="hiw-stat">
                                    <span className="hiw-stat-num" style={{ color: "#E0453C" }}>1</span>
                                    <span className="hiw-stat-label">Critical</span>
                                </div>
                                <div className="hiw-stat">
                                    <span className="hiw-stat-num" style={{ color: "#F5A623" }}>2</span>
                                    <span className="hiw-stat-label">Major</span>
                                </div>
                                <div className="hiw-stat">
                                    <span className="hiw-stat-num">12</span>
                                    <span className="hiw-stat-label">Minor</span>
                                </div>
                                <div className="hiw-stat">
                                    <span className="hiw-stat-num" style={{ color: "#4CA84C" }}>24</span>
                                    <span className="hiw-stat-label">Passed</span>
                                </div>
                            </div>

                            <div className="hiw-device-row">
                                <span className="hiw-device-icon">📱</span>
                                <div className="hiw-device-info">
                                    <b>iPhone 15</b>
                                    <em>iOS 17.4 · Safari</em>
                                </div>
                                <span className="hiw-pass">
                                    Pass
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#4CA84C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12.5 10 17 19 7" />
                                    </svg>
                                </span>
                            </div>

                            <div className="hiw-bug-banner">
                                <span className="hiw-bug-icon">🐛</span>
                                <div className="hiw-bug-text">
                                    <b>1 critical bug found</b>
                                    <span>View details →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hiw-section {
          --ink: #14140f;
          --paper: #ffffff;
          --paper-2: #f3f1ec;
          --lime: #c6f135;
          --lime-deep: #8fb300;
          --muted: #8a897f;
          --ring: #e4e1d8;

          color: var(--ink);
          padding: 88px 24px 100px;
          font-family: inherit;
        }

        .hiw-headline {
          text-align: center;
          font-size: clamp(26px, 4.5vw, 38px);
          font-weight: 500;
          letter-spacing: -0.01em;
          margin: 0 0 64px;
        }

        .hiw-grid {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          max-width: 1300px;
          margin: 0 auto;
        }

        .hiw-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1 1 0;
          min-width: 0;
        }

        .hiw-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--lime);
          color: var(--ink);
          font-weight: 800;
          font-size: 15px;
          padding: 8px 16px;
          border-radius: 10px;
          margin-bottom: 18px;
        }

        .hiw-step-title {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 36px;
        }

        .hiw-step-visual {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 340px;
        }

        .hiw-connector {
          width: 70px;
          flex: 0 0 70px;
          align-self: center;
          margin-top: -170px;
        }
        .hiw-connector svg {
          width: 100%;
          height: 10px;
          display: block;
        }

        /* STEP 1 — url bar */
        .hiw-urlbar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--paper-2);
          border-radius: 999px;
          padding: 14px 10px 14px 20px;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 10px 24px -14px rgba(20, 20, 15, 0.2);
        }
        .hiw-url-text {
          flex: 1;
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
        }
        .hiw-url-go {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* STEP 2 — orbit + phone */
        .hiw-orbit {
          position: relative;
          width: 300px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hiw-orbit-ring {
          position: absolute;
          inset: 10px 10px;
          border: 2px dashed var(--lime);
          border-radius: 50%;
          opacity: 0.55;
        }

        .hiw-sat {
          position: absolute;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--paper);
          box-shadow: 0 8px 18px -8px rgba(20, 20, 15, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          z-index: 2;
        }
        .hiw-sat-1 { top: 22px; left: -6px; }
        .hiw-sat-2 { top: 14px; right: -6px; }
        .hiw-sat-3 { bottom: 32px; left: -8px; }
        .hiw-sat-4 { bottom: 14px; right: -4px; }

        .hiw-phone {
          position: relative;
          z-index: 1;
          width: 190px;
          height: 320px;
          background: #14140f;
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 20px 40px -16px rgba(20, 20, 15, 0.35);
        }
        .hiw-phone-notch {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 16px;
          background: #14140f;
          border-radius: 0 0 12px 12px;
          z-index: 3;
        }
        .hiw-phone-screen {
          background: var(--paper);
          width: 100%;
          height: 100%;
          border-radius: 22px;
          padding: 22px 12px 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .hiw-phone-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .hiw-phone-menu {
          font-size: 12px;
          color: var(--ink);
        }
        .hiw-phone-pill {
          align-self: flex-start;
          font-size: 8px;
          font-weight: 700;
          background: rgba(198, 241, 53, 0.35);
          color: var(--lime-deep);
          padding: 3px 8px;
          border-radius: 999px;
          margin-bottom: 8px;
        }
        .hiw-phone-h {
          font-size: 13px;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 6px;
        }
        .hiw-phone-p {
          font-size: 7.5px;
          color: var(--muted);
          line-height: 1.4;
          margin: 0 0 10px;
        }
        .hiw-phone-btns {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .hiw-btn-dark {
          background: var(--ink);
          color: var(--paper);
          font-size: 7.5px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
        }
        .hiw-btn-outline {
          border: 1px solid var(--ring);
          font-size: 7.5px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
        }
        .hiw-phone-list {
          list-style: none;
          margin: 0;
          padding: 8px 0 0;
          border-top: 1px solid var(--paper-2);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hiw-phone-list li {
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        .hiw-li-icon {
          font-size: 10px;
        }
        .hiw-phone-list b {
          display: block;
          font-size: 8px;
          font-weight: 700;
        }
        .hiw-phone-list em {
          display: block;
          font-style: normal;
          font-size: 6.5px;
          color: var(--muted);
        }

        /* STEP 3 — report */
        .hiw-report {
          width: 100%;
          max-width: 340px;
          background: var(--paper);
          border: 1px solid var(--ring);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 16px 34px -18px rgba(20, 20, 15, 0.25);
          text-align: left;
        }
        .hiw-report-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .hiw-report-title {
          font-weight: 800;
          font-size: 14.5px;
        }
        .hiw-report-time {
          font-size: 11px;
          color: var(--muted);
        }
        .hiw-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
          margin-bottom: 14px;
        }
        .hiw-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .hiw-stat-num {
          font-size: 16px;
          font-weight: 800;
        }
        .hiw-stat-label {
          font-size: 9px;
          color: var(--muted);
        }
        .hiw-device-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--paper-2);
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 10px;
        }
        .hiw-device-icon {
          font-size: 16px;
        }
        .hiw-device-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .hiw-device-info b {
          font-size: 12px;
        }
        .hiw-device-info em {
          font-style: normal;
          font-size: 10px;
          color: var(--muted);
        }
        .hiw-pass {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: #4ca84c;
        }
        .hiw-bug-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, var(--lime), #a9de2f);
          border-radius: 14px;
          padding: 14px;
        }
        .hiw-bug-icon {
          font-size: 18px;
        }
        .hiw-bug-text {
          display: flex;
          flex-direction: column;
        }
        .hiw-bug-text b {
          font-size: 13px;
        }
        .hiw-bug-text span {
          font-size: 11.5px;
          font-weight: 600;
        }

        @media (max-width: 980px) {
          .hiw-grid {
            flex-direction: column;
            align-items: center;
            gap: 56px;
          }
          .hiw-connector {
            display: none;
          }
          .hiw-step-visual {
            min-height: 0;
          }
        }
      `}</style>
        </section>
    );
}