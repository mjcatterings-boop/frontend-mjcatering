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
  const [allDecor, setAllDecor] = useState([]);
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
    notes: "",
  });

  // Load all static data once
  useEffect(() => {
    api.get("/api/event-types").then((res) => setEventTypes(res.data));
    api.get("/api/menu").then((res) => setMenu(res.data));

    api.get("/api/locations").then((res) => {
      setAllLocations(res.data);
      setLocations(res.data);
    });

    api.get("/api/seating").then((res) => setSeatingOptions(res.data));

    api.get("/api/decor").then((res) => {
      setAllDecor(res.data);
      setDecorOptions(res.data);
    });
  }, []);

  // Filter only when event type changes
  useEffect(() => {
    if (!occasionFilter) {
      setLocations(allLocations);
      setDecorOptions(allDecor);
      return;
    }

    const filteredLocs = allLocations.filter((l) => l.occasion === occasionFilter);
    setLocations(filteredLocs.length ? filteredLocs : allLocations);

    const filteredDecor = allDecor.filter((d) => d.occasion === occasionFilter);
    setDecorOptions(filteredDecor.length ? filteredDecor : allDecor);
  }, [occasionFilter, allLocations, allDecor]);

  // handle change
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
      selected.has(id) ? selected.delete(id) : selected.add(id);
      return { ...prev, selectedMenuIds: Array.from(selected) };
    });
  };

  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const getSelectedMenuItems = () =>
    menu.filter((item) => form.selectedMenuIds.includes(item.id));

  const buildWhatsAppMessage = () => {
    const eventTypeObj = eventTypes.find((e) => e.id === form.eventType);
    const locationObj =
      locations.find((l) => l.id === form.locationId) ||
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
- Event Type: ${eventTypeObj ? eventTypeObj.name : "-"}
- Date: ${form.date || "-"}
- City: ${form.city || "-"}
- Guest Count: ${form.guestCount || "-"}

Venue:
- Location: ${locationObj ? locationObj.name : "-"}
- Own Venue: ${form.customVenue || "No"}

Setup:
- Seating: ${seatingObj ? seatingObj.name : "-"}
- Decor: ${decorObj ? decorObj.name : "-"}

Menu:
${
  selectedMenu.length
    ? selectedMenu
        .map(
          (i) =>
            `- ${i.category}: ${i.name}${
              i.description ? " (" + i.description + ")" : ""
            }`
        )
        .join("\n")
    : "- None selected"
}

Notes:
${form.notes || "-"}
  `.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.customerName || !form.customerPhone || !form.eventType) {
      alert("Please fill Name, Phone and Event Type.");
      return;
    }

    if (window.fbq) window.fbq("track", "Lead");

    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="page fade-in">

      {/* HEADER */}
      <section className="page-header highlight-box">
        <h1>Your Custom Event Quote</h1>
        <p>
          Select your event type, menu, venue, seating and decor. Your complete
          selections will be sent to WhatsApp for an instant custom quote.
        </p>
      </section>

      <form className="quote-form" onSubmit={handleSubmit}>

        {/* Step 1 */}
        <div className="form-section card">
          <h2>1. Your Details</h2>
          <div className="form-grid">
            <div className="field">
              <label>Full Name *</label>
              <input name="customerName" value={form.customerName} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>WhatsApp Number *</label>
              <input name="customerPhone" value={form.customerPhone} onChange={handleChange} placeholder="03xxxxxxxxx" required />
            </div>

            <div className="field">
              <label>Email (optional)</label>
              <input name="customerEmail" value={form.customerEmail} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="form-section card">
          <h2>2. Event Details</h2>
          <div className="form-grid">
            <div className="field">
              <label>Event Type *</label>
              <select name="eventType" value={form.eventType} onChange={handleChange} required>
                <option value="">Select event type</option>
                {eventTypes.map((ev) => (
                  <option key={ev.id} value={ev.id}>{ev.name}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </div>

            <div className="field">
              <label>City</label>
              <input name="city" value={form.city} onChange={handleChange} placeholder="Event city" />
            </div>

            <div className="field">
              <label>Guest Count</label>
              <input name="guestCount" type="number" value={form.guestCount} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="form-section card">
          <h2>3. Venue</h2>
          <div className="form-grid">
            <div className="field">
              <label>Partner Locations</label>
              <select name="locationId" value={form.locationId} onChange={handleChange}>
                <option value="">No location selected</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.type} · {loc.city})
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>Your Own Venue</label>
              <input name="customVenue" value={form.customVenue} onChange={handleChange} placeholder="Hotel / Hall name" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="form-section card">
          <h2>4. Seating Style</h2>
          <div className="cards-row">
            {seatingOptions.map((seat) => (
              <button type="button" key={seat.id}
                className={"select-card" + (form.seatingId === seat.id ? " select-card-active" : "")}
                onClick={() => setForm((p) => ({ ...p, seatingId: seat.id }))}>
                <h3>{seat.name}</h3>
                <p>{seat.description}</p>
                <p className="card-tag">Best for: {seat.bestFor.join(", ")}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 5 */}
        <div className="form-section card">
          <h2>5. Decor & Stage</h2>
          <div className="cards-row">
            {decorOptions.map((d) => (
              <button type="button" key={d.id}
                className={"select-card" + (form.decorId === d.id ? " select-card-active" : "")}
                onClick={() => setForm((p) => ({ ...p, decorId: d.id }))}>
                <h3>{d.name}</h3>
                <p>{d.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 6 */}
        <div className="form-section card">
          <h2>6. Menu</h2>

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
                          <input type="checkbox" checked={checked} onChange={() => toggleMenuItem(item.id)} />
                          <span className="menu-select-name">{item.name}</span>
                          <span className="menu-select-desc"> – {item.description}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Step 7 */}
        <div className="form-section card">
          <h2>7. Notes / Customization</h2>
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special requests, timings, theme, etc." rows="4" />
        </div>

        {/* Final */}
        <div className="form-section summary-section card">
          <h2>Summary</h2>
          <p>Your full selection will be sent to WhatsApp as a message. Review it and send to get a custom quote instantly.</p>

          <button type="submit" className="btn btn-primary">Send to WhatsApp & Get Quote</button>
        </div>

      </form>
    </div>
  );
};

export default QuoteBuilder;
