import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ form, name: e.target.value })}
        />
        <span>{errors.name}</span>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <span>{errors.email}</span>

        <textarea
          name="message"
          value={form.message}
          onChange={(e) => setForm({ form, message: e.target.value })}
        />
        <span>{errors.message}</span>

          <button type="submit">Submit</button>
        </form>
    </section>
  );
}

export default Contact;
