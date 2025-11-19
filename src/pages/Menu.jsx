// import React, { useEffect, useState } from "react";
// import { api } from "../api";
// import menu1 from "../assets/menu1.jpg";
// import menu2 from "../assets/menu2.jpg";
// import menu3 from "../assets/menu3.jpg";
// const groupByCategory = (items) => {
//   const map = {};
//   items.forEach((item) => {
//     if (!map[item.category]) map[item.category] = [];
//     map[item.category] = [...map[item.category], item];
//   });
//   return map;
// };

// const Menu = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     api
//       .get("/api/menu")
//       .then((res) => setMenu(res.data))
//       .catch(() => {});
//   }, []);

//   const grouped = groupByCategory(menu);

//   return (
//     <div className="page">
//       <section className="page-header">
//         <h1>Our Menu</h1>
//         <p>
//           Below is a sample menu of what we offer. You can mix and match items
//           when requesting your quote. Prices are shared only after we understand
//           your full event details.
//         </p>
//       </section>

//       <section className="menu-grid">
//         {Object.keys(grouped).map((cat) => (
//           <div key={cat} className="menu-category">
//             <h2>{cat}</h2>
//             <div className="menu-items">
//               {grouped[cat].map((item) => (
//                 <div key={item.id} className="menu-card">
//                   <h3>{item.name}</h3>
//                   <p>{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Menu;
import React, { useEffect, useState } from "react";
import { api } from "../api";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";

const groupByCategory = (items) => {
  const map = {};
  items.forEach((item) => {
    if (!map[item.category]) map[item.category] = [];
    map[item.category] = [...map[item.category], item];
  });
  return map;
};

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    api
      .get("/api/menu")
      .then((res) => setMenu(res.data))
      .catch(() => {});
  }, []);

  const grouped = groupByCategory(menu);

  return (
    <div className="page">
      {/* PAGE HEADER */}
      <section className="page-header">
        <h1>Our Menu</h1>
        <p>
          Explore our curated event menu — from live BBQ stations to premium desserts.
          You can mix and match any items when requesting a quote. Pricing is tailored
          to your event scale and service style.
        </p>
      </section>

      {/* IMAGE STRIP */}
      <section className="menu-gallery">
        <div className="menu-gallery-grid">
          <img src={menu1} alt="Catering dishes" />
          <img src={menu2} alt="Live BBQ setup" />
          <img src={menu3} alt="Dessert counter" />
        </div>
      </section>

      {/* MENU ITEMS */}
      <section className="menu-grid">
        {Object.keys(grouped).map((cat) => (
          <div key={cat} className="menu-category">
            <h2>{cat}</h2>
            <div className="menu-items">
              {grouped[cat].map((item) => (
                <div key={item.id} className="menu-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
