function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">O</div>
          <div>
            <h2>OpsEcho</h2>
            <span>DevOps Assistant</span>
          </div>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Incidents</a>
          <a>Services</a>
          <a>Logs</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status">
            <span className="status-dot"></span>
            All systems operational
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">OPERATIONS CENTER</p>
            <h1>Good afternoon, Engineer</h1>
          </div>

          <div className="voice-status">
            <span className="voice-dot"></span>
            Alexa+ Connected
          </div>
        </header>

        <section className="stats">
          <div className="stat-card">
            <span>Active Incidents</span>
            <strong>3</strong>
            <small>2 high priority</small>
          </div>

          <div className="stat-card">
            <span>Services Monitored</span>
            <strong>12</strong>
            <small>All services connected</small>
          </div>

          <div className="stat-card">
            <span>Response Time</span>
            <strong>42s</strong>
            <small>Average diagnosis time</small>
          </div>

          <div className="stat-card">
            <span>System Health</span>
            <strong>98.7%</strong>
            <small>Last 24 hours</small>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel incidents-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">LIVE MONITORING</p>
                <h2>Active Incidents</h2>
              </div>
              <button>View all</button>
            </div>

            <div className="incident">
              <div className="incident-indicator high"></div>

              <div className="incident-info">
                <h3>HTTP 500 Spike</h3>
                <p>production-api</p>
                <span>Detected 4 minutes ago</span>
              </div>

              <div className="severity high-text">HIGH</div>
            </div>

            <div className="incident">
              <div className="incident-indicator medium"></div>

              <div className="incident-info">
                <h3>Database Latency</h3>
                <p>user-service</p>
                <span>Detected 11 minutes ago</span>
              </div>

              <div className="severity medium-text">MEDIUM</div>
            </div>

            <div className="incident">
              <div className="incident-indicator low"></div>

              <div className="incident-info">
                <h3>Memory Usage Warning</h3>
                <p>worker-service</p>
                <span>Detected 18 minutes ago</span>
              </div>

              <div className="severity low-text">LOW</div>
            </div>
          </div>

          <div className="panel assistant-panel">
            <p className="eyebrow">VOICE ASSISTANT</p>
            <h2>OpsEcho Assistant</h2>

            <div className="voice-circle">
              <div className="mic">●</div>
            </div>

            <p className="assistant-text">
              Ask OpsEcho to investigate an incident,
              analyze logs, or check your infrastructure.
            </p>

            <button className="voice-button">
              Start Voice Session
            </button>

            <p className="example">
              Try: "What caused the 500 errors?"
            </p>
          </div>
        </section>

        <section className="panel recent-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">ACTIVITY</p>
              <h2>Recent Diagnostics</h2>
            </div>
          </div>

          <div className="activity-row">
            <span className="activity-time">14:52</span>
            <span className="activity-icon">✓</span>
            <div>
              <strong>Database latency investigated</strong>
              <p>OpsEcho identified increased query response time.</p>
            </div>
          </div>

          <div className="activity-row">
            <span className="activity-time">14:38</span>
            <span className="activity-icon">✓</span>
            <div>
              <strong>Worker service checked</strong>
              <p>No critical errors found in the latest logs.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;