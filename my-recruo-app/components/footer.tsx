import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  variant?: 'default' | 'clean'
}

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC<FooterProps> = ({ variant = 'default' }) => {
  if (variant === 'clean') {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          {/* Main content with logo on left, columns on right */}
          <div className="flex gap-24">
            {/* Logo and slogan section */}
            <div className="w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/logo_recruo_test2_phs.png" 
                  alt="Recruo Logo" 
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold text-orange-500">Recruo</span>
              </div>
              <p className="text-gray-300">
                  We are a platform that provides improvements in recruitment using AI.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/company/recruo/" className="text-gray-400 hover:text-orange-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="flex-1 grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">About Us</a></li>
                  <li><a onClick={() => scrollToElement('pricing-section')} className="text-gray-300 hover:text-orange-500">Pricing</a></li>
                  {/* <li><a href="#" className="text-gray-300 hover:text-orange-500">Press</a></li> */}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Features</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Changelog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Integrations</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Demo</a></li>
                  {/* <li><a href="#" className="text-gray-300 hover:text-orange-500">Status Page</a></li> */}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-500">Security</a></li>
                  {/* <li><a href="#" className="text-gray-300 hover:text-orange-500">Changelog</a></li> */}
                  <li><a onClick={() => scrollToElement('contact-us-form')} className="text-gray-300 hover:text-orange-500">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Linkedin className="w-5 h-5 text-orange-500" />
                    <a 
                      href="https://www.linkedin.com/company/recruo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-orange-500"
                    >
                      Our LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-5 h-5 text-orange-500" />
                    info@recruo.com
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Krakow, Poland
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-gray-400">
              Copyright © {new Date().getFullYear()} Recruo Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Recruo</h3>
          <p className="text-gray-300 mb-4">
            We are a platform that provides improvements in recruitment using AI.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-bold mb-4">Menu</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Features</a></li>
            <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
            <li><a href="#" className="hover:text-orange-500">Demo</a></li>
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>AI-Powered Technical Interviews</li>
            <li>Pre-Screening of Candidates</li>
          </ul>
        </div>

        {/* Reach Out */}
        <div>
          <h4 className="font-bold mb-4">Reach Out</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-500" />
              (720) 588-8452
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              info@recruo.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              Boulder, Colorado
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800">
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <div>
            <a href="#" className="hover:text-orange-500">Terms and Conditions</a>
            <span className="mx-4">|</span>
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          </div>
          <div>© {new Date().getFullYear()} Recruo. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;


// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-2xl font-bold text-orange-500 mb-4">Recruo</h3>
//           <p className="text-gray-300 mb-4">
//             We are a platform that provides improvements in recruitment using AI.
//           </p>
//         </div>

//         {/* Menu */}
//         <div>
//           <h4 className="font-bold mb-4">Menu</h4>
//           <ul className="space-y-2 text-gray-300">
//             <li><a href="#" className="hover:text-orange-500">Home</a></li>
//             <li><a href="#" className="hover:text-orange-500">About Us</a></li>
//             <li><a href="#" className="hover:text-orange-500">Features</a></li>
//             <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
//             <li><a href="#" className="hover:text-orange-500">Demo</a></li>
//             <li><a href="#" className="hover:text-orange-500">Blog</a></li>
//             <li><a href="#" className="hover:text-orange-500">Careers</a></li>
//           </ul>
//         </div>

//         {/* Our Services */}
//         <div>
//           <h4 className="font-bold mb-4">Our Services</h4>
//           <ul className="space-y-2 text-gray-300">
//             <li>AI-Powered Technical Interviews</li>
//             <li>Pre-Screening of Candidates</li>
//             {/* <li>Streamlined Recruitment Processes</li> */}
//           </ul>
//         </div>

//         {/* Reach Out */}
//         <div>
//           <h4 className="font-bold mb-4">Reach Out</h4>
//           <ul className="space-y-4 text-gray-300">
//             <li className="flex items-center gap-2">
//               <Phone className="w-5 h-5 text-orange-500" />
//               (720) 588-8452
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail className="w-5 h-5 text-orange-500" />
//               info@recruo.com
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin className="w-5 h-5 text-orange-500" />
//               Boulder, Colorado
//             </li>
//           </ul>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800">
//         <div className="flex justify-between items-center text-gray-400 text-sm">
//           <div>
//             <a href="#" className="hover:text-orange-500">Terms and Conditions</a>
//             <span className="mx-4">|</span>
//             <a href="#" className="hover:text-orange-500">Privacy Policy</a>
//           </div>
//           <div>© {new Date().getFullYear()} Recruo. All rights reserved.</div>
//         </div>
//       </div>
//     </footer>
//   );
// };


// const FooterRestyled = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="container mx-auto px-6">
//         {/* Main footer content */}
//         <div className="mb-12">
//           <div className="flex items-center gap-2 mb-4">
//             <img 
//               src="/logo_recruo_test2_phs.png" 
//               alt="Recruo Logo" 
//               className="w-12 h-12"
//             />
//             <span className="text-2xl font-bold text-orange-500">Recruo</span>
//           </div>
//           <p className="text-gray-300 max-w-md">
//             AI-Powered Technical Interviews and Recruitment Solutions
//             like it was supposed to be!
//           </p>
//           <div className="flex gap-4 mt-6">
//             <a href="#" className="text-gray-400 hover:text-orange-500">
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-orange-500">
//               <Twitter className="w-6 h-6" />
//             </a>
//           </div>
//         </div>

//         {/* Navigation grid */}
//         <div className="grid grid-cols-4 gap-8">
//           <div>
//             <h3 className="font-bold text-lg mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Careers</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Press</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Product</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Features</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Changelog</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Integrations</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">See Recruo in Action</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Status Page</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Privacy Policy</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Security</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Changelog</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-orange-500">Contact Us</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-2 text-gray-300">
//                 <Phone className="w-5 h-5 text-orange-500" />
//                 (720) 588-8452
//               </li>
//               <li className="flex items-center gap-2 text-gray-300">
//                 <Mail className="w-5 h-5 text-orange-500" />
//                 info@recruo.com
//               </li>
//               <li className="flex items-center gap-2 text-gray-300">
//                 <MapPin className="w-5 h-5 text-orange-500" />
//                 Boulder, Colorado
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-8 border-t border-gray-800">
//           <div className="text-gray-400">
//             Copyright © {new Date().getFullYear()} Recruo Inc. All Rights Reserved
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };


export default Footer;