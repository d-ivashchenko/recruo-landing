import React from 'react';
import { 
  GitBranch, 
  Database, 
  Cloud, 
  Server, 
  Code,
  Cpu
} from 'lucide-react';

const TrustedBySection = () => {
  const companies = [
    {
      name: 'DevTools Inc',
      description: 'Developer Tooling',
      Icon: GitBranch,  // Changed to capital I to indicate it's a component
      color: '#FF6B6B'
    },
    {
      name: 'DataScale',
      description: 'Data & AI Platform',
      Icon: Database,
      color: '#4ECDC4'
    },
    {
      name: 'CloudStack',
      description: 'Cloud Infrastructure',
      Icon: Cloud,
      color: '#45B7D1'
    },
    {
      name: 'CoreTech',
      description: 'Infrastructure Solutions',
      Icon: Server,
      color: '#96CEB4'
    },
    {
      name: 'CodeSync',
      description: 'Development Platform',
      Icon: Code,
      color: '#FF8B94'
    },
    {
      name: 'AICore',
      description: 'AI Solutions',
      Icon: Cpu,
      color: '#9B89B3'
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 text-xl mb-12">Empowering innovative companies to build better teams</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="bg-gray-900 rounded-xl p-8 flex flex-col items-center justify-center hover:border hover:border-orange-500 transition-all group"
              >
                <div className="mb-4">
                  <company.Icon 
                    size={48}
                    color={company.color}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-xl font-bold text-white mb-2">{company.name}</div>
                <div className="text-gray-400 text-sm">
                  {company.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;