import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    enquiry: ''
  });

  // Replace this with your WhatsApp number (including country code, no spaces or special characters)
  const whatsappNumber = '7011804911';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Name: ${formData.name}%0AEnquiry: ${formData.enquiry}`;
    
    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-1">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-32 resize-none"
              value={formData.enquiry}
              onChange={(e) => setFormData({ ...formData, enquiry: e.target.value })}
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;