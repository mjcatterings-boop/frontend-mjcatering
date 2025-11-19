import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>
          For custom requirements, urgent bookings or special themes, reach out
          directly. We’re fast on WhatsApp.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>Office / Meeting Point</h2>
          <p>Write your address here – city, area, nearby landmark.</p>
<div className="map-embed">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d595.9211951026297!2d73.12747326950326!3d33.619574115114084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM3JzEwLjUiTiA3M8KwMDcnNDEuMiJF!5e1!3m2!1sen!2s!4v1763415293244!5m2!1sen!2s"
    width="100%"
    height="350"
    style={{ border: 0, borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Our Location"
  ></iframe>
</div>
        </div>

        <div className="contact-card">
          <h2>Reach Us</h2>
          <ul className="contact-list">
            <li>
              <strong>WhatsApp:</strong> 0344 5809168
            </li>
            <li>
              <strong>Phone:</strong> 03315945580
            </li>
          <li>
  <strong>Email:</strong>{" "}
  <a href="mailto:mjcatterings@gmail.com">
    mjcatterings@gmail.com
  </a>
</li>

          </ul>
       <div className="social-icons">
  <a
    href="https://www.instagram.com/mj_catering_events_?igsh=czRmdXo3Z3YydnM3&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://www.facebook.com/share/174FsYD9Vh/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook size={20} />
  </a>


  <a
    href="https://youtube.com/@mjcateringandevents?si=l68kM9prFwYU_Ujr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube size={22} />
  </a>
</div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
