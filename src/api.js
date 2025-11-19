// import axios from "axios";

// export const BASE_URL = "http://localhost:5000";

// export const api = axios.create({
//   baseURL: BASE_URL
// });


// src/api.js
// This replaces your Express backend and serves data directly in the frontend.

// ---- DATA ----

const eventTypes = [
  { id: "wedding", name: "Wedding" },
  { id: "nikkah", name: "Nikkah" },
  { id: "mehndi", name: "Mehndi / Dholki" },
  { id: "walima", name: "Walima" },
  { id: "birthday", name: "Birthday" },
  { id: "corporate", name: "Corporate Event" },
  { id: "other", name: "Other" },
];

const menuItems = [
  {
    id: "starter-1",
    category: "Starters",
    name: "Chicken Corn Soup",
  },
  {
    id: "starter-2",
    category: "Starters",
    name: "Mint Margarita",
  },
  {
    id: "starter-3",
    category: "Starters",
    name: "Juices(Your choice)",
  },
  {
    id: "starter-4",
    category: "Starters",
    name: "Chicken-Sticks",
  },
  {
    id: "starter-5",
    category: "Starters",
    name: "Chicken Tempura",
  },
  {
    id: "starter-6",
    category: "Starters",
    name: "Chicken-Wings",
  },
  {
    id: "starter-7",
    category: "Starters",
    name: "Dahi Bhallay",
  },
  {
    id: "starter-8",
    category: "Starters",
    name: "Chana Chaat",
  },
  {
    id: "main-1",
    category: "Main Course",
    name: "Chicken Puloa",
  },
  {
    id: "main-2",
    category: "Main Course",
    name: "Chicken Biryani",
  },
  {
    id: "main-3",
    category: "Main Course",
    name: "Chicken Qorma",
  },
  {
    id: "main-4",
    category: "Main Course",
    name: "Chicken Karahi",
  },
  {
    id: "main-5",
    category: "Main Course",
    name: "Chicken Boneless Karahi",
  },
  {
    id: "main-6",
    category: "Main Course",
    name: "Mutton Qorma",
  },
  {
    id: "main-7",
    category: "Main Course",
    name: "Mutton Karahi",
  },
  {
    id: "main-8",
    category: "Main Course",
    name: "Beef Qorma",
  },
  {
    id: "main-9",
    category: "Main Course",
    name: "Beef pulao",
  },
  {
    id: "main-10",
    category: "Main Course",
    name: "Beef Biryani",
  },
  {
    id: "main-11",
    category: "Main Course",
    name: "Palak Paneer",
  },
  {
    id: "main-12",
    category: "Main Course",
    name: "Kabli Pulao",
  },
  {
    id: "main-13",
    category: "Main Course",
    name: "Halwa Pori ",
  },
  {
    id: "main-14",
    category: "Main Course",
    name: "Rogni Naan",
  },
  {
    id: "main-15",
    category: "Main Course",
    name: "Roti",
  },
  {
    id: "main-16",
    category: "Main Course",
    name: "Mutton Dam Pukh",
  },

  {
    id: "bbq-1",
    category: "BBQ",
    name: "Chicken Malai Boti",
  },
  {
    id: "bbq-2",
    category: "BBQ",
    name: "Chicken Tikka Boti",
  },
  {
    id: "bbq-3",
    category: "BBQ",
    name: "Seekh Kabab",
  },
  {
    id: "bbq-4",
    category: "BBQ",
    name: "Mutton chops",
  },
  {
    id: "bbq-5",
    category: "BBQ",
    name: "Fry Fish",
  },
  {
    id: "bbq-6",
    category: "BBQ",
    name: "Behari Kabab",
  },
  {
    id: "bbq-7",
    category: "BBQ",
    name: "Chicken Steam Roast",
  },
  {
    id: "bbq-8",
    category: "BBQ",
    name: "Chicken Pakora",
  },

  {
    id: "dessert-1",
    category: "Sweets",
    name: "Kheer",
  },
  {
    id: "dessert-2",
    category: "Sweets",
    name: "Gulab Jamun",
  },
  {
    id: "dessert-3",
    category: "Sweets",
    name: "Trifle",
  },
  {
    id: "dessert-4",
    category: "Sweets",
    name: "Lab e shirin",
  },
  {
    id: "dessert-5",
    category: "Sweets",
    name: "Live jalabi",
  },
  {
    id: "dessert-6",
    category: "Sweets",
    name: "Kulfa",
  },
  {
    id: "dessert-7",
    category: "Sweets",
    name: "Falooda",
  },
  {
    id: "dessert-8",
    category: "Sweets",
    name: "Gajar Halwa",
  },
  {
    id: "dessert-9",
    category: "Sweets",
    name: "Zarda",
  },
  {
    id: "dessert-10",
    category: "Sweets",
    name: "Rass Malai",
  },

  {
    id: "drink-1",
    category: "Drinks",
    name: "Cold-drinks",
  },
  {
    id: "drink-2",
    category: "Drinks",
    name: "Hot-drinks",
  },
  {
    id: "drink-3",
    category: "Drinks",
    name: "Mineral Water",
  },

  {
    id: "salad-1",
    category: "Salad",
    name: "Fresh Salad",
  },
  {
    id: "salad-2",
    category: "Salad",
    name: "Russian Salad",
  },
  {
    id: "salad-3",
    category: "Salad",
    name: "Macaroni",
  },
  {
    id: "salad-4",
    category: "Salad",
    name: "Red Bean Salad",
  },

  {
    id: "sauce-1",
    category: "Sauces",
    name: "Aalo Bukhara Chatni ",
  },
  {
    id: "sauce-2",
    category: "Sauces",
    name: "Mint Sauce",
  },
  {
    id: "sauce-3",
    category: "Sauces",
    name: "Raita",
  },

  {
    id: "chinese-1",
    category: "Chinese-Item",
    name: "Egg Fried Rice",
  },
  {
    id: "chinese-2",
    category: "Chinese-Item",
    name: "Chowmin",
  },
  {
    id: "chinese-3",
    category: "Chinese-Item",
    name: "Chicken Manchorian",
  },
  {
    id: "chinese-4",
    category: "Chinese-Item",
    name: "Beef Chilli Dry",
  },
  {
    id: "chinese-5",
    category: "Chinese-Item",
    name: "Chicken Chilli Dry",
  },

  {
    id: "hitea-1",
    category: "Hi-Tea",
    name: "Tea",
  },
  {
    id: "hitea-2",
    category: "Hi-Tea",
    name: "Green Tea",
  },
  {
    id: "hitea-3",
    category: "Hi-Tea",
    name: "Coffee",
  },
  {
    id: "hitea-4",
    category: "Hi-Tea",
    name: "Plane Cake",
  },
  {
    id: "hitea-5",
    category: "Hi-Tea",
    name: "Cold Sandwitch",
  },
  {
    id: "hitea-6",
    category: "Hi-Tea",
    name: "One Bite Somosa",
  },
  {
    id: "hitea-7",
    category: "Hi-Tea",
    name: "Biscuite",
  },
  {
    id: "hitea-8",
    category: "Hi-Tea",
    name: "Patteis",
  },
  {
    id: "hitea-9",
    category: "Hi-Tea",
    name: "Brownie",
  },
  {
    id: "hitea-10",
    category: "Hi-Tea",
    name: "Chicken Wings",
  },
  {
    id: "hitea-11",
    category: "Hi-Tea",
    name: "Chowmin",
  },
];

