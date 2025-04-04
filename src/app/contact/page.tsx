'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

   
    const serviceID = 'service_td13oxk'; 
    const templateID = 'service_td13oxk'; 
    const userID = 'sqjz7aiPrqsDySCn5'; 

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatus('Erreur lors de l\'envoi. Veuillez réessayer.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary font-titan-one mb-6">Contactez-moi</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-violet-700 transition-colors"
          >
            Envoyer
          </button>
        </form>
        {status && (
          <p className={`mt-4 text-center ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}