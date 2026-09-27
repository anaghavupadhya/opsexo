import { useState } from "react";

function App() {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const incidents = [
    {
      id: 1,
      title: "HTTP 500 Spike",
      service: "production-api",
      severity: "HIGH",
      time: "Detected 4 minutes ago",
    },
    {
      id: 2,
      title: "Database Latency",
      service: "user-service",
      severity: "MEDIUM",
      time: "Detected 11 minutes ago",
    },
    {
      id: 3,
      title: "Memory Usage Warning",
      service: "worker-service",
      severity: "LOW",
      time: "Detected 18 minutes ago",
    },
  ];

  if (selectedIncident) {
    return (
      <IncidentDetails
        incident={selectedIncident}
        onBack={() => setSelectedIncident(null)}
      />
    );
  }

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

            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="incident clickable"
                onClick={() => setSelectedIncident(incident)}
              >
                <div
                  className={`incident-indicator ${
                    incident.severity === "HIGH"
                      ? "high"
                      : incident.severity === "MEDIUM"
                      ? "medium"
                      : "low"
                  }`}
                ></div>

                <div className="incident-info">
                  <h3>{incident.title}</h3>
                  <p>{incident.service}</p>
                  <span>{incident.time}</span>
                </div>

                <div
                  className={`severity ${
                    incident.severity === "HIGH"
                      ? "high-text"
                      : incident.severity === "MEDIUM"
                      ? "medium-text"
                      : "low-text"
                  }`}
                >
                  {incident.severity}
                </div>
              </div>
            ))}
          </div>

          <div className="panel assistant-panel">
            <p className="eyebrow">VOICE ASSISTANT</p>

            <h2>OpsEcho Assistant</h2>

            <div className="voice-circle">
              <div className="mic">●</div>
            </div>

            <p className="assistant-text">
              Ask OpsEcho to investigate an incident, analyze logs, or check
              your infrastructure.
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
              <p>
                OpsEcho identified increased query response time.
              </p>
            </div>
          </div>

          <div className="activity-row">
            <span className="activity-time">14:38</span>
            <span className="activity-icon">✓</span>

            <div>
              <strong>Worker service checked</strong>
              <p>
                No critical errors found in the latest logs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


function IncidentDetails({ incident, onBack }) {
  const [remediated, setRemediated] = useState(false);

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
          <a onClick={onBack}>Dashboard</a>
          <a className="active">Incident</a>
          <a>Services</a>
          <a>Logs</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status">
            <span className="status-dot"></span>
            Monitoring active
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <button className="back-button" onClick={onBack}>
              ← Back to Dashboard
            </button>

            <p className="eyebrow">INCIDENT INVESTIGATION</p>

            <h1>{incident.title}</h1>

            <p className="incident-subtitle">
              {incident.service} · Detected 4 minutes ago
            </p>
          </div>

          <div className="voice-status">
            <span className="voice-dot"></span>
            Alexa+ Connected
          </div>
        </header>

        <section className="incident-summary">
          <div className="summary-card">
            <span>Severity</span>
            <strong className="high-text">{incident.severity}</strong>
          </div>

          <div className="summary-card">
            <span>Status</span>
            <strong>{remediated ? "RESOLVED" : "INVESTIGATING"}</strong>
          </div>

          <div className="summary-card">
            <span>Service</span>
            <strong>{incident.service}</strong>
          </div>

          <div className="summary-card">
            <span>Detected</span>
            <strong>4 min ago</strong>
          </div>
        </section>

        <section className="details-grid">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">CLOUDWATCH</p>
                <h2>Recent Logs</h2>
              </div>

              <span className="live-label">
                LIVE
              </span>
            </div>

            <div className="logs">
              <LogLine
                time="14:56:12"
                type="ERROR"
                message="Database connection timeout"
              />

              <LogLine
                time="14:56:14"
                type="ERROR"
                message="Request failed with HTTP 500"
              />

              <LogLine
                time="14:56:15"
                type="ERROR"
                message="Unable to acquire database connection"
              />

              <LogLine
                time="14:56:17"
                type="WARN"
                message="Connection pool exhausted"
              />

              <LogLine
                time="14:56:19"
                type="ERROR"
                message="API request returned status code 500"
              />

              <LogLine
                time="14:56:21"
                type="ERROR"
                message="Database connection timeout"
              />
            </div>
          </div>

          <div className="panel diagnosis-panel">
            <p className="eyebrow">AI ANALYSIS</p>

            <h2>OpsEcho Diagnosis</h2>

            <div className="diagnosis-box">
              <div className="diagnosis-icon">AI</div>

              <div>
                <strong>Likely database connectivity issue</strong>

                <p>
                  Multiple database connection timeouts and an exhausted
                  connection pool were detected in the latest logs.
                </p>
              </div>
            </div>

            <div className="confidence">
              <div>
                <span>Diagnosis confidence</span>
                <strong>91%</strong>
              </div>

              <div className="confidence-bar">
                <div></div>
              </div>
            </div>

            <div className="recommendation">
              <p className="eyebrow">RECOMMENDED ACTION</p>

              <h3>Restart affected service</h3>

              <p>
                Restart the production-api service after confirming that the
                database is reachable.
              </p>
            </div>

            {!remediated ? (
              <button
                className="remediation-button"
                onClick={() => setRemediated(true)}
              >
                Confirm Remediation
              </button>
            ) : (
              <div className="resolved-message">
                ✓ Remediation confirmed successfully
              </div>
            )}

            <p className="safety-note">
              OpsEcho requires confirmation before performing infrastructure
              actions.
            </p>
          </div>
        </section>

        <section className="panel timeline-panel">
          <p className="eyebrow">INCIDENT TIMELINE</p>

          <div className="timeline">
            <TimelineItem
              time="14:52"
              title="Incident detected"
              text="HTTP 500 error rate crossed the configured threshold."
            />

            <TimelineItem
              time="14:54"
              title="Logs collected"
              text="Recent CloudWatch logs were retrieved for analysis."
            />

            <TimelineItem
              time="14:55"
              title="AI diagnosis generated"
              text="OpsEcho identified a likely database connectivity issue."
            />

            <TimelineItem
              time="Now"
              title={remediated ? "Remediation completed" : "Awaiting confirmation"}
              text={
                remediated
                  ? "The recommended remediation has been confirmed."
                  : "Engineer confirmation is required before infrastructure changes."
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}


function LogLine({ time, type, message }) {
  return (
    <div className="log-line">
      <span className="log-time">{time}</span>

      <span
        className={`log-type ${
          type === "ERROR" ? "error-log" : "warn-log"
        }`}
      >
        {type}
      </span>

      <span className="log-message">{message}</span>
    </div>
  );
}


function TimelineItem({ time, title, text }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span>{time}</span>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}


export default App;