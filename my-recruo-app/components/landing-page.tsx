'use client'
import React from 'react';
import { ArrowRight, Bot, Users, Brain, Clock } from 'lucide-react';
import Footer from './footer';
// import ContactForm from './contact-form';
import ContactForm from './contact-form-to-file';
import TransformSection from './transform-section';
import PricingSection from './pricing';
import ProductSection from './features';
import TrustedBySection from './trusted-by';
import YouTubePlayer from './yt-player';

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/logo_recruo_test2_phs.png" 
              alt="Recruo Logo" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-orange-500">Recruo</span>
          </div>
          <div className="space-x-8">
            <button onClick={() => scrollToElement('features-section')} className="text-gray-300 hover:text-orange-500">Features</button>
            {/* <button onClick={() => scrollToElement('pricing-section')} className="text-gray-300 hover:text-orange-500">Pricing</button> */}
            <button onClick={() => scrollToElement('contact-us-form')} className="text-gray-300 hover:text-orange-500">Contacts</button>
            <button onClick={() => scrollToElement('contact-us-form')} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              // src="/api/placeholder/120/120" 
              src="/logo_recruo_test2_phs.png"
              alt="Recruo Logo Large" 
              className="w-64 h-64"
            />
          </div>
          <h1 className="text-6xl font-bold mb-8">
            Revolutionize Your 
            <span className="text-orange-500"> Hiring Process</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Automate candidate pre-screening and technical interviews with AI. 
            Make better hiring decisions, faster.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => (window.location.href = 'https://app.recruo.com')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-orange-600 flex items-center gap-2">
              Watch Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToElement('contact-us-form')}
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="p-8 rounded-xl bg-gray-900">
            <Bot className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI-Powered Screening</h3>
            <p className="text-gray-300">
              Our advanced AI technology revolutionizes the candidate evaluation process by analyzing skills and experience through sophisticated algorithms. 
              The system processes candidate data to provide comprehensive assessments, 
              enabling recruiters to make informed decisions based on objective criteria rather than relying solely on traditional screening methods.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-900">
            <Brain className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Technical Interviews</h3>
            <p className="text-gray-300">
              Our customizable AI interviewers bring a new dimension to technical assessments by conducting thorough, 
              standardized interviews that adapt to each candidate's responses. These intelligent systems evaluate technical proficiency across 
              multiple domains while maintaining consistency in the interview process, ensuring fair and comprehensive evaluation of all candidates.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-900">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Time Savings</h3>
            <p className="text-gray-300">
              By implementing our automated recruitment solutions, organizations can achieve a remarkable 50% reduction in hiring time without 
              compromising on candidate quality. This efficiency gain comes from streamlining the screening and interview processes, 
              eliminating bottlenecks, and enabling faster decision-making while maintaining high standards for candidate selection.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-900">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
            <p className="text-gray-300">
              Our platform facilitates seamless collaboration among hiring team members by providing shared access to candidate insights and assessment data. 
              Team members can easily review interview results, share feedback, and make collective decisions through our intuitive interface, 
              ensuring all stakeholders remain aligned throughout the hiring process.
            </p>
          </div>
        </div>
      </div>

      <TransformSection />
      <ProductSection />
      {/* <TrustedBySection />
      <YouTubePlayer /> */}

      <div className="container mx-auto px-6 py-24 text-center">
        <div className="bg-gray-900 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of companies making better hiring decisions with Recruo.</p>
          <button onClick={() => scrollToElement('contact-us-form')} className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-orange-600">
            Get Started Now
          </button>
        </div>
      </div>

      {/* <PricingSection /> */}
      <ContactForm />
      <Footer variant="clean" />
    </div>
  );
};

export default LandingPage;