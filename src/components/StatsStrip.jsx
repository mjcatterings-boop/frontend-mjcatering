import React, { useEffect, useState } from "react";
import { api } from "../api";

const StatsStrip = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api
      .get("/api/stats")
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, []);

  if (!stats) return null;

  return (
    <section className="stats-strip">
      <div className="stats-item">
        <strong>{stats.totalEvents}+</strong>
        <span>Events Delivered</span>
      </div>
      <div className="stats-item">
        <strong>{stats.totalGuestsServed.toLocaleString()}</strong>
        <span>Guests Served</span>
      </div>
      <div className="stats-item">
        <strong>{stats.locationsCount}</strong>
        <span>Locations</span>
      </div>
      <div className="stats-item">
        <strong>{stats.yearsExperience}+</strong>
        <span>Years Experience</span>
      </div>
    </section>
  );
};

export default StatsStrip;
