import { useState, useEffect, useRef } from "react";

const projects = [
  {
    name: "ATSC Futsal",
    repo: "atscfutsal",
    lang: "HTML",
    langColor: "#e34c26",
    demo: "https://atscfutsal.vercel.app",
    github: "https://github.com/tomas-martin/atscfutsal",
    desc: "Sitio web completo para club de fútbol sala. Gestión de equipos, fixtures y noticias.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "cliente",
  },
  {
    name: "Futsal Rivadavia",
    repo: "futsalrivadavia",
    lang: "JavaScript",
    langColor: "#f0db4f",
    demo: "https://futsalrivadavia.vercel.app",
    github: "https://github.com/tomas-martin/futsalrivadavia",
    desc: "Plataforma web para liga de futsal. Resultados, tabla de posiciones y calendario.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "cliente",
  },
  {
    name: "Portfolio Román",
    repo: "portfolio-Roman",
    lang: "CSS",
    langColor: "#563d7c",
    demo: "https://romanzuniga.vercel.app",
    github: "https://github.com/tomas-martin/portfolio-Roman",
    desc: "Portfolio personal diseñado y desarrollado para un cliente. Diseño moderno y responsivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
  },
  {
    name: "Portfolio Totti",
    repo: "portfolio-Totti",
    lang: "CSS",
    langColor: "#563d7c",
    demo: "https://tomasmartin.vercel.app",
    github: "https://github.com/tomas-martin/portfolio-Totti",
    desc: "Portfolio personal con diseño visual impactante. Animaciones y experiencia de usuario refinada.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
  },
  {
    name: "Taller Mecánico Integral",
    repo: "Tallermecanicointegral",
    lang: "HTML",
    langColor: "#e34c26",
    demo: "https://tallermecanicomendoza.com",
    github: "https://github.com/tomas-martin/Tallermecanicointegral",
    desc: "Sitio web profesional para taller mecánico en Mendoza. Servicios, contacto y reservas.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "cliente",
  },
  {
    name: "ATSC App",
    repo: "atsc-app",
    lang: "JavaScript",
    langColor: "#f0db4f",
    demo: "https://atsc-app.vercel.app",
    github: "https://github.com/tomas-martin/atsc-app",
    desc: "Aplicación web avanzada para gestión de club deportivo. Panel de administración y estadísticas.",
    tags: ["JavaScript", "React", "CSS"],
    category: "app",
  },
  {
    name: "Alquiler de Canchas",
    repo: "alquiler_canchas",
    lang: "PHP",
    langColor: "#8993be",
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
    langColor: "#563d7c",
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
    langColor: "#00B4AB",
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
    langColor: "#3178c6",
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
    langColor: "#3572A5",
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
    langColor: "#e34c26",
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
    langColor: "#b07219",
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
    langColor: "#89e051",
    demo: null,
    github: "https://github.com/tomas-martin/k8s-manifests",
    desc: "Manifests de Kubernetes para despliegue de aplicaciones en contenedores. DevOps.",
    tags: ["Kubernetes", "Shell", "DevOps"],
    category: "devops",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "cliente", label: "Para clientes" },
  { id: "app", label: "Aplicaciones" },
  { id: "portfolio", label: "Portfolios" },
  { id: "mobile", label: "Mobile" },
  { id: "devops", label: "DevOps" },
];

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "HTML / CSS", level: 95 },
  { name: "TypeScript", level: 70 },
  { name: "PHP", level: 65 },
  { name: "Python", level: 60 },
  { name: "Dart / Flutter", level: 55 },
  { name: "Java", level: 50 },
  { name: "Kubernetes", level: 45 },
];

