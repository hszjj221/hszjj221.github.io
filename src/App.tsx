import './App.css'

function App() {
  const techStack = [
    { category: 'Languages', items: ['Python', 'Go'] },
    { category: 'Python Frameworks', items: ['FastAPI', 'Django', 'Celery', 'SQLAlchemy'] },
    { category: 'Go Frameworks', items: ['Gin', 'Echo', 'gRPC', '标准库'] },
    { category: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
    { category: 'Infra', items: ['Docker', 'Kubernetes', 'AWS', '阿里云'] },
  ]

  const projects = [
    {
      name: 'project-alpha',
      desc: '高并发订单处理系统，支持 10k+ QPS',
      tech: 'Go, Redis, Kafka, Kubernetes',
    },
    {
      name: 'data-pipeline',
      desc: '实时数据管道，日处理数据量 1TB+',
      tech: 'Python, Flink, PostgreSQL',
    },
  ]

  return (
    <div className="terminal">
      {/* Header */}
      <header className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <span className="terminal-title">俊杰 — Backend Engineer</span>
      </header>

      {/* Content */}
      <main className="terminal-content">
        {/* About Section */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> cat about.txt
          </p>
          <div className="output">
            <h1>Backend Engineer</h1>
            <p>
              专注高并发系统和分布式架构，主要使用 <span className="highlight">Python</span> 和{' '}
              <span className="highlight">Go</span>
            </p>
            <p>喜欢写干净、可测试的代码</p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> ls tech-stack/
          </p>
          <div className="output">
            {techStack.map((stack) => (
              <div key={stack.category} className="tech-line">
                <span className="tech-category">{stack.category}/</span>
                <span className="tech-items">{stack.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> ls projects/ -la
          </p>
          <div className="output">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-name">
                  <span className="dir-icon">📁</span> {project.name}/
                </div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tech">Tech: {project.tech}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pages Section */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> ls pages/
          </p>
          <div className="output">
            <div className="pages-grid">
              <a href="https://hszjj221.github.io/2026/" target="_blank" className="page-link">
                <span className="link-icon">🔗</span> 2026/
              </a>
              <a href="https://hszjj221.github.io/tree/" target="_blank" className="page-link">
                <span className="link-icon">🌳</span> tree/
              </a>
              <a href="https://hszjj221.github.io/json/" target="_blank" className="page-link">
                <span className="link-icon">📋</span> json/
              </a>
              <a href="https://hszjj221.github.io/love/" target="_blank" className="page-link">
                <span className="link-icon">❤️</span> love/
              </a>
              <a href="https://hszjj221.github.io/year/" target="_blank" className="page-link">
                <span className="link-icon">📅</span> year/
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> cat contact.json
          </p>
          <div className="output">
            <pre className="json">
{`{
  "github": "https://github.com/hszjj221",
  "email": "your@email.com"
}`}
            </pre>
          </div>
        </section>

        {/* Footer */}
        <section className="section">
          <p className="command">
            <span className="prompt">$</span> <span className="cursor">_</span>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
