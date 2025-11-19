import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Terms & Policies</h1>
        <p>
          By using MJ Catering &amp; Events services or submitting a booking
          request through this website or WhatsApp, you agree to the following
          terms and policies.
        </p>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        {/* 1. Privacy Policy */}
        <h2>1. Privacy Policy</h2>
        <p>
          We respect your privacy and are committed to protecting your personal
          information.
        </p>

        <h3>Information We Collect</h3>
        <ul>
          <li>
            Basic contact details (name, phone number, email address, WhatsApp
            number)
          </li>
          <li>
            Event details (date, location, type of event, guest count,
            preferences)
          </li>
          <li>
            Payment-related information (processed via secure third-party
            services, where used)
          </li>
         
        </ul>

        <h3>How We Use Your Information</h3>
        <ul>
          <li>To plan, manage and deliver catering and event services</li>
          <li>To communicate with you about quotes, bookings and updates</li>
          <li>To process payments securely via trusted payment providers</li>
          <li>To improve our website, services and customer experience</li>
        </ul>

        <h3>Data Security</h3>
        <p>
          We take reasonable technical and organizational measures to protect
          your data. However, no method of online transmission or storage can be
          guaranteed 100% secure.
        </p>

        <h3>Your Rights</h3>
        <p>
          You can request if you find unsecured reagards of submittng the form feel free to contact-us.
        </p>
        <p>
          To exercise these rights, contact us at{" "}
          <strong>mjcatterings@gmail.com</strong> or via WhatsApp.
        </p>

        {/* 2. Payment Terms */}
        <h2 style={{ marginTop: "1.5rem" }}>2. Payment Terms &amp; Conditions</h2>
        <h3>Booking &amp; Advance</h3>
        <ul>
          <li>
            A <strong>40% advance payment</strong> is required at the time of
            booking to confirm your date.
          </li>
          <li>
            The remaining <strong>60% balance</strong> is due{" "}
            <strong>at least 2-4 days before</strong> the event date or on spot.
          </li>
        </ul>

        <h3>Non-Payment / Late Payment</h3>
        <ul>
          <li>
            If full payment is not received by the agreed deadline (minimum 2-4
            days before the event), MJ Catering &amp; Events reserves the right
            to cancel the booking.
          </li>
          <li>
            In case of cancellation due to non-payment, part or all of the
            advance may be retained to cover costs already incurred.
          </li>
        </ul>

        <h3>Order Modifications</h3>
        <ul>
          <li>
            Changes to menu, guest count, timing, setup or location must be
            requested at least <strong>2-3 days before</strong> the event.
          </li>
          <li>
            Major changes requested closer than 3 days may not be guaranteed and
            may involve additional charges.
          </li>
        </ul>

        {/* 3. Cancellation Policy */}
        <h2 style={{ marginTop: "1.5rem" }}>3. Cancellation Policy</h2>
        <p>If you need to cancel your booking, the following charges apply:</p>
        <ul>
          <li>
            <strong>Up to 3 days before the event:</strong> 10% of the total
            bill will be charged.
          </li>
          <li>
            <strong>1 day before the event:</strong> 30% of the total bill will
            be charged.
          </li>
          <li>
            <strong>Same-day cancellation:</strong> 100% of the total bill will
            be charged (no refund).
          </li>
        </ul>
        <p>
          Any non-refundable expenses already incurred (such as special orders,
          décor materials or venue-related costs) may also be deducted if
          applicable.
        </p>

        {/* 4. Refund Policy */}
        <h2 style={{ marginTop: "1.5rem" }}>4. Refund Policy</h2>
        <ul>
          <li>
            No refunds are provided for cancellations made within{" "}
            <strong>3 days</strong> of the event date.
          </li>
          <li>
            Eligible partial refunds, as per the cancellation policy above, will
            be processed within <strong>7 business days</strong>.
          </li>
          <li>
            Refunds are issued only to the{" "}
            <strong>original payment method</strong> used at the time of
            booking.
          </li>
        </ul>

        {/* 5. Shipping / Pickup */}
        <h2 style={{ marginTop: "1.5rem" }}>
          5. Shipping, Delivery &amp; Pickup Policy
        </h2>
        <p>
          We offer full-service catering at your venue as well as food-only
          options, depending on your booking.
        </p>

        <h3>Self-Pickup</h3>
        <ul>
          <li>
            If you choose self-pickup, you are responsible for safe transport of
            the food and any containers.
          </li>
          <li>You may use your own containers or ours (if agreed in advance).</li>
        </ul>

        <h3>Containers Provided by MJ Catering &amp; Events</h3>
        <ul>
          <li>
            If we provide containers, warmers or serving equipment, a security
            and/or rental fee may be charged in advance.
          </li>
          <li>
            All items must be returned by the <strong>end of event</strong>, unless
            a different return schedule is agreed.
          </li>
        </ul>

        <h3>Loss or Damage</h3>
        <ul>
          <li>
            Any breakage, loss or damage to our containers, serving dishes or
            equipment will be charged to the client.
          </li>
          <li>
            Such costs may be deducted from the security deposit or billed
            separately.
          </li>
        </ul>

        {/* 6. Information Sharing */}
        <h2 style={{ marginTop: "1.5rem" }}>6. Information Sharing</h2>
        <p>
          We do not sell or share your personal data with third parties for
          their own marketing purposes.
        </p>
        <p>
          We may share limited information only with:
        </p>
        <ul>
          <li>
            Trusted service providers who help us operate (e.g. payment
            processors, IT support, communication tools)
          </li>
          <li>
            Legal authorities, if required by law, court order or legal process
          </li>
        </ul>

        {/* 7. Updates */}
        <h2 style={{ marginTop: "1.5rem" }}>7. Updates to These Terms</h2>
        <p>
          These terms and policies may be updated from time to time due to
          changes in our services, pricing or legal requirements.
        </p>
        <ul>
          <li>
            The latest version will always be available on this page with an
            updated “Last Updated” date.
          </li>
          <li>
            Continuing to use our services after changes means you accept the
            updated terms.
          </li>
        </ul>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#9ca3af" }}>
          For any questions about these terms, please contact us at{" "}
          <strong>mjcatterings@gmail.com</strong> or via WhatsApp.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
