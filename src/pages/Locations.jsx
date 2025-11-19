// import React, { useEffect, useState } from "react";
// import { api } from "../api";
// import location1 from "../assets/location2.jpg";
// import location2 from "../assets/location3.jpg";
// import location3 from "../assets/locationpic.jpg";

// const Locations = () => {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     api
//       .get("/api/locations")
//       .then((res) => setLocations(res.data))
//       .catch(() => {});
//   }, []);

//   return (
//     <div className="page">
//       <section className="page-header">
//         <h1>Locations We Provide</h1>
//         <p>
//           We arrange events at farmhouses, open areas, rooftops and other outdoor
//           venues. We do not provide hotels directly — but if you arrange a hotel
//           yourself, we can provide full catering & decor services there.
//         </p>
//       </section>

//       <section className="locations-grid">
//         {locations.map((loc) => (
//           <div key={loc.id} className="card">
//             <h3>{loc.name}</h3>
//             <p className="loc-type">
//               {loc.type} · {loc.city}
//             </p>
//             <p>Capacity: {loc.capacity}</p>
//             <p className="loc-occasions">
//               Best for:{" "}
//               {loc.occasions
//                 .map((o) => o.charAt(0).toUpperCase() + o.slice(1))
//                 .join(", ")}
//             </p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Locations;


import React, { useEffect, useState } from "react";
import { api } from "../api";
import location1 from "../assets/location2.jpg";
import location2 from "../assets/location3.jpg";
import location3 from "../assets/locationpic.jpg";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    api
      .get("/api/locations")
      .then((res) => setLocations(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="page">
      <section className="page-header">
        <h1>Locations We Provide</h1>
        <p>
          We arrange events at farmhouses, open areas, rooftops and other outdoor
          venues. We do not provide hotels directly — but if you arrange a hotel
          yourself, we can provide full catering & decor services there.
        </p>
      </section>

      {/* NEW PHOTO STRIP SECTION */}
      <section className="locations-gallery">
        <div className="gallery-grid">
          <img src={location1} alt="Farmhouse venue" />
          <img src={location2} alt="Open area setup" />
          <img src={location3} alt="Decorated event location" />
        </div>
      </section>

      <section className="locations-grid">
        {locations.map((loc) => (
          <div key={loc.id} className="card">
            <h3>{loc.name}</h3>
            <p className="loc-type">
              {loc.type} · {loc.city}
            </p>
            <p>Capacity: {loc.capacity}</p>
            <p className="loc-occasions">
              Best for:{" "}
              {loc.occasions
                .map((o) => o.charAt(0).toUpperCase() + o.slice(1))
                .join(", ")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Locations;
