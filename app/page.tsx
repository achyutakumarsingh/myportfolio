import {
  Craft,
  Cursor,
  Hero,
  Nav,
  Path,
  Portrait,
  QuickPicks,
  Reveals,
  Work,
} from "@/components/Client";
import { photo, poem, profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Cursor />
      <Reveals />
      <Nav />

      <main className="container">
        <Hero />
        <Work />
        <Craft />
        <Path />

        {/* ---------------------------------------------- ABOUT */}
        <section className="section" id="about">
          <div className="section-head">
            <span className="num">/ 05</span>
            <h2>
              The <span className="it">long</span> story, short
            </h2>
            <span className="meta">About</span>
          </div>

          <div className="about-wrap">
            <div className="about-prose">
              <p>
                I&apos;m a <span className="accent">first-year IT student</span> at{" "}
                <span className="it">IIIT Allahabad</span> who refuses to choose between
                the algorithm and the interface. Most days that&apos;s a C++ contest
                problem; most nights it&apos;s shipping something with a URL.
              </p>
              <p>
                Five projects so far — a multilingual AI platform for{" "}
                <span className="it">eight underserved communities</span>, a civic
                issue-reporting platform on PostGIS, a demand forecaster with{" "}
                <span className="accent">calibrated uncertainty</span>, and a public-
                services navigator in React. Third place at the Indo-Swiss hackathon with
                ETH Zurich in year one.
              </p>
              <p>
                The through-line is the same either way: understand the problem properly,
                then make the solution feel obvious to the person using it.
              </p>
            </div>

            <div className="about-side">
              <div className="about-card">
                <div className="label">— Quick picks</div>
                <QuickPicks />
              </div>

              <div className="about-card">
                <div className="label">— Currently</div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    lineHeight: 1.4,
                  }}
                >
                  <span className="it" style={{ color: "var(--accent-2)" }}>
                    IIIT Allahabad
                  </span>{" "}
                  · Information Technology
                  <br />
                  Prayagraj, Uttar Pradesh
                  <br />
                  <span
                    style={{
                      color: "var(--ink-faint)",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Building side projects · climbing Codeforces
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- OFF-SCREEN */}
        <section className="section offscreen" id="offscreen">
          <div className="section-head">
            <span className="num">/ 06</span>
            <h2>
              <span className="it">Off</span>-screen
            </h2>
            <span className="meta">A photo and a poem</span>
          </div>

          <div className="os-wrap">
            <div className="os-portrait">
              <Portrait src={photo.src} />
              <div className="os-portrait-meta">
                <div className="os-coords">
                  <span className="k">{photo.coords[0]}</span>
                  <span className="k">{photo.coords[1]}</span>
                </div>
                <div className="os-caption">
                  <span className="it">Achyuta</span>, somewhere between a contest
                  editorial and the next commit — <span className="it">IIIT Allahabad</span>.
                </div>
              </div>
              <div className="os-portrait-mark">{photo.mark}</div>
            </div>

            <div className="os-poem">
              <div className="os-tag">— Poem / {poem.year}</div>
              <h3 className="os-title">
                {poem.title[0]}
                <br />
                {poem.title[1]}
              </h3>
              <div className="os-body">
                {poem.lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
              <div className="os-sign">{poem.sign}</div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- CONTACT */}
        <footer className="contact" id="contact">
          <h2 className="reveal">
            Let&apos;s build
            <br />
            something that <span className="it">feels</span>
            <br />
            <a
              href={`mailto:${profile.email}`}
              data-cursor="hover"
              data-cursor-label="Email ↗"
            >
              inevitable<span className="ember">.</span>
            </a>
          </h2>

          <div className="contact-grid">
            <div className="item">
              <div className="label">— Say hello</div>
              <a href={`mailto:${profile.email}`} data-cursor="hover">
                <div className="val">{profile.email}</div>
              </a>
            </div>
            <div className="item">
              <div className="label">— Phone</div>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} data-cursor="hover">
                <div className="val">{profile.phone}</div>
              </a>
            </div>
            <div className="item">
              <div className="label">— LinkedIn</div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                <div className="val">{profile.linkedinHandle}</div>
              </a>
            </div>
            <div className="item">
              <div className="label">— GitHub</div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                <div className="val">{profile.githubHandle}</div>
              </a>
            </div>
          </div>

          <div className="foot">
            <span>
              © {new Date().getFullYear()} — {profile.name} · Prayagraj, IN
            </span>
            <span>Building since {profile.since}</span>
            <span>Next.js · no UI libraries</span>
          </div>
        </footer>
      </main>
    </>
  );
}
