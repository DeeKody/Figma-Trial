import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { GrainOverlay, GRAIN_URL } from "./components/GrainOverlay";
import { Barcode } from "./components/Barcode";

// ─── Data ────────────────────────────────────────────────────────────────────

const DESIGNER = {
  name: "ARIA HAYES",
  monogram: "A—H",
  role: "UI/UX Designer",
  location: "San Francisco, CA",
  email: "hello@ariahayes.co",
  bio: "5+ years shipping products at the intersection of beauty and function.",
};

const EXPERTISE = [
  "USER RESEARCH",
  "INTERACTION DESIGN",
  "VISUAL SYSTEMS",
  "PROTOTYPING",
  "USABILITY TESTING",
  "DESIGN STRATEGY",
];

const PROJECTS = [
  {
    id: "01",
    title: "NEXUS BANKING APP",
    category: "Mobile Design",
    year: "2024",
    desc: "Redesigned the core transaction flow for a neobank serving 2M+ users, cutting task completion time by 34%.",
    tags: ["UX Research", "Interaction Design", "Prototyping"],
    gradient: "from-[#0d2a52] to-[#040d1a]",
  },
  {
    id: "02",
    title: "ORION DESIGN SYSTEM",
    category: "Design Systems",
    year: "2023",
    desc: "Built a comprehensive component library of 120+ elements for a Fortune 500 enterprise software suite.",
    tags: ["Design Systems", "Documentation", "Dev Handoff"],
    gradient: "from-[#0a3a22] to-[#041208]",
  },
  {
    id: "03",
    title: "PULSE HEALTH DASHBOARD",
    category: "Data Visualization",
    year: "2023",
    desc: "Crafted a real-time clinical monitoring dashboard for patient vitals used across hospital departments.",
    tags: ["Dashboard Design", "Data Viz", "Healthcare UX"],
    gradient: "from-[#38085a] to-[#0f0318]",
  },
  {
    id: "04",
    title: "VELA E-COMMERCE",
    category: "Web Design",
    year: "2022",
    desc: "End-to-end redesign of a DTC furniture brand's storefront, increasing conversion rate by 28%.",
    tags: ["E-Commerce", "Visual Design", "A/B Testing"],
    gradient: "from-[#4a2008] to-[#180a02]",
  },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────

function TopNav({ theme }: { theme: "dark" | "cream" }) {
  const d = theme === "dark";
  const fg = d ? "rgba(255,255,255,0.35)" : "rgba(26,26,26,0.38)";
  const fgHover = d ? "#ffffff" : "#1a1a1a";
  const border = d ? "rgba(255,255,255,0.07)" : "rgba(26,26,26,0.1)";
  const logo = d ? "#ffffff" : "#1a1a1a";

  return (
    <div
      className="flex items-center justify-between py-[18px] border-b"
      style={{ borderColor: border }}
    >
      <nav
        className="flex gap-5 text-[11px] tracking-[0.18em]"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: fg }}
      >
        {["HOME", "ABOUT", "WORK"].map((item) => (
          <button
            key={item}
            className="transition-colors duration-200"
            style={{ color: fg }}
            onMouseEnter={(e) => (e.currentTarget.style.color = fgHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = fg)}
          >
            {item}
          </button>
        ))}
      </nav>

      <span
        className="text-[15px] font-black tracking-[0.25em]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: logo }}
      >
        {DESIGNER.monogram}
      </span>

      <button
        className="flex items-center gap-2 border px-4 py-[7px] text-[11px] tracking-[0.18em] transition-all duration-200"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: fg,
          borderColor: d ? "rgba(255,255,255,0.18)" : "rgba(26,26,26,0.18)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = fgHover;
          e.currentTarget.style.borderColor = fgHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = fg;
          e.currentTarget.style.borderColor = d
            ? "rgba(255,255,255,0.18)"
            : "rgba(26,26,26,0.18)";
        }}
      >
        GET IN TOUCH&nbsp;
        <ArrowRight size={11} />
      </button>
    </div>
  );
}

