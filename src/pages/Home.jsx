import React from "react";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to College Website 🎓</h1>
        <p>
          Empowering students with knowledge, skills, and opportunities for a
          brighter future.
        </p>
        <button className="btn">Explore More</button>
      </div>

      {/* About Section */}
      <div className="section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Experienced Faculty</li>
          <li>✔ Modern Infrastructure</li>
          <li>✔ Industry-Oriented Programs</li>
          <li>✔ Excellent Placement Support</li>
        </ul>
      </div>

      {/* Mission */}
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          To empower students with knowledge, skills, and values that prepare
          them for successful careers and responsible citizenship.
        </p>
      </div>

      {/* Events Preview */}
      <div className="section">
        <h2>Upcoming Events</h2>
        <p>
          Stay connected with workshops, seminars, cultural activities, and
          technical events throughout the academic year.
        </p>
        <button className="btn">View Events</button>
      </div>

    </div>
  );
}

export default Home;