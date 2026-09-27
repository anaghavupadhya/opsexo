const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getIncidents() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/incidents`);

    if (!response.ok) {
      throw new Error("Failed to fetch incidents");
    }

    return await response.json();
  } catch (error) {
    console.log("Backend not connected. Using mock data.");

    return [
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
  }
}

export async function investigateIncident(incidentId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/incidents/${incidentId}/investigate`
    );

    if (!response.ok) {
      throw new Error("Failed to investigate incident");
    }

    return await response.json();
  } catch (error) {
    console.log("Backend not connected. Using mock diagnosis.");

    return {
      diagnosis: "Likely database connectivity issue",
      explanation:
        "Multiple database connection timeouts and an exhausted connection pool were detected in the latest logs.",
      confidence: 91,
      recommendedAction: "Restart affected service",
    };
  }
}

export async function confirmRemediation(incidentId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/incidents/${incidentId}/remediate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Remediation failed");
    }

    return await response.json();
  } catch (error) {
    console.log("Backend not connected. Simulating remediation.");

    return {
      success: true,
      message: "Remediation confirmed successfully",
    };
  }
}