// ─── Section: Hero ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0d0d0d] overflow-hidden">
      <GrainOverlay opacity={0.38} blendMode="overlay" />

      {/* crimson depth glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "25%",
          right: "28%",
          width: 560,
          height: 560,
          background: "radial-gradient(circle, rgba(110,0,0,0.5) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: "20%",
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(60,0,0,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* chromatic aberration strips — matches image 1 rainbow lens flare */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "18%",
          right: 40,
          width: 28,
          height: 280,
          background:
            "linear-gradient(to bottom, rgba(140,0,255,0.22), rgba(0,200,255,0.2), rgba(255,220,0,0.1), transparent)",
          transform: "rotate(14deg)",
          filter: "blur(22px)",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: 120,
          right: 60,
          width: 18,
          height: 180,
          background:
            "linear-gradient(to bottom, rgba(0,220,255,0.2), rgba(180,0,255,0.15), transparent)",
          transform: "rotate(-8deg)",
          filter: "blur(16px)",
        }}
      />

      {/* nav */}
      <div className="relative z-10 px-8 lg:px-12 pt-6">
        <TopNav theme="dark" />
      </div>

      {/* main headline */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 lg:px-12 pb-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] tracking-[0.38em] mb-8"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          UI / UX DESIGNER &mdash; {DESIGNER.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-black uppercase leading-[0.85] tracking-[-0.025em] text-white"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(72px, 14vw, 188px)",
          }}
        >
          CRAFTING
          <br />
          <span style={{ color: "rgba(255,255,255,0.14)" }}>DIGITAL</span>
          <br />
          EXPERIENCES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-end justify-between flex-wrap gap-6 mt-14 mb-0"
        >
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            {DESIGNER.bio}
          </p>
          <div
            className="flex items-center gap-4"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            <div className="w-20 h-px bg-white/15" />
            <span
              className="text-[10px] tracking-[0.38em]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              SCROLL
            </span>
          </div>
        </motion.div>
      </div>

      {/* floating card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block z-10"
      >
        <div
          className="w-56 relative overflow-hidden border"
          style={{
            background: "rgba(255,255,255,0.035)",
            backdropFilter: "blur(14px)",
            borderColor: "rgba(255,255,255,0.09)",
          }}
        >
          <GrainOverlay opacity={0.22} />
          <div className="relative z-10 p-6">
            <p
              className="text-[9px] tracking-[0.28em] mb-4"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              CURRENTLY
            </p>
            <p
              className="text-white text-sm font-black uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Open to Work
            </p>
            <p
              className="text-[11px] mb-6"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              Senior / Lead Roles
            </p>
            <div className="w-full h-px mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div
              className="flex items-center gap-2 text-[9px] tracking-[0.18em]"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE Q3 2024
            </div>
          </div>
        </div>
      </motion.div>

      {/* stats strip */}
      <div
        className="relative z-10 grid grid-cols-4 border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        {[
          { v: "5+", l: "YEARS EXP." },
          { v: "60+", l: "PROJECTS" },
          { v: "12", l: "COMPANIES" },
          { v: "4M+", l: "USERS" },
        ].map(({ v, l }, i) => (
          <div
            key={l}
            className="flex flex-col items-center py-6"
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            <span
              className="text-white font-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(20px, 3vw, 30px)",
              }}
            >
              {v}
            </span>
            <span
              className="text-[9px] tracking-[0.22em] mt-1"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section: Expertise ───────────────────────────────────────────────────────

