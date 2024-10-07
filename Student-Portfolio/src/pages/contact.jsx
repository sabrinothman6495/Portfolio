import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email address is invalid";
    }
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit the form or trigger success feedback
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // Clear the form after submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            required 
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
