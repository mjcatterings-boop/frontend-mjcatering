import React, { useEffect, useState } from "react";
import { api } from "../api";

const WHATSAPP_NUMBER = "923445809168"; 

const QuoteBuilder = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [menu, setMenu] = useState([]);
  const [locations, setLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [seatingOptions, setSeatingOptions] = useState([]);
  const [decorOptions, setDecorOptions] = useState([]);
  const [occasionFilter, setOccasionFilter] = useState("");

  const [form, setForm] = useState({
    eventType: "",
    date: "",
    guestCount: "",
    city: "",
    locationId: "",
    seatingId: "",
    decorId: "",
    selectedMenuIds: [],
    customVenue: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    notes: ""
  });

  useEffect(() => {
    api.get("/api/event-types").then((res) => setEventTypes(res.data));
    api.get("/api/menu").then((res) => setMenu(res.data));
    api.get("/api/locations").then((res) => {
      setLocations(res.data);
      setAllLocations(res.data);
    });
    api.get("/api/seating").then((res) => setSeatingOptions(res.data));
  }, []);

  useEffect(() => {
    if (!occasionFilter) {
      setLocations(allLocations);
    } else {
      api
        .get("/api/locations", { params: { occasion: occasionFilter } })
        .then((res) => setLocations(res.data))
        .catch(() => setLocations(allLocations));
    }

    if (occasionFilter) {
      api
        .get("/api/decor", { params: { occasion: occasionFilter } })
        .then((res) => setDecorOptions(res.data))
        .catch(() => setDecorOptions([]));
    } else {
      api.get("/api/decor").then((res) => setDecorOptions(res.data));
    }
  }, [occasionFilter, allLocations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "eventType") {
      setOccasionFilter(value);
    }
  };

  const toggleMenuItem = (id) => {
    setForm((prev) => {
      const selected = new Set(prev.selectedMenuIds);
      if (selected.has(id)) {
        selected.delete(id);
      } else {
        selected.add(id);
      }
      return { ...prev, selectedMenuIds: Array.from(selected) };
    });
  };

  const getSelectedMenuItems = () =>
    menu.filter((item) => form.selectedMenuIds.includes(item.id));

  const buildWhatsAppMessage = () => {
    const eventTypeObj = eventTypes.find((e) => e.id === form.eventType);
    const locationObj = locations.find((l) => l.id === form.locationId) ||
      allLocations.find((l) => l.id === form.locationId);
    const seatingObj = seatingOptions.find((s) => s.id === form.seatingId);
    const decorObj = decorOptions.find((d) => d.id === form.decorId);

    const selectedMenu = getSelectedMenuItems();

    return `
NEW QUOTE REQUEST

Customer:
- Name: ${form.customerName || "-"}
- Phone: ${form.customerPhone || "-"}
- Email: ${form.customerEmail || "-"}

Event Details:
- Event Type: ${eventTypeObj ? eventTypeObj.name : form.eventType || "-"}
- Date: ${form.date || "-"}
- City: ${form.city || "-"}
- Guest Count: ${form.guestCount || "-"}

Venue / Location:
- Selected Location: ${locationObj ? locationObj.name : "-"}
- Provided Own Venue (Hotel / Hall / Other): ${
      form.customVenue || "No"
    }

Setup:
- Seating Option: ${seatingObj ? seatingObj.name : "-"}
- Decor / Stage: ${decorObj ? decorObj.name : "-"}

Menu Selection:
${
  selectedMenu.length
    ? selectedMenu
        .map(
          (i) => `- ${i.category}: ${i.name} (${i.description || ""})`
        )
        .join("\n")
    : "- No specific items selected"
}

Extra Notes:
${form.notes || "-"}
    `.trim();
  };


  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.customerName || !form.customerPhone || !form.eventType) {
    alert("Please fill at least Name, Phone and Event Type.");
    return;
  }

  // Fire Meta Pixel Lead event
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }

  const msg = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
};
  

  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="page">
      <section className="page-header">
        <h1>Get a Custom Quote</h1>
        <p>
          Select your event type, menu, location, seating and stage decor. Your
          selections will be sent to our WhatsApp so we can reply with a tailored
          quote — no prices are shown on the website.
        </p>
      </section>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>1. Your Details</h2>
          <div className="form-grid">
            <div className="field">
              <label>Full Name *</label>
              <input
                type="text"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>WhatsApp Number *</label>
              <input
                type="text"
                name="customerPhone"
                value={form.customerPhone}
                onChange={handleChange}
                placeholder="e.g. 03xxxxxxxxx"
                required
              />
            </div>
            <div className="field">
              <label>Email (optional)</label>
              <input
                type="email"
                name="customerEmail"
                value={form.customerEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>2. Event Details</h2>
          <div className="form-grid">
            <div className="field">
              <label>Event Type *</label>
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select event type</option>
                {eventTypes.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    {ev.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City of event"
              />
            </div>
            <div className="field">
              <label>Expected Guest Count</label>
              <input
                type="number"
                name="guestCount"
                value={form.guestCount}
                onChange={handleChange}
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>3. Location / Venue</h2>
          <p className="section-note">
            We provide farmhouses and open areas. If you already have a hotel or
            hall booked, mention it below.
          </p>
          <div className="form-grid">
            <div className="field">
              <label>Choose From Our Partner Locations</label>
              <select
                name="locationId"
                value={form.locationId}
                onChange={handleChange}
              >
                <option value="">No location selected</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.type} · {loc.city})
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Or Provide Your Own Venue (Hotel / Hall / Other)</label>
              <input
                type="text"
                name="customVenue"
                value={form.customVenue}
                onChange={handleChange}
                placeholder="Venue name and address"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>4. Seating Style</h2>
          <div className="cards-row">
            {seatingOptions.map((seat) => (
              <button
                type="button"
                key={seat.id}
                className={
                  "select-card" +
                  (form.seatingId === seat.id ? " select-card-active" : "")
                }
                onClick={() =>
                  setForm((prev) => ({ ...prev, seatingId: seat.id }))
                }
              >
                <h3>{seat.name}</h3>
                <p>{seat.description}</p>
                <p className="card-tag">
                  Best for: {seat.bestFor.join(", ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>5. Stage & Decoration</h2>
          <p className="section-note">
            We show decor options based on your selected event type (wedding,
            nikkah, mehndi, birthday, etc.).
          </p>
          <div className="cards-row">
            {decorOptions.map((d) => (
              <button
                type="button"
                key={d.id}
                className={
                  "select-card" +
                  (form.decorId === d.id ? " select-card-active" : "")
                }
                onClick={() =>
                  setForm((prev) => ({ ...prev, decorId: d.id }))
                }
              >
                <h3>{d.name}</h3>
                <p>{d.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>6. Menu Selection (Optional)</h2>
          <p className="section-note">
            Select the items you are interested in. We will adjust quantity and
            final menu with you on WhatsApp.
          </p>
          <div className="menu-select-grid">
            {Object.keys(groupedMenu).map((cat) => (
              <div key={cat} className="menu-select-column">
                <h3>{cat}</h3>
                <ul>
                  {groupedMenu[cat].map((item) => {
                    const checked = form.selectedMenuIds.includes(item.id);
                    return (
                      <li key={item.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleMenuItem(item.id)}
                          />{" "}
                          <span className="menu-select-name">
                            {item.name}
                          </span>
                          <span className="menu-select-desc">
                            {" "}
                            – {item.description}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>7. Customization / Notes</h2>
          <textarea
            name="notes"
            rows="4"
            value={form.notes}
            onChange={handleChange}
            placeholder="Tell us about theme colors, special requests, timing, special entries, live BBQ, dessert table, etc."
          />
        </div>

        <div className="form-section summary-section">
          <h2>Summary</h2>
          <p>
            When you click <strong>“Send to WhatsApp”</strong>, all selected
            options will open in your WhatsApp chat with us as a pre-filled
            message. You can review and send it.
          </p>
          <button type="submit" className="btn btn-primary">
            Send to WhatsApp &amp; Get Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteBuilder;
