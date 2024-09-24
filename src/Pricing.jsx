export default function Pricing() {
    const plans = [
      {
        name: 'Basic',
        price: '$29',
        features: [
          'Up to 10,000 subscribers',
          'Unlimited emails',
          'Basic templates',
          'Email support',
        ],
        cta: 'Start with Basic',
      },
      {
        name: 'Pro',
        price: '$79',
        features: [
          'Up to 50,000 subscribers',
          'Unlimited emails',
          'Advanced templates',
          'Priority email support',
          'A/B testing',
        ],
        cta: 'Upgrade to Pro',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited subscribers',
          'Unlimited emails',
          'Custom templates',
          '24/7 phone support',
          'Advanced analytics',
          'Dedicated account manager',
        ],
        cta: 'Contact Sales',
      },
    ]
  
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl text-center">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Choose the perfect plan for your business needs
          </p>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md divide-y divide-gray-200 ${plan.highlighted ? 'border-2 border-indigo-500' : ''}`}>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-indigo-900">{plan.name}</h3>
                  <p className="mt-4 text-5xl font-extrabold text-gray-900">{plan.price}</p>
                  <p className="mt-1 text-sm text-gray-500">{plan.name === 'Enterprise' ? 'Contact us for pricing' : 'per month'}</p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4">
                  <button
                    className={`w-full px-4 py-2 text-base font-medium rounded-md ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-200 text-white hover:bg-indigo-600'
                        : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100'
                    } focus:outline-none `}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }