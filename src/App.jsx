import { useMemo, useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Maab Digital Library',
    category: 'WordPress',
    type: 'Website / Digital Library',
    status: 'Ongoing',
    description:
      'A WordPress-based digital library and charitable initiative focused on making educational and reading resources accessible.',
    tags: ['WordPress', 'Content Management', 'Website Administration'],
    link: 'https://maablib.org',
  },
  {
    title: 'NNK Libas',
    category: 'E-commerce',
    type: 'Online Shopping Store',
    status: 'Portfolio reference',
    description:
      'An online shopping store project included in my previous portfolio. Further project details will be added as the work is documented.',
    tags: ['E-commerce', 'Website'],
  },
  {
    title: 'Masfin General Trading LLC',
    category: 'Business',
    type: 'Business Website',
    status: 'Portfolio reference',
    description:
      'A business website project previously listed in my portfolio, associated with a general trading company in Dubai.',
    tags: ['Web Design', 'Business Website'],
  },
  {
    title: 'Karwan-e-Sadiq Travels & Tours',
    category: 'Business',
    type: 'Travel & Tours Website',
    status: 'Portfolio reference',
    description:
      'A travel and tours website project recorded in my earlier portfolio.',
    tags: ['Website', 'Travel'],
  },
  {
    title: 'Water Wheel Technologies LLC',
    category: 'Business',
    type: 'Technology Business Website',
    status: 'Portfolio reference',
    description:
      'A technology-business website project listed in my previous portfolio.',
    tags: ['Web Development', 'Business Website'],
  },
  {
    title: 'Mubahila TV',
    category: 'Media',
    type: 'Media Website',
    status: 'Portfolio reference',
    description:
      'A media-related web project recorded in my earlier portfolio.',
    tags: ['Website', 'Media'],
  },
  {
    title: 'Mir Autoparts',
    category: 'Business',
    type: 'Business Website',
    status: 'Portfolio reference',
    description:
      'An automotive business web project included in my previous portfolio.',
    tags: ['Website', 'Automotive'],
  },
  {
    title: 'Esteqlal Rent A Car LLC',
    category: 'Business',
    type: 'Video Portfolio Project',
    status: 'Portfolio reference',
    description:
      'A rent-a-car business project represented in my earlier portfolio through video.',
    tags: ['Business', 'Video'],
  },
]

const projectFilters = [
  'All',
  'WordPress',
  'E-commerce',
  'Business',
  'Media',
]

const experience = [
  {
    role: 'Freelance IT & Administrative Support',
    organization: 'Remote / Independent',
    period: 'Freelance work and projects',
    description:
      'Providing IT-related and administrative support through independent work, including website tasks, documentation, data handling, and computer-related assistance.',
  },
  {
    role: 'Computer Operator',
    organization: 'Literacy Department, Government of Punjab',
    period: '2017–2019',
    description:
      'Supported computer operations, data entry, documentation, and administrative record-keeping activities.',
  },
  {
    role: 'Computer Data Operator & Office Admin',
    organization: 'Awami Traders, Sargodha',
    period: '2011–2015',
    description:
      'Handled computer-based records, office documentation, spreadsheets, data entry, and routine administrative workflows.',
  },
  {
    role: 'Computer Data Operator',
    organization: 'Public Health Engineering, Government of Punjab',
    period: '2007–2009',
    description:
      'Performed computer data operations and supported departmental documentation and record management.',
  },
]

const skillGroups = [
  {
    title: 'Web Development',
    skills: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP', 'ASP.NET'],
  },
  {
    title: 'IT & Office Support',
    skills: [
      'Microsoft Office',
      'Data Entry',
      'Documentation',
      'Records Management',
      'Computer Troubleshooting',
      'Windows & Software Setup',
    ],
  },
  {
    title: 'Creative & Design',
    skills: [
      'Graphic Design',
      'Image Editing',
      'CorelDRAW',
      'Adobe Photoshop',
      'Print Design',
    ],
  },
  {
    title: 'Hosting & Administration',
    skills: [
      'Website Administration',
      'Web Hosting',
      'Linux / VPS',
      'Internet Research',
      'Email & Online Services',
    ],
  },
]

