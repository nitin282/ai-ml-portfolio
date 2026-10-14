import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Code2, Cpu, Database, Globe, ChartNoAxesCombined, Mail, Menu, Sparkles
} from "lucide-react";
import "./styles.css";

const skills = [
  { icon: Code2, title: "Programming", items: ["Python", "SQL", "JavaScript"] },
  { icon: Database, title: "Data & Analysis", items: ["Pandas", "NumPy", "Data Cleaning"] },
  { icon: BrainCircuit, title: "Machine Learning", items: ["Scikit-learn", "Classification", "Regression"] },
  { icon: ChartNoAxesCombined, title: "Visualization", items: ["Matplotlib", "Seaborn", "Plotly"] },
];

const projects = [
  {
    number: "01",
    category: "NLP · CLASSIFICATION",
    title: "Email Spam Detection",
    description: "A text-classification project that identifies spam messages using NLP techniques and a Naive Bayes model.",
    stack: ["Python", "NLP", "Naive Bayes"],
    result: "Reported accuracy: 89.5%",
    icon: "✉"
  },
  {
    number: "02",
    category: "DATA ANALYSIS",
    title: "Amazon Review Analysis",
    description: "Explore customer review patterns, sentiment signals, and product feedback to uncover useful insights.",
    stack: ["Python", "Pandas", "Visualization"],
    result: "Exploratory analysis",
    icon: "◉"
  },
  {
    number: "03",
    category: "PREDICTIVE ANALYTICS",
    title: "Customer Churn Prediction",
    description: "A machine-learning workflow to study customer behavior and predict which customers may leave a service.",
    stack: ["Scikit-learn", "Classification", "Metrics"],
    result: "Model evaluation",
    icon: "↗"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nitin Chouhan home">
          <span className="brand-mark"><BrainCircuit size={19} /></span>
          <span>NITIN<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> BCA STUDENT · AI / MACHINE LEARNING</div>
            <h1>Building ideas<br />into <span className="gradient-text">intelligent</span><br />solutions<span className="gradient-text">.</span></h1>
            <p className="hero-description">I’m Nitin Chouhan — a BCA student exploring machine learning, data, and the ideas that turn raw information into useful outcomes.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#about">More about me <ArrowDown size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-number">03</span><span className="meta-label">Featured projects</span></div>
              <div><span className="meta-number">04</span><span className="meta-label">Skill areas</span></div>
              <div><span className="meta-number">∞</span><span className="meta-label">Curiosity</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative futuristic AI graphic">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="core-glow" />
            <div className="core"><BrainCircuit size={78} strokeWidth={1.15} /></div>
            <div className="float-card float-card-top"><span className="mini-icon"><Sparkles size={15} /></span><span><b>Learning in progress</b><small>Machine intelligence</small></span></div>
            <div className="float-card float-card-bottom"><span className="signal-bars"><i /><i /><i /><i /></span><span><b>Data → Insight</b><small>Build · Test · Improve</small></span></div>
            <div className="orbit-label label-one">MODEL / 01</div>
            <div className="orbit-label label-two">NEURAL SYSTEMS</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span className="muted-heading">Driven by data.</span></h2>
            <div className="about-copy">
              <p>I’m pursuing my Bachelor of Computer Applications (BCA) and building a strong foundation in Python, data analysis, and machine learning.</p>
              <p>I enjoy turning concepts into practical projects — learning how models work, how to evaluate them, and how to communicate results clearly. My current goal is to grow into an AI/ML Engineer.</p>
              <div className="text-link-row"><span className="tiny-line" /> Always learning, always iterating.</div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker">02 / TOOLKIT</div><h2>Tools I’m learning<br /><span className="muted-heading">to build with.</span></h2></div>
            <p>A growing toolkit for exploring data, training models, and building useful applications.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, index) => (
              <article className="skill-card" key={title} style={{ "--delay": `${index * 90}ms` }}>
                <div className="skill-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
                <span className="card-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading">
            <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects over<br /><span className="muted-heading">promises.</span></h2></div>
            <p>Practical work is the proof. These projects reflect my journey with data and machine learning.</p>
          </div>
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-symbol">{project.icon}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-side">
                  <span className="project-result">{project.result}</span>
                  <a href="#contact" aria-label={`Ask me about ${project.title}`} className="project-link"><ArrowUpRight size={20} /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note"><Cpu size={15} /> Replace project summaries with your actual GitHub repositories, screenshots, and verified results before publishing.</p>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb"><BrainCircuit size={38} /></div>
            <div className="section-kicker">04 / CONTACT</div>
            <h2>Let’s build something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>Have a project idea, internship opportunity, or just want to talk about AI and data? I’d love to connect.</p>
            <a className="button button-primary" href="mailto:your.email@example.com">Say hello <Mail size={17} /></a>
            <div className="contact-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Globe size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark"><BrainCircuit size={17} /></span><span>NITIN<span className="brand-dot">.</span></span></a>
        <span>Designed with curiosity · © {new Date().getFullYear()} Nitin Chouhan</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
