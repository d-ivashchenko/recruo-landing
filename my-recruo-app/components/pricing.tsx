import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      subtitle: 'For startups',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Up to 50 technical interviews/month',
        'Basic AI pre-screening',
        'Standard question bank',
        'Email support',
        'Basic analytics',
        'Single team access',
        'Interview recording'
      ]
    },
    {
      name: 'Optimal',
      subtitle: 'For growing teams',
      monthlyPrice: 599,
      annualPrice: 479,
      isRecommended: true,
      features: [
        'Up to 200 technical interviews/month',
        'Advanced AI pre-screening',
        'Custom question bank',
        'Priority support',
        'Advanced analytics & reporting',
        'Multiple team access',
        'Interview recording & transcription',
        'API access',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'For large companies',
      price: 'Custom',
      features: [
        'Unlimited technical interviews',
        'Enterprise AI solutions',
        'Custom workflow automation',
        'Dedicated account manager',
        'Premium support 24/7',
        'Advanced security features',
        'Custom API solutions',
        'Full data ownership',
        'Custom integrations & training'
      ]
    }
  ];

  return (
    <div id="pricing-section" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-700 rounded-full cursor-pointer"
            >
              <div
                className={`absolute w-6 h-6 bg-orange-500 rounded-full top-1 transition-all ${
                  isAnnual ? 'left-9' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
            <span className="ml-2 text-orange-500 text-sm">Save 20%</span>
          </div>
        </div>

        <div className="flex gap-8 justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-96 rounded-xl ${
                plan.isRecommended
                  ? 'border-2 border-orange-500 bg-gray-900'
                  : 'border border-gray-800 bg-gray-900'
              }`}
            >
              <div className="p-8">
                {plan.isRecommended && (
                  <div className="text-orange-500 text-sm font-bold mb-2">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                
                <div className="my-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-white">Custom</div>
                  ) : (
                    <div className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-gray-400 text-base font-normal">/month</span>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg ${
                    plan.isRecommended
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Subscribe'}
                </button>
              </div>

              <div className="border-t border-gray-800 p-8">
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;