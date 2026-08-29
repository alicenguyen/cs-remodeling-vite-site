import { useState } from "react";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";
import "./Contact.css";

// Toggle back on once the contact form has somewhere real to send leads.
const SHOW_CONTACT_FORM = false;

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className={`container contact-grid ${SHOW_CONTACT_FORM ? "" : "contact-grid-solo"}`}>
        <div className="contact-info">
          <span className="section-eyebrow">Get In Touch</span>
          <h2>{SHOW_CONTACT_FORM ? "Request a Free Estimate" : "Get In Touch"}</h2>
          <hr className="rule" />
          <p>
            {SHOW_CONTACT_FORM
              ? "Tell us a bit about your project and we'll get back to you to schedule a walkthrough."
              : "Give us a call or send an email and we'll get back to you to schedule a walkthrough."}
          </p>

          <ul className="contact-details">
            <li>
              <PhoneIcon />
              <a href="tel:+16193395722">619.339.5722</a>
            </li>
            <li>
              <MailIcon />
              {/* TODO: replace with the real business email */}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>
              <PinIcon />
              <span>Serving Poway & San Diego County</span>
            </li>
          </ul>
        </div>

        {SHOW_CONTACT_FORM && (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="form-row form-row-split">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Request"}
          </button>

          {status === "success" && (
            <p className="form-status form-status-success" role="status">
              Thanks — your request was sent. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status-error" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
        )}
      </div>
    </section>
  );
}
