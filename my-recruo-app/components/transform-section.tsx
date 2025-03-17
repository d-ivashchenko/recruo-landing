import React from 'react';
import { CheckCircle } from 'lucide-react';

const TransformSection = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Transform your hiring approach with
              <span className="text-orange-500"> Recruo!</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Enhance your recruitment process through advanced AI technology that streamlines
              technical interviews and candidate pre-screening.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-bold text-white">Revolutionary AI Integration</span> - Our platform offers a cutting-edge method for
                  conducting technical interviews, ensuring you find the right talent efficiently.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-bold text-white">Data-Driven Outcomes</span> - Leverage our analytical tools to reduce your time-
                  to-hire significantly while enhancing candidate quality.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-bold text-white">Tailored Solutions</span> - Our services adapt to the unique hiring needs of your
                  organization, providing both flexibility and efficiency.
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              Join forward-thinking organizations that are transforming their recruitment strategies
              with our AI-powered solutions. Start your journey towards achieving hiring excellence
              today!
            </p>

            <button 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600"
            >
              Get Started Today
            </button>
          </div>

          <div className="relative">
            <img 
              src="/people_puzzle.png" 
              alt="Puzzle piece with business person" 
              className="w-full rounded-lg"
            />
            <img 
              src="/publicContain2.webp" 
              alt="Group of people icons" 
              className="absolute -bottom-4 -right-4 w-64 rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransformSection;