import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    // Here you can connect to EmailJS or your backend API
    console.log("Form Submitted:", formData);

    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtext">
        Feel free to reach out for collaborations, freelance work, or any
        project discussions.
      </p>

      <div className="contact-container">
        {/* Left side */}
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>street No. D-5, Himalayan colony,shekhpur Gaddu ,najibabad dist. bijnor U.P pin(246763)</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Call Us</h3>
              <p>+91 6396337325</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>shubhamchauhanpoly@gmail.com</p>
            </div>
          </div>

          {/* Map */}
          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.4385943919788!2d78.34175670968294!3d29.595183499497008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bdeff0371d465%3A0x8ccfc25f16874dd!2sHimalayan%20Colony%2C%20Chhapar%2C%20Najibabad%2C%20Uttar%20Pradesh%20246763!5e1!3m2!1sen!2sin!4v1757833376198!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