const locations = [
  {
    id: "home-1",
    name: "Own Home",
    type: "home of your own",
    occasions: ["wedding", "walima", "mehndi", "alltypes"],
    capacity: "According to your guests",
  },
  {
    id: "farmhouse-2",
    name: "Farmhouses",
    type: "farmhouse",
    occasions: ["wedding", "walima", "nikkah", "alltypes"],
    city: "Located Mostly In Rawalpindi and Islamabad",
    capacity: "According to your guests",
  },
  {
    id: "open-1",
    name: "Open area",
    type: "Open Area",
    occasions: ["mehndi", "birthday", "corporate", "alltypes"],
    city: "Located Mostly In Rawalpindi and Islamabad",
    capacity: "According to your guests",
  },
  {
    id: "open-2",
    name: "Rooftop",
    type: "Rooftop",
    occasions: ["nikkah", "birthday", "corporate", "alltype"],
    city: "Located Mostly In Rawalpindi and Islamabad",
    capacity: "According to your guests",
  },
  {
    id: "hotel-1",
    name: "Recomend Hotels by Clients demand",
    type: "Hotels",
    occasions: ["nikkah", "birthday", "corporate", "alltype"],
    city: "Located Mostly In Rawalpindi and Islamabad",
    capacity: "According to your guests",
  },
  {
    id: "location-1",
    name: "Recomend Locations by Clients demand",
    type: "Locations",
    occasions: ["nikkah", "birthday", "corporate", "alltype"],
    city: "Located Mostly In Rawalpindi and Islamabad",
    capacity: "According to your guests",
  },
];

