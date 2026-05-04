import { useState, useEffect, useRef } from "react";

const projects = [
  {
    name: "Portfolio Trabajo",
    repo: "portfolio-trabajo",
    lang: "JavaScript",
    langColor: "#39ff14",
    demo: "https://portfolio-trabajo-fawn.vercel.app",
    github: "https://github.com/tomas-martin/portfolio-trabajo",
    desc: "Portfolio profesional - Vitrina de proyectos y habilidades. Diseño moderno con animaciones.",
    tags: ["React", "JavaScript", "Vite", "CSS"],
    category: "portfolio",
  },
  {
    name: "ATSC Futsal",
    repo: "atscfutsal",
    lang: "HTML",
    langColor: "#00ff41",
    demo: "https://atscfutsal.vercel.app",
    github: "https://github.com/tomas-martin/atscfutsal",
    desc: "E-commerce de ropa deportiva para el club ATSC Futsal. Catálogo de productos, carrito y gestión de pedidos.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "cliente",
  },
  {
    name: "Futsal Rivadavia",
    repo: "futsalrivadavia",
    lang: "TypeScript",
    langColor: "#00ff41",
    demo: "https://futsalrivadavia.vercel.app",
    github: "https://github.com/tomas-martin/futsalrivadavia",
    desc: "Sitio web del club Futsal Rivadavia. Información del club, gestión y pago de cuotas de afiliados.",
    tags: ["Next.js", "TypeScript", "React"],
    category: "cliente",
  },
  {
    name: "Portfolio Román",
    repo: "portfolio-Roman",
    lang: "CSS",
    langColor: "#00ff41",
    demo: "https://romanzuniga.vercel.app",
    github: "https://github.com/tomas-martin/portfolio-Roman",
    desc: "Portfolio deportivo para atleta. Vitrina de logros, estadísticas y trayectoria profesional.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
  },
  {
    name: "Portfolio Totti",
    repo: "portfolio-Totti",
    lang: "CSS",
    langColor: "#00ff41",
    demo: "https://tomasmartin.vercel.app",
    github: "https://github.com/tomas-martin/portfolio-Totti",
    desc: "Portfolio deportivo personal. Diseño impactante con animaciones y experiencia de usuario refinada.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
  },
  {
    name: "Taller Mecánico",
    repo: "Tallermecanicointegral",
    lang: "HTML",
    langColor: "#00ff41",
    demo: "https://tallermecanicomendoza.com",
    github: "https://github.com/tomas-martin/Tallermecanicointegral",
    desc: "Sitio web profesional para taller mecánico en Mendoza. Servicios, contacto y reservas.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "cliente",
  },
  {
    name: "ATSC App",
    repo: "atsc-app",
    lang: "React",
    langColor: "#39ff14",
    demo: "https://atsc-app.vercel.app",
    github: "https://github.com/tomas-martin/atsc-app",
    desc: "Aplicación web avanzada para gestión de club deportivo. Panel de administración y estadísticas.",
    tags: ["React", "JavaScript", "CSS"],
    category: "app",
  },
  {
    name: "Alquiler de Canchas",
    repo: "alquiler_canchas",
    lang: "PHP",
    langColor: "#00ff41",
    demo: null,
    github: "https://github.com/tomas-martin/alquiler_canchas",
    desc: "Sistema de reservas online para canchas deportivas. Backend en PHP con base de datos.",
    tags: ["PHP", "MySQL", "HTML"],
    category: "app",
  },
  {
    name: "Tienda Deportiva",
    repo: "tienda-deportiva",
    lang: "CSS",
    langColor: "#00ff41",
    demo: "https://tienda-deportiva-1.vercel.app",
    github: "https://github.com/tomas-martin/tienda-deportiva",
    desc: "E-commerce de artículos deportivos. Catálogo de productos, carrito y checkout.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "cliente",
  },
  {
    name: "Proyecto Bender",
    repo: "proyectobender",
    lang: "Dart",
    langColor: "#39ff14",
    demo: null,
    github: "https://github.com/tomas-martin/proyectobender",
    desc: "Aplicación móvil desarrollada en Flutter/Dart. Interfaz nativa para Android e iOS.",
    tags: ["Flutter", "Dart"],
    category: "mobile",
  },
  {
    name: "Inmobiliaria",
    repo: "inmobiliaria",
    lang: "TypeScript",
    langColor: "#00ff41",
    demo: "https://inmobiliaria-uufh.vercel.app/",
    github: "https://github.com/tomas-martin/inmobiliaria",
    desc: "Plataforma inmobiliaria para listado y búsqueda de propiedades. Filtros avanzados.",
    tags: ["TypeScript", "React"],
    category: "cliente",
  },
  {
    name: "Bot Turístico ITU",
    repo: "bot-turistico-itu",
    lang: "Python",
    langColor: "#39ff14",
    demo: null,
    github: "https://github.com/tomas-martin/bot-turistico-itu",
    desc: "Bot en Python para información turística. Responde consultas sobre destinos y actividades.",
    tags: ["Python", "Bot"],
    category: "app",
  },
  {
    name: "Cloud",
    repo: "cloud",
    lang: "HTML",
    langColor: "#00ff41",
    demo: "https://cloud-sooty.vercel.app/",
    github: "https://github.com/tomas-martin/cloud",
    desc: "Proyecto web de almacenamiento y gestión en la nube. Interfaz intuitiva y moderna.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "app",
  },
  {
    name: "Proyecto Vuelos",
    repo: "proyecto-vuelos-martin",
    lang: "Java",
    langColor: "#00ff41",
    demo: null,
    github: "https://github.com/tomas-martin/proyecto-vuelos-martin",
    desc: "Sistema de gestión de vuelos desarrollado en Java. Reservas, pasajeros y rutas.",
    tags: ["Java", "OOP"],
    category: "app",
  },
  {
    name: "K8s Manifests",
    repo: "k8s-manifests",
    lang: "Shell",
    langColor: "#39ff14",
    demo: null,
    github: "https://github.com/tomas-martin/k8s-manifests",
    desc: "Manifests de Kubernetes para despliegue de aplicaciones en contenedores. DevOps.",
    tags: ["Kubernetes", "Shell", "DevOps"],
    category: "devops",
  },
];

