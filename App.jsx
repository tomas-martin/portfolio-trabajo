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

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
        <div style={{ display: "flex", gap: "2rem" }}>
          {["proyectos", "skills", "contacto"].map(s => (
            <a key={s} href={`#${s}`} style={{
              fontSize: "12px",
              fontFamily: "'Courier Prime', monospace",
              color: "#7a6a55",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
              onMouseEnter={e => e.target.style.color = "#c9a84c"}
              onMouseLeave={e => e.target.style.color = "#7a6a55"}
            >{s}</a>
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
          <a href="https://github.com/tomas-martin" target="_blank" rel="noopener noreferrer" style={{
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
            GitHub ↗
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
        <p style={{ fontSize: "15px", color: "#7a6a55", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "440px", margin: "0 auto 3rem" }}>
          ¿Tenés un proyecto en mente? Estoy disponible para trabajos freelance y colaboraciones.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://github.com/tomas-martin" target="_blank" rel="noopener noreferrer" style={{
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
            GitHub ↗
          </a>
        </div>
      </section>

      {/* footer */}
      <footer style={{
        borderTop: "1px solid #2a2218",
        padding: "2rem",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#3a3228", letterSpacing: "0.1em" }}>
          © 2026 Tomás Martín · Mendoza, Argentina
        </p>
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
