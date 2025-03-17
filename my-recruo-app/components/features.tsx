import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductSection = () => {
  return (
    <div id="features-section" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Leading recruitment intelligence for
          <br />
          <span className="text-orange-500">technical hiring teams</span>
        </h1>

        {/* CV Pre-screening Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="text-blue-400 mb-2">PRE-SCREEN</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform your CV screening process with AI
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Intelligent parsing and analysis of resumes to automatically extract and validate key skills, experience, and qualifications</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Advanced matching algorithms that compare candidate profiles against job requirements, considering both hard and soft skills</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Smart ranking system that prioritizes candidates based on experience level, skill relevance, and potential cultural fit</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <img 
              src="demo-screenshots/cv-vacancy-match.png"
              alt="CV Screening Dashboard"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Technical Interview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="md:order-2">
            <div className="text-blue-400 mb-2">INTERVIEW</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Streamline technical assessments with AI-powered interviews
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Dynamic technical interviews that adapt to candidate responses, ensuring comprehensive skill evaluation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Extensive library of technical questions across multiple programming languages, frameworks, and difficulty levels</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Real-time code execution and assessment with detailed analysis of code quality, efficiency, and best practices</p>
              </div>
            </div>
          </div>
          <div className="md:order-1 bg-gray-900 rounded-xl p-6">
            <img 
            //   src="/api/placeholder/600/400"
              src="demo-screenshots/interview-chat.png"
              alt="Technical Interview Interface"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Feedback Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="text-blue-400 mb-2">ANALYZE</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Get deep insights from comprehensive candidate feedback
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Advanced analytics dashboard providing detailed performance metrics across technical skills, problem-solving abilities, and communication</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>AI-generated comprehensive reports highlighting candidate strengths, growth areas, and specific technical competencies</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Comparative analysis tools to evaluate candidates against industry benchmarks and your top performers</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <img 
            //   src="/api/placeholder/600/400"
              src="demo-screenshots/candidate-feedback.png"
              alt="Feedback Analysis Dashboard"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Match Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="text-blue-400 mb-2">MATCH</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Make data-driven hiring decisions with intelligent matching
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Sophisticated matching algorithms that analyze technical requirements, soft skills, and cultural fit factors</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Detailed skill gap analysis with recommendations for candidate development and team training opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p>Predictive analytics to assess long-term candidate success potential based on historical hiring data</p>
              </div>
            </div>
          </div>
          <div className="md:order-1 bg-gray-900 rounded-xl p-6">
            <img 
            //   src="/api/placeholder/600/400"
              src="demo-screenshots/candidate-alignment.png"
              alt="Candidate Match Analysis"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;