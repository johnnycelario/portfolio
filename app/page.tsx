"use client";

import Image from "next/image";

const BASE = "/portfolio";
const ORANGE = "#ff9500";
const GOLD = "#ffd700";

const LINE_TOPS = ["10%", "30%", "50%", "70%", "90%"];

export default function Home() {
  return (
    <main className="relative text-[#eeedf7] min-h-screen" style={{ fontFamily: "'Sora', sans-serif" }}>

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="fixed inset-0 z-0 bg-black" />

      {/* Animated orange grid */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,149,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,149,0,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Moving horizontal lines */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {LINE_TOPS.map((top, i) => (
          <div key={i} className="absolute w-full" style={{ top, height: "1px", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent 0%, #ff9500 20%, #ffd700 50%, #ff9500 80%, transparent 100%)",
                animation: `lineMove 4s linear infinite${i % 2 !== 0 ? " reverse" : ""}`,
                animationDelay: i % 2 !== 0 ? "2s" : "0s",
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay so content stays readable */}
      <div className="fixed inset-0 z-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      {/* ── PAGE CONTENT ── */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6 py-[60px] pb-20">

        {/* HERO */}
        <section className="flex flex-col items-center text-center gap-6 pb-16">
          <div
            className="w-[130px] h-[130px] rounded-full overflow-hidden"
            style={{ border: `3px solid ${ORANGE}`, boxShadow: `0 0 32px rgba(255,149,0,0.35)` }}
          >
            <Image
              src={`${BASE}/assets/images/image01.jpg`}
              alt="Johnny Celario"
              width={130}
              height={130}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.15] tracking-tight">
            Hi, I&apos;m{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${ORANGE}, ${GOLD})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Johnny Celario.
            </span>
            <span className="block text-[0.55em] font-light text-[#9e9baf] tracking-wide mt-1">
              (The) Go-To-Market Engineer{" "}
              <strong className="font-semibold text-[#eeedf7]">you&apos;re looking for.</strong>
            </span>
          </h1>

          <p className="text-[1.05rem] text-[#9e9baf] max-w-[480px] leading-[1.7]">
            I&apos;ve built production-grade GTM automations that replace a whole marketing team.
          </p>

          {/* Nav Pills */}
          <nav className="flex flex-wrap justify-center gap-2.5 mt-2">
            <a href="#projects" className="pill" style={{ background: "rgba(255,149,0,0.15)", color: ORANGE, border: `1px solid rgba(255,149,0,0.3)` }}>
              <PillIcon d="M3 3h18v18H3zM9 9h6M9 12h6M9 15h4" />
              My Projects
            </a>
            <a href="#websites" className="pill" style={{ background: "rgba(255,215,0,0.12)", color: GOLD, border: `1px solid rgba(255,215,0,0.25)` }}>
              <PillIcon d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
              My Websites
            </a>
            <a
              href="https://calendly.com/celariojuanignacio"
              target="_blank"
              rel="noopener"
              className="pill"
              style={{ background: ORANGE, color: "#000" }}
            >
              <PillIcon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69l3-.07a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.57-1.57a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              Book a Meeting with Me
            </a>
            <a
              href="https://drive.google.com/file/d/1hazP1FaaWNX4HCVlSyHwiKnX15jecf2P/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="pill"
              style={{ background: "rgba(255,255,255,0.08)", color: "#eeedf7", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <PillIcon d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8" />
              My Resume
            </a>
            <a
              href="https://www.linkedin.com/in/juan-celario/"
              target="_blank"
              rel="noopener"
              className="pill"
              style={{ background: "#0a66c2", color: "#fff" }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="mailto:celariojuanignacio@gmail.com"
              className="pill"
              style={{ background: "rgba(255,255,255,0.08)", color: "#eeedf7", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <PillIcon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
              Email
            </a>
          </nav>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pt-[72px]">
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            <ProjectCard
              href="https://docs.google.com/document/d/1LWYgGZ1ID7iTryUfHZZiTDCeZj82jr-HN8YyN_3zVB8/edit?usp=sharing"
              img={`${BASE}/assets/images/image09.jpg`}
              label="MCP Servers"
              title="Blog Maker"
              desc={<>The workflow that replaced a whole <strong>marketing</strong> team.</>}
            />
            <ProjectCard
              href="https://docs.google.com/document/d/1kEeNU1sZlCZaNWjNstUrdioDwuEVdCjTDBnRyAZxz7Y/edit?usp=sharing"
              img={`${BASE}/assets/images/image03.jpg`}
              label="Make.com"
              title="Amazon Affiliate Marketing Automation"
              desc={<>Everything you need to get started in the Affiliate Marketing Business, <strong>like a pro.</strong></>}
            />
            <ProjectCard
              href="https://docs.google.com/document/d/1AG_24DJfGigWgUY4iughagytECXVqBQtBoOPWKFLkuM/edit?usp=sharing"
              img={`${BASE}/assets/images/image06.jpg`}
              label="n8n"
              title="EZ Reddit Lead Gen"
              desc={<>This is how to become big on <strong>Reddit</strong> and get more <strong>leads</strong> into your <strong>business.</strong></>}
            />
            <ProjectCard
              href="https://docs.google.com/document/d/1l5EFwZW8I1y58f674hO7Cmf-xXmE2OSNA4N960L633k/edit?usp=sharing"
              img={`${BASE}/assets/images/image08.jpg`}
              label="n8n"
              title="AI-Powered Lead Enrichment Researcher"
              desc={<>Find <strong>everything you need to know</strong> about your leads, with the power of <strong>Perplexity.</strong></>}
            />
            <ProjectCard
              img={`${BASE}/assets/images/image04.jpg`}
              label="n8n"
              title="The Client Satisfaction Early Warning System"
              desc={<>An automated business intelligence workflow that <strong>proactively monitors</strong> client sentiment and sends dissatisfaction alerts before clients churn.</>}
            />
          </div>
        </section>

        {/* WEBSITES */}
        <section id="websites" className="pt-[72px]">
          <SectionTitle>My Websites</SectionTitle>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            <ProjectCard
              href="https://eightx.co/"
              img={`${BASE}/assets/images/image07.jpg`}
              label="WordPress"
              title="Eightx"
              desc="eightx.co"
              cta="Visit Site"
            />
            <ProjectCard
              href="https://tranquilwick.com/"
              img={`${BASE}/assets/images/image02.jpg`}
              label="WordPress"
              title="TranquiWick"
              desc="tranquilwick.com"
              cta="Visit Site"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="mt-20 pt-10 text-center flex flex-col items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,149,0,0.15)" }}
        >
          <p className="text-[#9e9baf] text-[0.9rem] leading-[1.7]">
            Got any questions? Interested in a custom project?
            <br />
            Don&apos;t hesitate to <strong className="text-[#eeedf7]">contact me!</strong>
          </p>
          <a
            href="https://www.linkedin.com/in/juan-celario/"
            target="_blank"
            rel="noopener"
            className="pill"
            style={{ background: "#0a66c2", color: "#fff", fontSize: "0.9rem", padding: "10px 24px" }}
          >
            <LinkedInIcon />
            Connect on LinkedIn
          </a>
          <p className="text-[0.75rem] text-[#555] mt-2">Made with ♥ — Johnny Celario</p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
          cursor: pointer;
        }
        .pill:hover { transform: translateY(-2px); opacity: 0.88; }
      `}</style>
    </main>
  );
}

/* ── Reusable components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span style={{ color: ORANGE }}>◈</span>
      {children}
      <span className="flex-1 h-px" style={{ background: "rgba(255,149,0,0.15)" }} />
    </h2>
  );
}

function ProjectCard({
  href,
  img,
  label,
  title,
  desc,
  cta = "View Project",
}: {
  href?: string;
  img: string;
  label: string;
  title: string;
  desc: React.ReactNode;
  cta?: string;
}) {
  const cardStyle: React.CSSProperties = {
    background: "rgba(20,14,0,0.75)",
    border: "1px solid rgba(255,149,0,0.12)",
    borderRadius: "16px",
    overflow: "hidden",
    color: "#eeedf7",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
    backdropFilter: "blur(8px)",
  };

  const inner = (
    <>
      <Image src={img} alt={title} width={600} height={338} className="w-full aspect-video object-cover" />
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-[0.72rem] font-semibold tracking-widest uppercase" style={{ color: ORANGE }}>
          {label}
        </span>
        <p className="text-[1rem] font-semibold leading-[1.35]">{title}</p>
        <p className="text-[0.875rem] text-[#9e9baf] leading-[1.6] mt-0.5">{desc}</p>
        {href && (
          <span className="inline-flex items-center gap-1 mt-auto pt-3 text-[0.8rem] font-semibold" style={{ color: ORANGE }}>
            {cta}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" style={cardStyle}
        className="hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,149,0,0.15)] hover:border-[rgba(255,149,0,0.3)]">
        {inner}
      </a>
    );
  }

  return (
    <div style={cardStyle}
      className="hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,215,0,0.08)] hover:border-[rgba(255,215,0,0.2)]">
      {inner}
    </div>
  );
}

function PillIcon({ d }: { d: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