const categories = [
  { id: "all", label: "all" },
  { id: "cliente", label: "clients" },
  { id: "app", label: "apps" },
  { id: "portfolio", label: "portfolios" },
  { id: "mobile", label: "mobile" },
  { id: "devops", label: "devops" },
];

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React / Next.js", level: 85 },
  { name: "PHP", level: 65 },
  { name: "Python", level: 60 },
  { name: "Dart / Flutter", level: 55 },
  { name: "Java", level: 50 },
  { name: "Kubernetes", level: 45 },
];

const CONTACT = {
  email: "tomasmartin4572@gmail.com",
  whatsapp: "5492614664543",
  whatsappDisplay: "+54 9 261 466-4543",
  github: "https://github.com/tomas-martin",
  linkedin: "https://www.linkedin.com/in/tomas-martin-tm",
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function TypeWriter({ text, delay = 0, speed = 40, className, style }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className} style={style}>
      {displayed}
      {displayed.length < text.length && (
        <span style={{ animation: "blink 1s step-end infinite", color: "#00ff41" }}>█</span>
      )}
    </span>
  );
}

function Scanlines() {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      pointerEvents: "none",
      zIndex: 9999,
      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
    }} />
  );
}

function GlitchText({ children, style }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const run = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    };
    const t = setInterval(run, 4000 + Math.random() * 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{ position: "relative", display: "inline-block", ...style }}>
      {children}
      {glitch && (
        <>
          <span style={{
            position: "absolute", top: 0, left: "2px",
            color: "#ff0040", clipPath: "inset(30% 0 50% 0)",
            animation: "glitch1 0.15s ease",
          }}>{children}</span>
          <span style={{
            position: "absolute", top: 0, left: "-2px",
            color: "#00ffff", clipPath: "inset(60% 0 20% 0)",
            animation: "glitch2 0.15s ease",
          }}>{children}</span>
        </>
      )}
    </span>
  );
}

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const blocks = 20;
  const filled = Math.round((level / 100) * blocks);

  return (
    <div ref={ref} style={{ marginBottom: "1.4rem", fontFamily: "'Share Tech Mono', monospace" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", alignItems: "center" }}>
        <span style={{ fontSize: "13px", color: "#00ff41", letterSpacing: "0.08em" }}>
          {name}
        </span>
        <span style={{ fontSize: "11px", color: "#005500" }}>{level}%</span>
      </div>
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        <span style={{ color: "#005500", fontSize: "12px", marginRight: "4px" }}>[</span>
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "14px",
              background: i < filled && inView ? "#00ff41" : "#001a00",
              transition: `background 0.05s ease ${delay + i * 30}ms`,
              flexShrink: 0,
            }}
          />
        ))}
        <span style={{ color: "#005500", fontSize: "12px", marginLeft: "4px" }}>]</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#001500" : "#020d02",
        border: `1px solid ${hovered ? "#00ff41" : "#003300"}`,
        borderRadius: "2px",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.4s ease ${(index % 3) * 60}ms, transform 0.4s ease ${(index % 3) * 60}ms, border-color 0.2s, background 0.2s`,
        position: "relative",
        fontFamily: "'Share Tech Mono', monospace",
        cursor: "default",
      }}
    >
      {/* corner decorations */}
      <span style={{ position: "absolute", top: "4px", left: "4px", color: "#003300", fontSize: "8px", lineHeight: 1 }}>┌</span>
      <span style={{ position: "absolute", top: "4px", right: "4px", color: "#003300", fontSize: "8px", lineHeight: 1 }}>┐</span>
      <span style={{ position: "absolute", bottom: "4px", left: "4px", color: "#003300", fontSize: "8px", lineHeight: 1 }}>└</span>
      <span style={{ position: "absolute", bottom: "4px", right: "4px", color: "#003300", fontSize: "8px", lineHeight: 1 }}>┘</span>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h3 style={{ margin: 0, fontSize: "14px", color: "#00ff41", letterSpacing: "0.05em", fontWeight: "normal" }}>
          <span style={{ color: "#005500" }}>./</span>{project.name}
        </h3>
        <span style={{
          fontSize: "9px",
          padding: "2px 6px",
          border: "1px solid #003300",
          color: "#005a00",
          borderRadius: "1px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          {project.lang}
        </span>
      </div>

      <p style={{ margin: 0, fontSize: "12px", color: "#008000", lineHeight: 1.7, flexGrow: 1 }}>
        <span style={{ color: "#003300" }}># </span>{project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {project.tags.map(t => (
          <span key={t} style={{
            fontSize: "9px",
            padding: "1px 6px",
            background: "#001200",
            color: "#004400",
            border: "1px solid #002200",
            borderRadius: "1px",
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", marginTop: "2px" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "11px", color: "#00aa00", textDecoration: "none", letterSpacing: "0.05em" }}
          onMouseEnter={e => e.target.style.color = "#00ff41"}
          onMouseLeave={e => e.target.style.color = "#00aa00"}
        >
          [github]
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#00aa00", textDecoration: "none", letterSpacing: "0.05em" }}
            onMouseEnter={e => e.target.style.color = "#00ff41"}
            onMouseLeave={e => e.target.style.color = "#00aa00"}
          >
            [demo]
          </a>
        )}
      </div>
    </div>
  );
}

function ContactRow({ label, value, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        padding: "0.75rem 1rem",
        background: hovered ? "#001500" : "transparent",
        border: `1px solid ${hovered ? "#00ff41" : "#002200"}`,
        borderRadius: "2px",
        textDecoration: "none",
        transition: "all 0.2s",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      <span style={{ color: "#005500", fontSize: "13px", marginRight: "8px" }}>$</span>
      <span style={{ color: "#005500", fontSize: "12px", minWidth: "90px" }}>{label}</span>
      <span style={{ color: "#008800", fontSize: "12px", marginRight: "8px" }}>=</span>
      <span style={{ color: hovered ? "#00ff41" : "#00cc00", fontSize: "12px", flex: 1 }}>{value}</span>
      <span style={{ color: "#005500", fontSize: "11px" }}>↗</span>
    </a>
  );
}

function NavLink({ label, href, external }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "12px",
        fontFamily: "'Share Tech Mono', monospace",
        color: hovered ? "#00ff41" : "#005500",
        textDecoration: "none",
        letterSpacing: "0.08em",
        display: "flex",
        alignItems: "center",
        gap: "3px",
        transition: "color 0.2s",
      }}
    >
      {hovered ? ">" : "-"} {label}{external ? " ↗" : ""}
    </a>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const navLinks = [
    { label: "proyectos", href: "#proyectos" },
    { label: "skills", href: "#skills" },
    { label: "contacto", href: "#contacto" },
    { label: "github", href: CONTACT.github, external: true },
  ];

  return (
    <div style={{ background: "#010801", minHeight: "100vh", color: "#00ff41", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #00ff4133; color: #00ff41; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #010801; }
        ::-webkit-scrollbar-thumb { background: #003300; }
        html { scroll-behavior: smooth; }
        a { transition: color 0.2s; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes glitch1 { 0% { transform: translate(0); } 50% { transform: translate(3px, -1px); } 100% { transform: translate(0); } }
        @keyframes glitch2 { 0% { transform: translate(0); } 50% { transform: translate(-3px, 1px); } 100% { transform: translate(0); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scanMove { from { transform: translateY(-100%); } to { transform: translateY(100vh); } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.8; } 94% { opacity: 1; } }

        /* mobile nav */
        .mobile-menu { display: none; }
        .desktop-nav { display: flex; }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: block; }
        }

        /* responsive grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.75rem;
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* hero responsive */
        .hero-title { font-size: clamp(2.5rem, 10vw, 5.5rem); }
        .hero-subtitle { font-size: clamp(12px, 3vw, 16px); }
        .section-pad { padding: 5rem 1.5rem; }
        @media (max-width: 640px) {
          .section-pad { padding: 3.5rem 1rem; }
        }

        /* filter scroll */
        .filter-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .filter-row {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 4px;
          }
        }

        /* stats row */
        .stats-row { display: flex; gap: 2.5rem; flex-wrap: wrap; }

        /* mobile dropdown */
        .mobile-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #010801;
          border-bottom: 1px solid #003300;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        /* animation */
        .animate-in { animation: fadeIn 0.6s ease both; }
      `}</style>

      <Scanlines />

      {/* Moving scan line effect */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: "2px",
        background: "linear-gradient(to right, transparent, rgba(0,255,65,0.15), transparent)",
        animation: "scanMove 8s linear infinite",
        pointerEvents: "none",
        zIndex: 998,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0.875rem 1.5rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(1,8,1,0.95)",
        backdropFilter: "blur(4px)",
        borderBottom: "1px solid #002200",
        fontFamily: "'Share Tech Mono', monospace",
      }}>
        <span style={{ color: "#00ff41", fontSize: "15px", letterSpacing: "0.1em" }}>
          root@tomas-martin<span style={{ color: "#005500" }}>:~$</span>
          <span style={{ animation: "blink 1s step-end infinite", marginLeft: "4px" }}>█</span>
        </span>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ gap: "2rem", alignItems: "center" }}>
          {navLinks.map(l => <NavLink key={l.label} {...l} />)}
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(m => !m)}
          style={{
            background: "none", border: "1px solid #003300",
            color: "#00ff41", cursor: "pointer", padding: "4px 10px",
            fontFamily: "'Share Tech Mono', monospace", fontSize: "16px",
            borderRadius: "2px",
          }}
        >
          {menuOpen ? "✕" : "≡"}
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-dropdown">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#00cc00", textDecoration: "none", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", letterSpacing: "0.08em" }}
              >
                &gt; {l.label}{l.external ? " ↗" : ""}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 1.5rem 4rem",
        maxWidth: "960px",
        margin: "0 auto",
        position: "relative",
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,80,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <p style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "12px", color: "#005500",
          letterSpacing: "0.15em", marginBottom: "1.5rem",
          animation: "fadeIn 0.6s ease 0.1s both",
        }}>
          <span style={{ color: "#003300" }}># </span>DEVELOPED_BY :: Mendoza, Argentina
        </p>

        <h1 className="hero-title animate-in" style={{
          fontFamily: "'VT323', monospace",
          fontWeight: "normal",
          lineHeight: 0.95,
          color: "#00ff41",
          marginBottom: "0.5rem",
          animation: "fadeIn 0.6s ease 0.2s both, flicker 10s ease infinite",
          textShadow: "0 0 20px rgba(0,255,65,0.3)",
        }}>
          <GlitchText>TOMÁS MARTÍN</GlitchText>
        </h1>

        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "clamp(13px, 3vw, 16px)",
          color: "#008000",
          marginBottom: "2.5rem",
          lineHeight: 1.9,
          maxWidth: "520px",
          animation: "fadeIn 0.6s ease 0.35s both",
        }}>
          <TypeWriter
            text="> Desarrollador web full-stack"
            delay={600}
            speed={35}
          />
          <br />
          <TypeWriter
            text="> HTML · JS · TypeScript · PHP · Python · Flutter"
            delay={1800}
            speed={25}
          />
          <br />
          <TypeWriter
            text="> Construyendo para clientes reales desde Mendoza"
            delay={3200}
            speed={30}
          />
        </div>

        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fadeIn 0.6s ease 0.5s both",
        }}>
          <a href="#proyectos" style={{
            padding: "10px 24px",
            background: "#00ff41",
            color: "#010801",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "'Share Tech Mono', monospace",
            letterSpacing: "0.12em",
            fontWeight: "bold",
            border: "1px solid #00ff41",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "transparent"; e.target.style.color = "#00ff41"; }}
            onMouseLeave={e => { e.target.style.background = "#00ff41"; e.target.style.color = "#010801"; }}
          >
            ./ver-proyectos
          </a>
          <a href="#contacto" style={{
            padding: "10px 24px",
            background: "transparent",
            border: "1px solid #003300",
            color: "#005500",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "'Share Tech Mono', monospace",
            letterSpacing: "0.12em",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#00ff41"; e.target.style.color = "#00ff41"; }}
            onMouseLeave={e => { e.target.style.borderColor = "#003300"; e.target.style.color = "#005500"; }}
          >
            ./contactar
          </a>
        </div>

        <div className="stats-row" style={{ marginTop: "4rem", animation: "fadeIn 0.6s ease 0.65s both" }}>
          {[
            { n: projects.length, l: "repos" },
            { n: projects.filter(p => p.demo).length, l: "en prod" },
            { n: new Set(projects.map(p => p.lang)).size, l: "langs" },
          ].map(({ n, l }) => (
            <div key={l} style={{ fontFamily: "'VT323', monospace" }}>
              <div style={{ fontSize: "3.5rem", color: "#00ff41", lineHeight: 1, textShadow: "0 0 10px rgba(0,255,65,0.4)" }}>{n}</div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", color: "#004400", letterSpacing: "0.1em", marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#004400", letterSpacing: "0.18em", marginBottom: "0.5rem" }}>
            // ── REPOSITORIOS ──────────────────────
          </p>
          <h2 style={{
            fontFamily: "'VT323', monospace", fontSize: "3rem",
            fontWeight: "normal", color: "#00ff41",
            textShadow: "0 0 10px rgba(0,255,65,0.2)",
          }}>
            ls ./proyectos
          </h2>
        </div>

        <div className="filter-row" style={{ marginBottom: "2rem" }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "5px 14px",
                background: activeCategory === cat.id ? "#00ff41" : "transparent",
                border: `1px solid ${activeCategory === cat.id ? "#00ff41" : "#002200"}`,
                color: activeCategory === cat.id ? "#010801" : "#004400",
                fontSize: "11px",
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: "0.08em",
                cursor: "pointer",
                borderRadius: "1px",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              [{cat.label}]
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => <ProjectCard key={p.repo} project={p} index={i} />)}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad" style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#004400", letterSpacing: "0.18em", marginBottom: "0.5rem" }}>
            // ── STACK TÉCNICO ─────────────────────
          </p>
          <h2 style={{
            fontFamily: "'VT323', monospace", fontSize: "3rem",
            fontWeight: "normal", color: "#00ff41",
            textShadow: "0 0 10px rgba(0,255,65,0.2)",
          }}>
            cat skills.json
          </h2>
        </div>
        {skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 100} />
        ))}
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section-pad" style={{ maxWidth: "620px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#004400", letterSpacing: "0.18em", marginBottom: "0.5rem" }}>
            // ── CONEXIÓN ──────────────────────────
          </p>
          <h2 style={{
            fontFamily: "'VT323', monospace", fontSize: "3rem",
            fontWeight: "normal", color: "#00ff41",
            textShadow: "0 0 10px rgba(0,255,65,0.2)", marginBottom: "0.5rem",
          }}>
            ./contactar
          </h2>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "12px", color: "#005500", lineHeight: 1.8 }}>
            <span style={{ color: "#003300" }}>#</span> ¿Proyecto en mente? Disponible para freelance y colaboraciones.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <ContactRow label="email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactRow label="whatsapp" value={CONTACT.whatsappDisplay} href={`https://wa.me/${CONTACT.whatsapp}`} />
          <ContactRow label="linkedin" value="tomas-martin-tm" href={CONTACT.linkedin} />
          <ContactRow label="github" value="github.com/tomas-martin" href={CONTACT.github} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #002200",
        padding: "1.5rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
        fontFamily: "'Share Tech Mono', monospace",
      }}>
        <p style={{ fontSize: "10px", color: "#003300", letterSpacing: "0.1em" }}>
          © 2026 TOMÁS MARTÍN :: MENDOZA, AR :: ALL RIGHTS RESERVED
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "github", href: CONTACT.github },
            { label: "linkedin", href: CONTACT.linkedin },
            { label: "email", href: `mailto:${CONTACT.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "10px", color: "#003300", textDecoration: "none", letterSpacing: "0.1em" }}
              onMouseEnter={e => e.target.style.color = "#00ff41"}
              onMouseLeave={e => e.target.style.color = "#003300"}
            >
              [{label}]
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}