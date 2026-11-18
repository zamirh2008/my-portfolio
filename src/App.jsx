import './App.css'

function App() {
return ( <div className="portfolio"> <header className="site-header"> <a className="brand" href="#home">ZH<span>.</span></a>

    <nav className="navigation" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <a className="header-cta" href="#contact">Let's Talk <span>↗</span></a>
  </header>

  <main>
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </p>

        <h1>
          Building digital
          <br />
          experiences with
          <br />
          <span>purpose.</span>
        </h1>

        <p className="hero-description">
          Hello, I'm <strong>Zamir Haider</strong>. I’m developing my skills
          in web development and software solutions, with a focus on
          building useful, accessible, and professional digital experiences.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore My Work <span>↘</span>
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-meta">
          <span>WEB DEVELOPMENT</span>
          <span>·</span>
          <span>SOFTWARE PROJECTS</span>
          <span>·</span>
          <span>CONTINUOUS LEARNING</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio introduction graphic">
        <div className="visual-glow" />
        <div className="visual-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="profile-card">
          <div className="profile-card-top">
            <span className="card-indicator" />
            <span>PERSONAL PORTFOLIO</span>
            <span className="card-menu">•••</span>
          </div>

          <div className="monogram">ZH</div>

          <div className="profile-card-bottom">
            <div>
              <p className="card-label">CREATIVE MINDSET</p>
              <h2>Zamir Haider</h2>
              <p className="card-role">Developer · Problem Solver</p>
            </div>
            <span className="card-arrow">↗</span>
          </div>
        </div>

        <div className="floating-tag tag-top">
          <span>✳</span> Always learning
        </div>
        <div className="floating-tag tag-bottom">
          <span>↗</span> Turning ideas into reality
        </div>
        <span className="visual-index">01 / INTRODUCTION</span>
      </div>
    </section>

    <section className="intro-strip" id="about">
      <p className="section-kicker">A LITTLE ABOUT ME</p>
      <p className="intro-text">
        Curious by nature. Focused on learning. Committed to creating
        technology that solves real problems.
      </p>
      <a href="#contact" className="text-link">Let's connect <span>↗</span></a>
    </section>

    <section className="preview-section" id="skills">
      <p className="section-kicker">THE JOURNEY SO FAR</p>
      <h2>A portfolio built around <span>growth.</span></h2>
      <p>
        My skills, qualifications, projects, and professional experience
        will be presented here in a clear, organized way.
      </p>

      <div className="preview-grid">
        <article className="preview-card">
          <span className="preview-number">01</span>
          <h3>Technical Skills</h3>
          <p>Tools, technologies, and development skills.</p>
        </article>

        <article className="preview-card" id="projects">
          <span className="preview-number">02</span>
          <h3>Selected Projects</h3>
          <p>Practical work, applications, and solutions.</p>
        </article>

        <article className="preview-card">
          <span className="preview-number">03</span>
          <h3>Education & Certificates</h3>
          <p>Learning milestones and qualifications.</p>
        </article>
      </div>
    </section>

    <section className="contact-section" id="contact">
      <p className="section-kicker">HAVE A PROJECT IN MIND?</p>
      <h2>Let's create something <span>meaningful.</span></h2>
      <p>I'm interested in learning, collaborating, and exploring suitable opportunities.</p>
      <a className="button button-primary" href="mailto:zamir.h2008@gmail.com">
        Get in Touch <span>↗</span>
      </a>
    </section>
  </main>

  <footer className="site-footer">
    <a className="brand" href="#home">ZH<span>.</span></a>
    <p>Designed with purpose · Zamir Haider</p>
    <a href="#home" className="back-to-top">Back to top ↑</a>
  </footer>
</div>


)
}

export default App