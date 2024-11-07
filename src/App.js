import React, { useState } from "react";
import "./App.css"; // Include your CSS

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = { ...formData, status: "Pending" };
    const updatedQueries = JSON.parse(localStorage.getItem("queries")) || [];
    updatedQueries.push(newQuery);
    localStorage.setItem("queries", JSON.stringify(updatedQueries));
    setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "" });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="main">
      <div className="navbar">
        <a href="main.html"><img src="https://theworldtravelguy.com/wp-content/uploads/2023/01/Logo_2.jpg" className="pic" alt="Logo"/></a>
        <div className="bar">
          <a href="main.html">HOME</a><a href="blog.html">BLOG</a><a href="destination.html">DESTINATION</a>
          <a href="">CATEGORY</a><a href="">GALLERY</a><a href="about.html">ABOUT</a><a href="contact.html">CONTACT</a>
        </div>
      </div>
      
      <section className="contact-options">
        <h1>Get in touch</h1>
        <p>Ready to help your company scale faster? Let's chat about how we can help.</p>
        <div className="options-grid">
          <div className="option"><h3>Visit us</h3><button>Get directions</button></div>
          <div className="option"><h3>Call us</h3><button>Call our team</button></div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Message us</h2>
        <p style={{ color: "#fc8347" }}>We'll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </section>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Thank You!</h2>
            <p>Your message has been sent. We'll get back to you shortly.</p>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; The World Travel Guy 2024</p>
        <p>Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you.</p>
      </footer>
    </div>
  );
}

export default App;