const learningSkills = [
  'React',
  'MERN Stack Development',
  'Artificial Intelligence with Python',
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Zamir Haider home">
          ZH<span>.</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s Talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              IT & ADMINISTRATION PROFESSIONAL
            </p>

            <h1>
              Technology,
              <br />
              creativity &
              <br />
              <span>practical solutions.</span>
            </h1>

            <p className="hero-description">
              I&apos;m <strong>Zamir Haider</strong>, an IT and administrative
              professional with experience in computer operations, office
              administration, website management, graphic design, and
              technical support. I continue to develop my skills in modern
              web technologies and software development.
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
              <span>IT SUPPORT</span>
              <span>·</span>
              <span>WEB DEVELOPMENT</span>
              <span>·</span>
              <span>OFFICE ADMINISTRATION</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portfolio introduction">
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
                  <p className="card-label">IT · ADMIN · WEB</p>
                  <h2>Zamir Haider</h2>
                  <p className="card-role">IT Professional · Developer</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </div>

            <div className="floating-tag tag-top">
              <span>✳</span> Practical experience
            </div>
            <div className="floating-tag tag-bottom">
              <span>↗</span> Always learning
            </div>
            <span className="visual-index">01 / INTRODUCTION</span>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <p className="section-kicker">ABOUT ME</p>
          <p className="intro-text">
            Detail-oriented IT and Admin Professional with experience in
            government and private organizations, supporting documentation,
            records, computer operations, websites, and technical tasks.
          </p>
          <a href="#experience" className="text-link">
            My experience <span>↗</span>
          </a>
        </section>

        <section className="about-section page-section">
          <SectionHeading
            eyebrow="WHO I AM"
            title={
              <>
                A practical background.
                <br />
                A <span>continuous learning</span> mindset.
              </>
            }
            description="My professional journey combines hands-on IT work, office administration, web-related projects, and ongoing technical learning."
          />

          <div className="about-layout">
            <div className="about-copy">
              <h3>Professional Profile</h3>
              <p>
                I am an IT and administrative professional with experience
                across government and private-sector environments. My work
                has included HR and office documentation, records
                digitization, data entry, spreadsheet management, website
                handling, graphic design, and computer troubleshooting.
              </p>
              <p>
                My practical exposure to computers and IT projects began
                before completing my BSc in 2015. Over time, I have worked
                with office applications, Windows and software setup,
                graphic design tools, website technologies, and collaborative
                software projects.
              </p>
              <p>
                I value accuracy, organized work, dependable support, and
                learning through practical implementation. I am currently
                strengthening my knowledge of React, MERN-stack development,
                and AI with Python.
              </p>
            </div>

            <aside className="about-facts">
              <div className="fact-item">
                <span className="fact-label">LOCATION</span>
                <strong>Gujrat, Punjab, Pakistan</strong>
              </div>
              <div className="fact-item">
                <span className="fact-label">EDUCATION</span>
                <strong>BSc Computer Science / IT</strong>
                <span>Virtual University of Pakistan · 2015</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">PROFESSIONAL AREAS</span>
                <strong>IT · Administration · Web · Design</strong>
              </div>
              <div className="fact-item">
                <span className="fact-label">WORK INTEREST</span>
                <strong>Remote work · Projects · Collaboration</strong>
              </div>
            </aside>
          </div>

          <div className="journey-note">
            <span className="journey-mark">ZH</span>
            <div>
              <h3>Collaborative Software Development & Practical IT Experience</h3>
              <p>
                Built practical experience through collaborative work with
                senior Virtual University students who had software and web
                development backgrounds. Contributed to real project work
                involving HTML, CSS, JavaScript, WordPress, ASP.NET, PHP, and
                related technologies. Compensation was based on the
                percentage of work contributed.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section page-section" id="skills">
          <SectionHeading
            eyebrow="SKILLS & CAPABILITIES"
            title={
              <>
                Tools I use to get
                <br />
                <span>practical work done.</span>
              </>
            }
            description="A summary of my established working skills, followed by technologies I am currently learning and improving."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="preview-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="learning-panel">
            <div>
              <p className="section-kicker">CURRENT LEARNING</p>
              <h3>Growing with modern technologies</h3>
              <p>
                These are active learning and skill-development areas. They
                are not presented as expert-level professional claims.
              </p>
            </div>
            <div className="skill-tags">
              {learningSkills.map((skill) => (
                <span className="skill-tag learning-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section page-section" id="experience">
          <SectionHeading
            eyebrow="PROFESSIONAL JOURNEY"
            title={
              <>
                Experience built through
                <br />
                <span>responsibility and practice.</span>
              </>
            }
            description="Selected roles across government and private-sector environments, with a focus on computer operations, administration, documentation, and data management."
          />

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.organization}>
                <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-content">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section page-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                Projects & work
                <br />
                <span>gallery.</span>
              </>
            }
            description="A selection of projects recorded in my current and previous portfolio. Some older entries need additional screenshots and project details, which will be added as they are verified."
          />

          <div className="project-toolbar" aria-label="Filter projects">
            <div className="filter-list">
              {projectFilters.map((filter) => (
                <button
                  className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p className="project-count">
              {filteredProjects.length} projects
            </p>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art project-art-${(index % 4) + 1}`}>
                  <span className="project-art-mark">ZH<span>.</span></span>
                  <span className="project-art-type">{project.category}</span>
                  <span className="project-art-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="project-card-body">
                  <div className="project-card-meta">
                    <span>{project.type}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="skill-tags project-tags">
                    {project.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit website <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section page-section" id="education">
          <SectionHeading
            eyebrow="EDUCATION & LEARNING"
            title={
              <>
                Qualifications and
                <br />
                <span>professional development.</span>
              </>
            }
            description="Formal education and completed professional training."
          />

          <div className="education-grid">
            <article className="education-card">
              <span className="education-year">2015</span>
              <p className="education-type">DEGREE</p>
              <h3>BSc Computer Science / IT</h3>
              <p>Virtual University of Pakistan, Lahore</p>
            </article>

            <article className="education-card">
              <span className="education-year">PBTE</span>
              <p className="education-type">DIPLOMA</p>
              <h3>Diploma in Commerce</h3>
              <p>Punjab Board of Technical Education, Lahore</p>
            </article>
          </div>

          <div className="training-panel">
            <h3>Completed DigiSkills Training</h3>
            <div className="training-list">
              <span>AI with Python</span>
              <span>Full Stack Development with MERN · DigiSkills 3.0</span>
              <span>Freelancing</span>
              <span>Virtual Assistant · Batch 07</span>
              <span>Graphic Design</span>
              <span>WordPress · Batch 08</span>
            </div>
            <p>
              Certificate images and online verification details will be
              linked here after the certificate files are added.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">LET&apos;S CONNECT</p>
          <h2>
            Have a project or opportunity?
            <br />
            Let&apos;s create something <span>meaningful.</span>
          </h2>
          <p>
            I&apos;m interested in suitable IT, administrative, website,
            remote-work, and collaborative project opportunities.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:zamir.h2008@gmail.com">
              Email Me <span>↗</span>
            </a>
            <a
              className="button button-secondary"
              href="https://wa.me/923424042017"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <p className="contact-email">zamir.h2008@gmail.com</p>
          <p className="contact-location">Gujrat, Punjab, Pakistan</p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          ZH<span>.</span>
        </a>
        <p>Designed with purpose · Zamir Haider</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}

export default App
