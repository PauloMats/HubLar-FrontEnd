"use client";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nome</label>
        <input type="text" className="form-control" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Mensagem</label>
        <textarea className="form-control" id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default ContactForm;