// ── Contacto ──────────────────────────────────────────────
const CONTACT = {
  email: "tomasmartin4572@gmail.com",
  whatsapp: "5492614664543", // formato internacional sin el +
  whatsappDisplay: "+54 9 261 466-4543",
  github: "https://github.com/tomas-martin",
  // Reemplazá esta URL con tu perfil real de LinkedIn
  linkedin: "https://www.linkedin.com/in/tomas-martin-tm",
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{ marginBottom: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "13px", fontFamily: "'Courier Prime', monospace", color: "#c9b99a", letterSpacing: "0.05em" }}>{name}</span>
        <span style={{ fontSize: "12px", color: "#7a6a55" }}>{level}%</span>
      </div>
      <div style={{ height: "3px", background: "#2a2218", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: inView ? `${level}%` : "0%",
          background: "linear-gradient(90deg, #c9a84c, #f0d080)",
          borderRadius: "2px",
          transition: `width 1s ease ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        background: "#110f0a",
        border: "1px solid #2a2218",
        borderRadius: "4px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${(index % 3) * 80}ms, transform 0.5s ease ${(index % 3) * 80}ms`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#c9a84c";
        e.currentTarget.style.background = "#16130c";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#2a2218";
        e.currentTarget.style.background = "#110f0a";
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${project.langColor}44, transparent)` }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3 style={{ margin: 0, fontSize: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#e8dcc8", lineHeight: 1.3 }}>
          {project.name}
        </h3>
        <span style={{
          fontSize: "10px",
          padding: "2px 8px",
          border: `1px solid ${project.langColor}66`,
          color: project.langColor,
          borderRadius: "2px",
          fontFamily: "'Courier Prime', monospace",
          whiteSpace: "nowrap",
          marginLeft: "8px",
          flexShrink: 0,
        }}>
          {project.lang}
        </span>
      </div>

      <p style={{ margin: 0, fontSize: "13px", color: "#7a6a55", lineHeight: 1.6, flexGrow: 1 }}>
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map(t => (
          <span key={t} style={{
            fontSize: "10px",
            padding: "2px 7px",
            background: "#1e1a12",
            color: "#5a4e38",
            borderRadius: "2px",
            fontFamily: "'Courier Prime', monospace",
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12px", color: "#c9a84c", textDecoration: "none", fontFamily: "'Courier Prime', monospace", letterSpacing: "0.05em" }}
          onMouseEnter={e => e.target.style.color = "#f0d080"}
          onMouseLeave={e => e.target.style.color = "#c9a84c"}
        >
          ↗ código
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "12px", color: "#c9a84c", textDecoration: "none", fontFamily: "'Courier Prime', monospace", letterSpacing: "0.05em" }}
            onMouseEnter={e => e.target.style.color = "#f0d080"}
            onMouseLeave={e => e.target.style.color = "#c9a84c"}
          >
            ↗ demo
          </a>
        )}
      </div>
    </div>
  );
}

// ── Íconos SVG inline ─────────────────────────────────────
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ── Tarjeta de contacto ───────────────────────────────────
function ContactCard({ icon, label, value, href }) {
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
        gap: "14px",
        padding: "1rem 1.25rem",
        background: hovered ? "#16130c" : "#110f0a",
        border: `1px solid ${hovered ? "#c9a84c" : "#2a2218"}`,
        borderRadius: "4px",
        textDecoration: "none",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      <span style={{ color: "#c9a84c", flexShrink: 0 }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: "10px", fontFamily: "'Courier Prime', monospace", color: "#5a4e38", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
        <div style={{ fontSize: "13px", fontFamily: "'Courier Prime', monospace", color: "#c9b99a" }}>{value}</div>
      </div>
      <span style={{ marginLeft: "auto", fontSize: "14px", color: hovered ? "#c9a84c" : "#3a3228", transition: "color 0.2s" }}>↗</span>
    </a>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Links de nav — ahora incluye LinkedIn
  const navLinks = [
    { label: "proyectos", href: "#proyectos" },
    { label: "skills", href: "#skills" },
    { label: "contacto", href: "#contacto" },
    { label: "linkedin", href: CONTACT.linkedin, external: true },
  ];

  return (
    <div style={{ background: "#0c0a07", minHeight: "100vh", color: "#e8dcc8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #c9a84c33; color: #f0d080; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0c0a07; }
        ::-webkit-scrollbar-thumb { background: #2a2218; }
        a { transition: color 0.2s; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "#0c0a07dd",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #2a2218",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#c9a84c", letterSpacing: "0.1em" }}>
          TM
        </span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: "12px",
                fontFamily: "'Courier Prime', monospace",
                color: "#7a6a55",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
              onMouseLeave={e => e.currentTarget.style.color = "#7a6a55"}
            >
              {label}
              {external && <span style={{ fontSize: "10px" }}>↗</span>}
            </a>
          ))}
        </div>
      </nav>

      {/* hero */}
      <section ref={heroRef} style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem 4rem",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "20%", right: "-10%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, #c9a84c0a 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <p style={{
          fontFamily: "'Courier Prime', monospace",
          fontSize: "12px",
          color: "#c9a84c",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          animation: "fadeUp 0.8s ease 0.1s both",
        }}>
          Desarrollador Web · Mendoza, Argentina
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          color: "#e8dcc8",
          marginBottom: "2rem",
          animation: "fadeUp 0.8s ease 0.2s both",
        }}>
          Tomás<br />
          <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Martín</span>
        </h1>

        <p style={{
          fontSize: "16px",
          color: "#7a6a55",
          maxWidth: "480px",
          lineHeight: 1.8,
          marginBottom: "3rem",
          animation: "fadeUp 0.8s ease 0.3s both",
        }}>
          Construyo sitios web y aplicaciones para clientes reales.
          Desde landing pages hasta sistemas completos — con HTML, JS, TypeScript, PHP, Python y más.
        </p>

        <div style={{
          display: "flex", gap: "1.5rem", flexWrap: "wrap",
          animation: "fadeUp 0.8s ease 0.4s both",
        }}>
          <a href="#proyectos" style={{
            padding: "12px 28px",
            background: "#c9a84c",
            color: "#0c0a07",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "'Courier Prime', monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}>
            Ver proyectos
          </a>
          <a href="#contacto" style={{
            padding: "12px 28px",
            border: "1px solid #2a2218",
            color: "#7a6a55",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "'Courier Prime', monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#c9a84c"; e.target.style.color = "#c9a84c"; }}
            onMouseLeave={e => { e.target.style.borderColor = "#2a2218"; e.target.style.color = "#7a6a55"; }}
          >
            Contacto ↓
          </a>
        </div>

        <div style={{
          position: "absolute", bottom: "3rem", left: "2rem",
          display: "flex", gap: "2rem",
          animation: "fadeUp 0.8s ease 0.5s both",
        }}>
          {[
            { n: projects.length, l: "proyectos" },
            { n: projects.filter(p => p.demo).length, l: "en producción" },
            { n: new Set(projects.map(p => p.lang)).size, l: "lenguajes" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#c9a84c", lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#5a4e38", letterSpacing: "0.1em", marginTop: "4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* proyectos */}
      <section id="proyectos" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#c9a84c", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            — trabajos
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#e8dcc8" }}>
            Proyectos
          </h2>
        </div>

        {/* filtros */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "6px 16px",
                background: activeCategory === cat.id ? "#c9a84c" : "transparent",
                border: `1px solid ${activeCategory === cat.id ? "#c9a84c" : "#2a2218"}`,
                color: activeCategory === cat.id ? "#0c0a07" : "#5a4e38",
                fontSize: "11px",
                fontFamily: "'Courier Prime', monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}>
          {filtered.map((p, i) => <ProjectCard key={p.repo} project={p} index={i} />)}
        </div>
      </section>

      {/* skills */}
      <section id="skills" ref={skillsRef} style={{
        padding: "6rem 2rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#c9a84c", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            — tecnologías
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#e8dcc8" }}>
            Habilidades
          </h2>
        </div>
        {skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
        ))}
      </section>

      {/* contacto */}
      <section id="contacto" style={{
        padding: "6rem 2rem 8rem",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#c9a84c", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          — contacto
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#e8dcc8", marginBottom: "1.5rem" }}>
          Trabajemos juntos
        </h2>
        <p style={{ fontSize: "15px", color: "#7a6a55", lineHeight: 1.8, maxWidth: "440px", margin: "0 auto 3rem" }}>
          ¿Tenés un proyecto en mente? Estoy disponible para trabajos freelance y colaboraciones.
          Escribime por cualquiera de estos canales.
        </p>

        {/* tarjetas de contacto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "440px", margin: "0 auto 2.5rem" }}>
          <ContactCard
            icon={<IconMail />}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactCard
            icon={<IconWhatsApp />}
            label="WhatsApp"
            value={CONTACT.whatsappDisplay}
            href={`https://wa.me/${CONTACT.whatsapp}`}
          />
          <ContactCard
            icon={<IconLinkedIn />}
            label="LinkedIn"
            value="Tomás Martín"
            href={CONTACT.linkedin}
          />
          <ContactCard
            icon={<IconGithub />}
            label="GitHub"
            value="github.com/tomas-martin"
            href={CONTACT.github}
          />
        </div>
      </section>

      {/* footer */}
      <footer style={{
        borderTop: "1px solid #2a2218",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#3a3228", letterSpacing: "0.1em" }}>
          © 2026 Tomás Martín · Mendoza, Argentina
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: CONTACT.github },
            { label: "LinkedIn", href: CONTACT.linkedin },
            { label: "Email", href: `mailto:${CONTACT.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#3a3228", textDecoration: "none", letterSpacing: "0.1em" }}
              onMouseEnter={e => e.target.style.color = "#c9a84c"}
              onMouseLeave={e => e.target.style.color = "#3a3228"}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}