const seatingOptions = [
  {
    id: "classic",
    name: "Classic Seating",
    description: "Basic but neat chairs with standard table layout.",
    bestFor: ["birthday", "corporate", "mehndi"],
  },
  {
    id: "premium",
    name: "Premium Seating",
    description:
      "Cushioned chairs, table runners, centerpieces – a clean premium look.",
    bestFor: ["wedding", "nikkah", "walima", "corporate"],
  },
  {
    id: "luxury",
    name: "Luxury Seating",
    description:
      "Designer chairs/sofas, custom layout, premium centerpiece styling.",
    bestFor: ["wedding", "walima", "nikkah"],
  },
];

const decorOptions = [
  {
    id: "stage-classic",
    name: "Classic Stage",
    category: "wedding",
    description: "Simple stage with backdrop and basic florals.",
  },
  {
    id: "stage-luxury",
    name: "Luxury Floral Stage",
    category: "wedding",
    description: "Full floral backdrop, premium couches, accent lighting.",
  },
  {
    id: "stage-nikkah",
    name: "Elegant Nikkah Stage",
    category: "nikkah",
    description: "Soft colors, floral arch, minimal elegant look.",
  },
  {
    id: "stage-mehndi",
    name: "Colorful Mehndi Stage",
    category: "mehndi",
    description: "Colorful drapes, cushions, dhol props.",
  },
  {
    id: "stage-birthday",
    name: "Birthday Theme Setup",
    category: "birthday",
    description: "Theme backdrop, balloons, cake table styling.",
  },
  {
    id: "stage-corporate",
    name: "Corporate Backdrop Stage",
    category: "corporate",
    description: "Brand backdrop, podium setup, clean lighting.",
  },
];

const stats = {
  totalEvents: 420,
  totalGuestsServed: 58000,
  locationsCount: locations.length,
  yearsExperience: 10,
};

// ---- MOCK API IMPLEMENTATION ----

export const api = {
  get(url, config = {}) {
    const params = config?.params || {};

    switch (url) {
      case "/api/event-types":
        return Promise.resolve({ data: eventTypes });

      case "/api/menu":
        return Promise.resolve({ data: menuItems });

      case "/api/locations": {
        const { occasion } = params;
        let data = locations;
        if (occasion) {
          data = locations.filter(
            (loc) =>
              Array.isArray(loc.occasions) &&
              loc.occasions.includes(occasion)
          );
        }
        return Promise.resolve({ data });
      }

      case "/api/seating":
        return Promise.resolve({ data: seatingOptions });

      case "/api/decor": {
        const { occasion } = params;
        let data = decorOptions;
        if (occasion) {
          data = decorOptions.filter(
            (d) => d.category === occasion || d.category === "all"
          );
        }
        return Promise.resolve({ data });
      }

      case "/api/stats":
        return Promise.resolve({ data: stats });

      default:
        return Promise.reject(
          new Error(`Unknown mock api endpoint: ${url}`)
        );
    }
  },
};