function ExpertiseSection() {
  const [focus, setFocus] = useState(2);

  useEffect(() => {
    const t = setInterval(() => setFocus((p) => (p + 1) % EXPERTISE.length), 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#160202]">
      <GrainOverlay opacity={0.48} blendMode="overlay" />

      {/* bg gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(110,5,5,0.38) 0%, transparent 70%)",
        }}
      />

      {/* sidebar labels */}
      {[
        { text: "I SPECIALIZE IN", side: "left" },
        { text: "DESIGN", side: "right" },
      ].map(({ text, side }) => (
        <span
          key={side}
          aria-hidden
          className="absolute top-1/2 -translate-y-1/2 text-[10px] tracking-[0.38em] select-none"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "rgba(255,255,255,0.18)",
            [side]: 28,
            writingMode: "vertical-rl",
            transform: `translateY(-50%) ${side === "left" ? "rotate(180deg)" : ""}`,
          }}
        >
          {text}
        </span>
      ))}

      {/* stacked type list */}
      <div className="relative z-10 flex flex-col items-center text-center py-24 px-8 w-full">
        {EXPERTISE.map((item, i) => {
          const active = i === focus;
          const dist = Math.min(
            Math.abs(i - focus),
            EXPERTISE.length - Math.abs(i - focus)
          );
          const alpha = active ? 1 : Math.max(0.07, 0.42 - dist * 0.12);
          const scale = active ? 1 : Math.max(0.7, 1 - dist * 0.08);
          const blur = active ? 0 : dist * 0.5;
          const size = active
            ? "clamp(42px,8.5vw,108px)"
            : "clamp(26px,5vw,66px)";

          return (
            <button
              key={item}
              onClick={() => setFocus(i)}
              className="font-black uppercase leading-[1.08] transition-all duration-700 ease-out block w-full"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: size,
                color: `rgba(255,255,255,${alpha})`,
                transform: `scaleX(${scale})`,
                letterSpacing: active ? "-0.028em" : "-0.01em",
                textShadow: active ? "0 0 80px rgba(200,10,10,0.65)" : "none",
                filter: `blur(${blur}px)`,
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* dot nav */}
      <div className="absolute bottom-10 flex items-center gap-4 z-10">
        {EXPERTISE.map((_, i) => (
          <button
            key={i}
            onClick={() => setFocus(i)}
            style={{
              width: i === focus ? 28 : 4,
              height: 2,
              background:
                i === focus
                  ? "rgba(255,255,255,0.65)"
                  : "rgba(255,255,255,0.18)",
              transition: "all 0.5s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Section: About ───────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#f0ebe3] overflow-hidden">
      <GrainOverlay opacity={0.07} blendMode="multiply" />

      {/* nav stripe */}
      <div className="relative z-10 px-8 lg:px-12 pt-6">
        <TopNav theme="cream" />
      </div>

      {/* watermark */}
      <div
        aria-hidden
        className="absolute top-16 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-black uppercase whitespace-nowrap leading-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(110px, 24vw, 300px)",
            color: "rgba(26,26,26,0.055)",
            letterSpacing: "-0.03em",
          }}
        >
          ABOUT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* red script accent */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 10 }}
          animate={inView ? { opacity: 1, rotate: -5, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          aria-hidden
          className="absolute top-4 right-[30%] pointer-events-none select-none"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(38px, 5vw, 60px)",
            color: "#cc0000",
            filter: "drop-shadow(0 2px 10px rgba(204,0,0,0.28))",
          }}
        >
          Story
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8 items-start">
          {/* intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3
              className="font-black uppercase mb-5 tracking-tight text-[#1a1a1a]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(24px, 3vw, 32px)",
              }}
            >
              Intro
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(26,26,26,0.55)",
              }}
            >
              I started designing for the web before "UX" was even a job title.
              What began as a passion for making things look beautiful evolved
              into an obsession with making things{" "}
              <em>work</em> beautifully. I&apos;ve embedded with engineering
              teams, led user research sessions with hundreds of participants,
              and shipped products used by millions.
            </p>
          </motion.div>

          {/* photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative min-h-[300px] lg:min-h-[340px]"
          >
            {/* back card — dark portrait */}
            <div
              className="absolute inset-0 left-8 top-10 overflow-hidden"
              style={{ background: "#1a0606" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: GRAIN_URL, backgroundSize: "256px", opacity: 0.55 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #5a1010 0%, #0d0303 100%)",
                  opacity: 0.85,
                }}
              />
              {/* aberration flare */}
              <div
                aria-hidden
                className="absolute top-6 right-8 pointer-events-none"
                style={{
                  width: 20,
                  height: 120,
                  background:
                    "linear-gradient(to bottom, rgba(140,0,255,0.3), rgba(0,220,255,0.22), transparent)",
                  transform: "rotate(14deg)",
                  filter: "blur(12px)",
                }}
              />
              <span
                className="absolute bottom-3 left-4 text-[9px] tracking-widest"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: "rgba(255,255,255,0.22)",
                }}
              >
                ARIA HAYES / DESIGNER
              </span>
            </div>

            {/* front card — textured warm */}
            <div
              className="absolute top-0 right-8 overflow-hidden border"
              style={{
                width: "62%",
                height: "60%",
                background: "#1a0e06",
                borderColor: "rgba(26,26,26,0.1)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: GRAIN_URL, backgroundSize: "256px", opacity: 0.5 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #3a2010 0%, #0a0605 100%)",
                  opacity: 0.9,
                }}
              />
              <div
                aria-hidden
                className="absolute top-3 right-4 pointer-events-none"
                style={{
                  width: 14,
                  height: 80,
                  background:
                    "linear-gradient(to bottom, rgba(0,220,255,0.25), rgba(220,0,180,0.18), transparent)",
                  transform: "rotate(-10deg)",
                  filter: "blur(10px)",
                }}
              />
            </div>
          </motion.div>

          {/* thesis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col justify-end"
          >
            <h3
              className="font-black uppercase mb-5 tracking-tight text-[#1a1a1a]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(24px, 3vw, 32px)",
              }}
            >
              Thesis
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(26,26,26,0.48)",
              }}
            >
              The best digital experiences don&apos;t feel digital at all. They
              feel inevitable &mdash; like the design was the only possible
              answer. I work backwards from that feeling, uncovering needs
              through research and translating them into systems elegant enough
              to disappear.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Figma", "Principle", "Framer", "Maze", "FullStory", "Mixpanel"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] border px-3 py-1"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "rgba(26,26,26,0.42)",
                    borderColor: "rgba(26,26,26,0.16)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* awards strip */}
      <div
        className="relative z-10 border-t py-5 px-8"
        style={{ borderColor: "rgba(26,26,26,0.09)" }}
      >
        <div
          className="flex items-center justify-around gap-4 overflow-hidden text-[9px] tracking-[0.28em]"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "rgba(26,26,26,0.28)",
          }}
        >
          {[
            "AWWWARDS HON. MENTION",
            "CSS DESIGN AWARDS",
            "ADC GOLD",
            "DRIBBBLE TOP DESIGNER",
            "COMMUNICATION ARTS",
          ].map((a) => (
            <span key={a} className="whitespace-nowrap hidden sm:block">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Work ────────────────────────────────────────────────────────────

function WorkSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#ede8df] overflow-hidden">
      <GrainOverlay opacity={0.07} blendMode="multiply" />

      {/* right texture strip */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 pointer-events-none"
        style={{
          width: "22%",
          backgroundImage: GRAIN_URL,
          backgroundSize: "256px",
          background: "rgba(18,5,5,0.1)",
          opacity: 0.9,
        }}
      />

      {/* nav stripe */}
      <div className="relative z-10 px-8 lg:px-12 pt-6">
        <TopNav theme="cream" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-16">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <h2
            className="font-black uppercase leading-[0.88] tracking-[-0.025em] text-[#1a1a1a]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(52px, 10vw, 120px)",
            }}
          >
            SELECTED
            <br />
            WORK
          </h2>
          <div className="w-28 h-[3px] bg-[#cc0000] mt-5" />
        </motion.div>

        {/* project rows */}
        <div>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
            >
              {/* top border */}
              <div
                className="h-px"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, rgba(26,26,26,0.16) 0, rgba(26,26,26,0.16) 6px, transparent 6px, transparent 14px)",
                }}
              />

              <div
                className="group flex items-stretch gap-5 lg:gap-8 py-8 cursor-pointer -mx-4 px-4 transition-colors duration-300"
                style={{
                  background:
                    hovered === p.id ? "rgba(26,26,26,0.04)" : "transparent",
                }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* index */}
                <span
                  className="text-[10px] w-7 shrink-0 pt-1 font-black"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "rgba(26,26,26,0.22)",
                  }}
                >
                  {p.id}
                </span>

                {/* image card */}
                <div
                  className="w-32 sm:w-40 h-24 shrink-0 relative overflow-hidden"
                  style={{ background: "#120505" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: GRAIN_URL, backgroundSize: "256px", opacity: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-85`} />
                  {/* rainbow micro-flare */}
                  <div
                    aria-hidden
                    className="absolute top-2 right-2 pointer-events-none"
                    style={{
                      width: 10,
                      height: 56,
                      background:
                        "linear-gradient(to bottom, rgba(0,200,255,0.3), rgba(160,0,255,0.2), transparent)",
                      transform: "rotate(12deg)",
                      filter: "blur(8px)",
                    }}
                  />
                  {/* year */}
                  <span
                    className="absolute top-2 left-2 text-[8px] tracking-widest"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: "rgba(255,255,255,0.28)",
                    }}
                  >
                    {p.year}
                  </span>
                  <Barcode className="absolute bottom-2 right-2 text-white/25" />
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: "rgba(26,26,26,0.32)",
                    }}
                  >
                    {p.category}&nbsp;&mdash;&nbsp;{p.year}
                  </p>
                  <h3
                    className="font-black uppercase tracking-tight leading-none mb-3 text-[#1a1a1a]"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(20px, 2.8vw, 32px)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[11px] leading-relaxed max-w-sm"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: "rgba(26,26,26,0.42)",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] border px-2 py-[3px] tracking-wider"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          color: "rgba(26,26,26,0.32)",
                          borderColor: "rgba(26,26,26,0.13)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* cta arrow */}
                <div className="shrink-0 flex items-center">
                  <div
                    className="w-9 h-9 border flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hovered === p.id ? "#1a1a1a" : "transparent",
                      borderColor:
                        hovered === p.id
                          ? "#1a1a1a"
                          : "rgba(26,26,26,0.18)",
                    }}
                  >
                    <ArrowUpRight
                      size={14}
                      style={{
                        color:
                          hovered === p.id
                            ? "#f0ebe3"
                            : "rgba(26,26,26,0.28)",
                        transition: "color 0.3s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div
            className="h-px"
            style={{ background: "rgba(26,26,26,0.13)" }}
          />
        </div>

        {/* bottom metadata row */}
        <div
          className="flex items-center gap-6 mt-8 text-[9px] tracking-[0.24em]"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "rgba(26,26,26,0.28)",
          }}
        >
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowRight size={10} />
            VIEW ALL PROJECTS
          </button>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(26,26,26,0.1) 0, rgba(26,26,26,0.1) 4px, transparent 4px, transparent 10px)",
            }}
          />
          <span>DISCIPLINE: UI / UX DESIGN</span>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Contact ─────────────────────────────────────────────────────────

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0d0d0d] flex flex-col overflow-hidden"
      style={{ minHeight: "65vh" }}
    >
      <GrainOverlay opacity={0.32} blendMode="overlay" />

      {/* central glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(100,0,0,0.28) 0%, transparent 70%)",
        }}
      />

      {/* chromatic strip */}
      <div
        aria-hidden
        className="absolute top-24 right-20 pointer-events-none"
        style={{
          width: 22,
          height: 220,
          background:
            "linear-gradient(to bottom, rgba(120,0,255,0.22), rgba(0,210,255,0.18), rgba(255,200,0,0.08), transparent)",
          transform: "rotate(18deg)",
          filter: "blur(18px)",
        }}
      />

      {/* top nav */}
      <div className="relative z-10 px-8 lg:px-12 pt-6 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="flex items-center justify-between py-[18px]">
          <div
            className="flex gap-5 text-[11px] tracking-[0.18em]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            <span>HOME</span>
            <span>ABOUT</span>
            <span>WORK</span>
          </div>
          <span
            className="text-[15px] font-black tracking-[0.25em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {DESIGNER.monogram}
          </span>
          <span
            className="text-[11px] tracking-[0.18em]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            GET IN TOUCH →
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] tracking-[0.42em] mb-10"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "rgba(255,255,255,0.22)",
          }}
        >
          LET&apos;S COLLABORATE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="text-white font-black uppercase text-center leading-[0.88] tracking-[-0.025em] mb-14"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(60px, 12vw, 148px)",
          }}
        >
          GET IN
          <br />
          TOUCH
        </motion.h2>

        <motion.a
          href={`mailto:${DESIGNER.email}`}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="inline-flex items-center gap-3 border text-white px-10 py-4 transition-all duration-300 hover:bg-white hover:text-[#0d0d0d]"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.22em",
            borderColor: "rgba(255,255,255,0.22)",
          }}
        >
          {DESIGNER.email.toUpperCase()}
          <ArrowRight size={13} />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-8 mt-12"
        >
          {["LINKEDIN", "DRIBBBLE", "BEHANCE"].map((s) => (
            <button
              key={s}
              className="text-[10px] tracking-[0.28em] transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {s}
            </button>
          ))}
        </motion.div>
      </div>

      {/* footer */}
      <div
        className="relative z-10 flex items-center justify-between px-8 lg:px-12 pb-8 text-[9px] tracking-[0.22em]"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: "rgba(255,255,255,0.15)",
        }}
      >
        <span>&copy; 2024 {DESIGNER.name}</span>
        <span>{DESIGNER.monogram}</span>
        <span>UI/UX DESIGNER</span>
      </div>

      {/* red bottom bar — matches image 4 red strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#cc0000]" />
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
