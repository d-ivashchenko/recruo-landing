import React from 'react';
import { Mail, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const ContactForm = () => {
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
            
            {/* <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-bold">Call Us</div>
                <div>(720) 588-8452</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="font-bold">Our Location</div>
                <div>Boulder, Colorado</div>
              </div>
            </div> */}

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
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Company Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              SUBMIT YOUR INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;