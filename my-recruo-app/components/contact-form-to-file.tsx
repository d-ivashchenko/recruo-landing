import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  
  // Form status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
    success: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ submitted: false, submitting: true, error: null, success: false });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
      
      setStatus({
        submitted: true,
        submitting: false,
        error: null,
        success: true
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        error: error.message,
        success: false
      });
    }
  };

  return (
    <div id="contact-us-form" className="container mx-auto px-6 py-24">
      <div className="bg-gray-900 rounded-2xl p-12 grid grid-cols-2 gap-12">
        {/* Left side - Contact Info */}
        <div className="bg-orange-500 rounded-xl p-8 text-white">
          <h2 className="text-2xl mb-8">
            CONNECT WITH RECRUO
          </h2>
          <h3 className="text-3xl font-bold mb-8">
            <MessageCircle className="w-8 h-8 inline-block mr-2 mb-1" />
            Unlock Modern Recruitment Solutions
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-bold">Reach Us Via Email</div>
                <div>info@recruo.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6" />
              <div>
                <div className="font-bold">Find Us on LinkedIn</div>
                <a 
                  href="https://www.linkedin.com/company/recruo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white-500"
                >
                  Our LinkedIn Page
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Twitter className="w-6 h-6" />
              <div>
                <div className="font-bold">Follow Us on X</div>
                <a 
                  href="https://twitter.com/recruo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white-500"
                >
                  @recruo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div>
          {status.success && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
              Thank you for your message! Your information has been saved.
            </div>
          )}
          
          {status.error && (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
              {status.error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status.submitting}
              className={`bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors ${
                status.submitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status.submitting ? 'SAVING...' : 'SUBMIT YOUR INQUIRY'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;