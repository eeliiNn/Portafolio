const projects = [
  {
    name: "Crusty Bakery",
    stack: ".NET · Android · Web",
    href: "https://github.com/eeliiNn/CrustyBakery",
    image: "/projects/crusty-bakery.png",
  },
  {
    name: "Pharma One",
    stack: ".NET · Desktop · Web",
    href: "https://github.com/eeliiNn/PharmaOne",
    image: "/projects/pharma-one.png",
  },
  {
    name: "Impulsa",
    stack: ".NET · Android",
    href: "https://github.com/eeliiNn/ImpulsaFWA",
    image: "/projects/impulsa.png",
  },
];

const skills = [
  { title: "Desarrollo", items: ["C#", "Java", "Python", "JavaScript"] },
  { title: "Web", items: ["React", "Next.js", "HTML", "CSS", "Node.js"] },
  { title: "Datos", items: ["SQL", "MySQL", "SQL Server"] },
];

export default function Home() {
  return (
    <main className="page">
      <div className="card">
        <header className="hero">
          <div className="heroBg" aria-hidden="true"></div>
          <div className="heroContent">
            <div className="heroText">
              <p className="eyebrow">Hi, I&rsquo;m</p>
              <h1>
                Elizabeth
                <br />
                Navidad
              </h1>
              <p className="role">Desarrolladora de Software Junior</p>
            </div>
            <div className="photoWrap">
              <img
                src="/profile-reference.jpg"
                alt="Elizabeth Navidad"
                className="photo"
              />
            </div>
          </div>
        </header>

        <section className="section" id="proyectos">
          <h2>
            Mis <span>Proyectos</span>
          </h2>
          <div className="projects">
            {projects.map((project) => (
              <article className="projectCard" key={project.name}>
                <div className="projectImage">
                  <img src={project.image} alt={project.name} />
                </div>
                <h3>{project.name}</h3>
                <p>{project.stack}</p>
                <a
                  className="viewBtn"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="habilidades">
          <h2>
            Mis <span>Habilidades</span>
          </h2>
          <div className="skillsGrid">
            {skills.map((skill) => (
              <article className="skillCard" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="sobre-mi">
          <h2>
            Sobre <span>Mi</span>
          </h2>
          <p className="aboutText">
            Desarrolladora de software junior con experiencia en automatización,
            IoT y IA. Cuento con habilidades clave en comunicación, gestión de
            procesos y liderazgo gracias a mi experiencia en AIESEC (OGx),
            combinando competencias técnicas y organizativas para lograr
            resultados.
          </p>
        </section>

        <section className="section documentsSection" id="documentos">
  <h2>
    Mis <span>Documentos</span>
  </h2>

  <p className="documentsIntro">
    Conoce más sobre mi experiencia, formación y habilidades profesionales.
  </p>

  <div className="documentsGrid">

    <article className="documentCard">
      <div className="documentIcon">
        <span>PDF</span>
      </div>

      <div className="documentInfo">
        <span className="documentType">Documento profesional</span>

        <h3>Hoja de Vida</h3>

        <p>
          Experiencia, formación, habilidades técnicas,
          certificaciones y proyectos.
        </p>

        <div className="documentActions">
          <a
            href="/documents/hoja-de-vida-elizabeth.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="documentPrimary"
          >
            Ver documento
          </a>

          <a
            href="/documents/hoja-de-vida-elizabeth.pdf"
            download
            className="documentDownload"
          >
            Descargar ↓
          </a>
        </div>
      </div>
    </article>


    <article className="documentCard">
        <div className="documentIcon">
          <span>CV</span>
        </div>

        <div className="documentInfo">
          <span className="documentType">Currículum profesional</span>

          <h3>Currículum</h3>

          <p>
            Perfil profesional, proyectos, tecnologías,
            educación y experiencia.
          </p>

          <div className="documentActions">
            <a
              href="/documents/curriculum-elizabeth.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="documentPrimary"
            >
              Ver documento
            </a>

            <a
              href="/documents/curriculum-elizabeth.pdf"
              download
              className="documentDownload"
            >
              Descargar ↓
            </a>
          </div>
        </div>
      </article>

    </div>
  </section>

        <footer className="section" id="contacto">
          <h2>Contacto</h2>

            <form
              action="https://formspree.io/f/mqpabnzy"
              method="POST"
              className="contactForm"
            >
              <div className="formGroup">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Correo</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contactBtn">
                Enviar mensaje
              </button>
            </form>

          <a className="phone" href="#">
            +503 6012 9004
          </a>
          <a className="email" href="#">
            elizabeth7navidad@gmail.com
          </a>
        </footer>
      </div>
    </main>
  );
}
