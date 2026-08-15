const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path
      d={diagonal ? "M5 15 15 5M7 5h8v8" : "M4 10h12m-4-4 4 4-4 4"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Spark = () => (
  <svg aria-hidden="true" viewBox="0 0 28 28" fill="none">
    <path d="M14 1c.4 8.6 4.4 12.6 13 13-8.6.4-12.6 4.4-13 13-.4-8.6-4.4-12.6-13-13C9.6 13.6 13.6 9.6 14 1Z" fill="currentColor" />
  </svg>
);

const whatsappUrl =
  "https://wa.me/5493813540133?text=Hola%20More%2C%20vi%20tu%20p%C3%A1gina%20y%20quiero%20consultarte%20por%20el%20desarrollo%20de%20una%20p%C3%A1gina%20web%20o%20sistema.%20Mi%20idea%20es...";

const projects = [
  {
    number: "01",
    title: "MoneyTrack",
    eyebrow: "Finanzas personales",
    description:
      "Gestor de ingresos, gastos, ahorros y objetivos con reportes visuales, filtros y exportación de datos.",
    tags: ["React", "Vite", "Supabase", "PWA"],
    className: "project-money",
    visual: (
      <div className="money-ui" aria-hidden="true">
        <div className="money-top"><span>Balance mensual</span><b>•••</b></div>
        <strong>$ 285.400</strong>
        <div className="money-bars">
          <i style={{ height: "34%" }}></i><i style={{ height: "52%" }}></i>
          <i style={{ height: "43%" }}></i><i style={{ height: "68%" }}></i>
          <i style={{ height: "58%" }}></i><i style={{ height: "86%" }}></i>
          <i style={{ height: "72%" }}></i>
        </div>
        <div className="money-cards"><span>Ingresos <b>+24%</b></span><span>Ahorro <b>Meta 78%</b></span></div>
      </div>
    ),
  },
  {
    number: "02",
    title: "MiPeque",
    eyebrow: "Organización familiar",
    description:
      "Aplicación familiar para organizar consultas, tratamientos, vacunas, documentos y recordatorios importantes.",
    tags: ["React", "Supabase", "Web Push", "Vercel"],
    className: "project-peque",
    visual: (
      <div className="peque-ui" aria-hidden="true">
        <div className="peque-avatar">M</div>
        <div><small>Próximo recordatorio</small><b>Vitamina · 20:30</b></div>
        <span className="peque-check">✓</span>
        <div className="peque-row"><i></i><i></i><i></i></div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Clases de Manejo Tuc",
    eyebrow: "Reservas y administración",
    description:
      "Sitio de reservas con disponibilidad, fichas de alumnas, pagos, observaciones y panel de gestión.",
    tags: ["JavaScript", "Supabase", "Responsive", "Vercel"],
    className: "project-drive",
    visual: (
      <div className="calendar-ui" aria-hidden="true">
        <div className="calendar-head"><b>Agosto</b><span>‹ &nbsp; ›</span></div>
        <div className="calendar-grid">
          {["L", "M", "M", "J", "V", "S", "D", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"].map((day, index) => (
            <span key={`${day}-${index}`} className={day === "14" ? "active" : ""}>{day}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Alerta Plus",
    eyebrow: "Gestión de ventas",
    description:
      "Plataforma con roles de administrador y vendedor, encuestas, estados, métricas y seguimiento comercial.",
    tags: ["Node.js", "Express", "JavaScript", "Railway"],
    className: "project-alert",
    visual: (
      <div className="alert-ui" aria-hidden="true">
        <div className="alert-stat"><small>Ventas del mes</small><strong>24</strong><span>↑ 18%</span></div>
        <div className="alert-list"><i></i><i></i><i></i><i></i></div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="More, inicio">
          <span className="brand-mark">M</span>
          <span>more<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
        </div>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hablemos <Arrow />
        </a>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="availability"><i></i> Disponible para nuevos proyectos</div>
          <h1>Transformo ideas en <em>experiencias digitales</em> que funcionan.</h1>
          <p>
            Diseño y desarrollo páginas web y sistemas a medida para negocios,
            profesionales y proyectos que quieren crecer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contame tu idea <Arrow />
            </a>
            <a className="text-link" href="#proyectos">Ver mis proyectos <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Muestra visual de interfaces desarrolladas">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="code-chip chip-react">React</div>
          <div className="code-chip chip-sql">SQL</div>
          <div className="code-chip chip-js">JS</div>
          <div className="browser-card">
            <div className="browser-bar"><i></i><i></i><i></i><span>panel.more.dev</span></div>
            <div className="browser-body">
              <div className="mini-sidebar"><b>M</b><i></i><i></i><i></i><i></i></div>
              <div className="mini-content">
                <div className="mini-header"><div><small>Hola,</small><strong>Buen día 👋</strong></div><span></span></div>
                <div className="mini-stats"><i></i><i></i><i></i></div>
                <div className="mini-chart"><small>Actividad</small><div className="chart-lines"><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
                <div className="mini-bottom"><span></span><span></span></div>
              </div>
            </div>
          </div>
          <div className="floating-note"><span>✓</span><div><b>Diseño adaptable</b><small>Listo para cada pantalla</small></div></div>
          <div className="hero-spark"><Spark /></div>
        </div>
      </section>

      <div className="marquee" aria-label="Tecnologías y especialidades">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <div className="marquee-group" key={group} aria-hidden={group === 1}>
              <span>Diseño web</span><i>✦</i><span>Sistemas a medida</span><i>✦</i>
              <span>Interfaces intuitivas</span><i>✦</i><span>Desarrollo responsive</span><i>✦</i>
            </div>
          ))}
        </div>
      </div>

      <section className="services section shell" id="servicios">
        <div className="section-heading">
          <p className="kicker">Lo que puedo crear para vos</p>
          <h2>Soluciones digitales pensadas para <em>tu realidad.</em></h2>
          <p className="heading-note">Sin plantillas genéricas. Cada proyecto parte de un problema concreto y se adapta a cómo trabajás.</p>
        </div>
        <div className="service-grid">
          <article className="service-card service-lime">
            <div className="service-top"><span>01</span><div className="service-icon">↗</div></div>
            <h3>Páginas web</h3>
            <p>Sitios atractivos, rápidos y adaptados a celulares para mostrar tu negocio y convertir visitas en consultas.</p>
            <ul><li>Landing pages</li><li>Webs profesionales</li><li>Catálogos de servicios</li></ul>
          </article>
          <article className="service-card service-dark">
            <div className="service-top"><span>02</span><div className="service-icon">⌘</div></div>
            <h3>Sistemas a medida</h3>
            <p>Herramientas que ordenan tareas, datos y procesos para que tu trabajo sea más simple y eficiente.</p>
            <ul><li>Paneles administrativos</li><li>Reservas y turnos</li><li>Gestión y reportes</li></ul>
          </article>
          <article className="service-card service-violet">
            <div className="service-top"><span>03</span><div className="service-icon">✦</div></div>
            <h3>Mejoras y soporte</h3>
            <p>Actualizo, optimizo y sumo funciones a proyectos existentes para que sigan creciendo con vos.</p>
            <ul><li>Diseño responsive</li><li>Nuevas funciones</li><li>Corrección de errores</li></ul>
          </article>
        </div>
      </section>

      <section className="work section" id="proyectos">
        <div className="shell">
          <div className="section-heading work-heading">
            <p className="kicker">Proyectos seleccionados</p>
            <h2>Ideas reales, convertidas en <em>productos útiles.</em></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <div className="project-content">
                  <div className="project-number">{project.number} / 04</div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-visual">{project.visual}</div>
              </article>
            ))}
          </div>
          <a className="github-link" href="https://github.com/moremh" target="_blank" rel="noreferrer">
            Ver más trabajo en GitHub <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="about section shell" id="sobre-mi">
        <div className="about-visual">
          <div className="about-card">
            <span className="about-code">&lt;more /&gt;</span>
            <div className="portrait-mark">M<span>✦</span></div>
            <p>Curiosidad<br />+ código<br />+ diseño</p>
          </div>
          <div className="about-sticker">Siempre<br />aprendiendo <span>↗</span></div>
        </div>
        <div className="about-copy">
          <p className="kicker">Un poco sobre mí</p>
          <h2>Hola, soy More. <em>Desarrollo con intención.</em></h2>
          <p>
            Soy estudiante de segundo año de la Tecnicatura en Programación y
            desarrolladora junior. Me gusta entender cómo funciona un negocio,
            detectar qué se puede simplificar y convertirlo en una solución clara.
          </p>
          <p>
            Ya trabajé en proyectos de finanzas, salud familiar, ventas y reservas.
            En cada uno combino diseño, organización y tecnología para construir
            herramientas lindas por fuera y útiles por dentro.
          </p>
          <div className="skills">
            {['JavaScript', 'React', 'HTML & CSS', 'Node.js', 'Supabase', 'SQL', 'Git & GitHub', 'Vercel'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="shell">
          <div className="section-heading process-heading">
            <p className="kicker">Cómo trabajamos</p>
            <h2>Un proceso simple, <em>sin vueltas.</em></h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Te escucho", "Me contás tu idea, necesidad y cómo trabajás hoy."],
              ["02", "Lo diseñamos", "Ordeno la información y preparo una experiencia clara."],
              ["03", "Lo construyo", "Desarrollo, pruebo y te muestro los avances del proyecto."],
              ["04", "Lo ponemos en marcha", "Publicamos la solución y te explico cómo usarla."],
            ].map(([number, title, description]) => (
              <article key={number}><span>{number}</span><i></i><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section shell" id="contacto">
        <div className="contact-card">
          <div className="contact-orb"><Spark /></div>
          <p className="kicker">¿Tenés una idea?</p>
          <h2>Hagamos algo <em>increíble</em> con ella.</h2>
          <p>Contame qué necesitás por WhatsApp y vemos cuál es la mejor forma de llevarlo a la realidad.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Escribirme por WhatsApp <Arrow diagonal />
          </a>
          <small>Disponible para proyectos web y sistemas a medida</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand brand-footer" href="#inicio"><span className="brand-mark">M</span><span>more<span className="brand-dot">.</span></span></a>
          <p>Diseño y desarrollo digital desde Tucumán, Argentina.</p>
          <div><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://github.com/moremh" target="_blank" rel="noreferrer">GitHub</a><a href="#inicio">Volver arriba ↑</a></div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar a More por WhatsApp"
      >
        <span className="whatsapp-float-label">¿Tenés una idea?</span>
        <span className="whatsapp-float-icon" aria-hidden="true">☎</span>
      </a>
    </main>
  );
}
