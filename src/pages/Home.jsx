// import React from "react";
// import { Link } from "react-router-dom";
// import StatsStrip from "../components/StatsStrip.jsx";
// import heroVideo from "../assets/homevedio.mp4";
// import location from "../assets/location3.jpg";
// import menu from "../assets/homemenu.jpg";
// import seating1 from "../assets/seating1.jpg";
// import seating2 from "../assets/seating2.jpg";
// import stage1 from "../assets/stage1.jpg";
// import stage2 from "../assets/stage2.jpg";

// const Home = () => {
//   return (
//     <div className="page home-page">
//       {/* FULL VIDEO HERO */}
//       <section className="hero hero-video">
//         {/* Background video */}
//         <video
//           className="hero-video-bg"
//           src={heroVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         {/* Dark overlay on top of video */}
//         <div className="hero-video-overlay" />

//         {/* Content on top of video */}
//         <div className="hero-content">
//           <h1>End-to-End Catering &amp; Event Setup — Without Price Confusion</h1>
//           <p>
//             We handle food, locations, seating, decor, stages and full event
//             execution. You just pick what you want, and get a custom quote on
//             WhatsApp.
//           </p>

//           <div className="hero-actions">
//             <Link to="/get-quote" className="btn btn-primary">
//               Plan My Event
//             </Link>
//             <Link to="/menu" className="btn btn-outline">
//               View Menu
//             </Link>
//           </div>

//           <ul className="hero-tags">
//             <li>Weddings</li>
//             <li>Nikkah</li>
//             <li>Birthdays</li>
//             <li>Corporate</li>
//             <li>Farmhouses &amp; Open Areas</li>
//           </ul>
//         </div>
//       </section>

//       {/* STATS UNDER HERO */}
//       <StatsStrip />

//       {/* REST OF PAGE UNDER HERO */}
//       <section className="services-grid">
//         <h2>Everything in One Place</h2>
//         <p className="section-subtitle">
//           No hotel? No problem. We bring the full setup to farmhouses, open
//           areas, rooftops or your provided venue.
//         </p>
//         <div className="grid">
//           <div className="card">
//             <h3>Food &amp; Live Catering</h3>
//             <p>
//               Complete menu options: starters, main course, BBQ, desserts &
//               drinks. You choose, we execute.
//             </p>
//             <Link to="/menu" className="card-link">
//               Explore Menu →
//             </Link>
//           </div>

//           <div className="card">
//             <h3>Locations &amp; Farmhouses</h3>
//             <p>
//               Curated farmhouses, rooftops and open areas for weddings, nikkah,
//               birthdays and more.
//             </p>
//             <Link to="/locations" className="card-link">
//               See Locations →
//             </Link>
//           </div>

//           <div className="card">
//             <h3>Seating &amp; Layouts</h3>
//             <p>
//               Classic, premium and luxury seating plans tailored to your guest
//               count and vibe.
//             </p>
//             <Link to="/get-quote" className="card-link">
//               Choose Seating →
//             </Link>
//           </div>

//           <div className="card">
//             <h3>Stages &amp; Decorations</h3>
//             <p>
//               Nikkah, mehndi, wedding, birthday and corporate stages with custom
//               decor.
//             </p>
//             <Link to="/get-quote" className="card-link">
//               Select Decor →
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="section-cta">
//         <div className="section-cta-inner">
//           <h2>Ready to Get a Custom Quote?</h2>
//           <p>
//             Pick your event type, menu, location, seating and stage. We’ll
//             receive everything on WhatsApp and respond with a tailored quote.
//           </p>
//           <Link to="/get-quote" className="btn btn-primary">
//             Start Get-Quote Flow
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import StatsStrip from "../components/StatsStrip.jsx";

import heroVideo from "../assets/homevedio.mp4";
import homeMenuImg from "../assets/homemenu.jpg";
import locationImg from "../assets/location3.jpg";
import seatingImg1 from "../assets/seating1.jpg";
import seatingImg2 from "../assets/seating2.jpg";
import stageImg1 from "../assets/stage1.jpg";
import stageImg2 from "../assets/stage2.jpg";

const Home = () => {
  return (
    <div className="page home-page">
      {/* FULL VIDEO HERO */}
      <section className="hero hero-video">
        {/* Background video */}
        <video
          className="hero-video-bg"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay on top of video */}
        <div className="hero-video-overlay" />

        {/* Content on top of video */}
        <div className="hero-content">
          <h1>End-to-End Catering &amp; Event Setup — Without Price Confusion</h1>
          <p>
            We handle food, locations, seating, decor, stages and full event
            execution. You just pick what you want, and get a custom quote on
            WhatsApp.
          </p>

          <div className="hero-actions">
            <Link to="/get-quote" className="btn btn-primary">
              Plan My Event
            </Link>
            <Link to="/menu" className="btn btn-outline">
              View Menu
            </Link>
          </div>

          <ul className="hero-tags">
            <li>Weddings</li>
            <li>Nikkah</li>
            <li>Birthdays</li>
            <li>Corporate</li>
            <li>Farmhouses &amp; Open Areas</li>
          </ul>
        </div>
      </section>

      {/* STATS UNDER HERO */}
      <StatsStrip />

      {/* EVERYTHING IN ONE PLACE */}
      <section className="services-grid">
        <h2>Everything in One Place</h2>
        <p className="section-subtitle">
          No hotel? No problem. We bring the full setup to farmhouses, open
          areas, rooftops or your provided venue.
        </p>

        <div className="grid">
          {/* FOOD CARD */}
          <div className="card">
            <div className="card-media">
              <img src={homeMenuImg} alt="Catering menu dishes" />
            </div>
            <h3>Food &amp; Live Catering</h3>
            <p>
              Complete menu options: starters, main course, BBQ, desserts &amp;
              drinks. You choose, we execute.
            </p>
            <Link to="/menu" className="card-link">
              Explore Menu →
            </Link>
          </div>

          {/* LOCATIONS CARD */}
          <div className="card">
            <div className="card-media">
              <img src={locationImg} alt="Event location setup" />
            </div>
            <h3>Locations &amp; Farmhouses</h3>
            <p>
              Curated farmhouses, rooftops and open areas for weddings, nikkah,
              birthdays and more.
            </p>
            <Link to="/locations" className="card-link">
              See Locations →
            </Link>
          </div>

          {/* SEATING CARD – fades between 2 images */}
          <div className="card">
            <div className="card-media card-media-slider">
              <img src={seatingImg1} alt="Seating layout 1" />
              <img src={seatingImg2} alt="Seating layout 2" />
            </div>
            <h3>Seating &amp; Layouts</h3>
            <p>
              Classic, premium and luxury seating plans tailored to your guest
              count and vibe.
            </p>
            <Link to="/get-quote" className="card-link">
              Choose Seating →
            </Link>
          </div>

          {/* STAGES CARD – fades between 2 images */}
          <div className="card">
            <div className="card-media card-media-slider">
              <img src={stageImg1} alt="Stage decor 1" />
              <img src={stageImg2} alt="Stage decor 2" />
            </div>
            <h3>Stages &amp; Decorations</h3>
            <p>
              Nikkah, mehndi, wedding, birthday and corporate stages with custom
              decor.
            </p>
            <Link to="/get-quote" className="card-link">
              Select Decor →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="section-cta-inner">
          <h2>Ready to Get a Custom Quote?</h2>
          <p>
            Pick your event type, menu, location, seating and stage. We’ll
            receive everything on WhatsApp and respond with a tailored quote.
          </p>
          <Link to="/get-quote" className="btn btn-primary">
            Start Get-Quote Flow
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
