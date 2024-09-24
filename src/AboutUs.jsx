export default function AboutUs() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            About Our Email Marketing Platform
          </h2>
          <div className="mt-6 text-xl text-gray-500 space-y-6">
            <p>
              Welcome to our cutting-edge email marketing solution. We're passionate about helping businesses connect with their audience through powerful, personalized email campaigns.
            </p>
            <p>
              Founded in 2023, our team of marketing experts and tech enthusiasts have come together to create a platform that combines ease of use with advanced features, ensuring that businesses of all sizes can harness the power of email marketing.
            </p>
            <p>
              Our mission is to empower marketers and business owners to create meaningful connections with their customers, drive engagement, and achieve measurable results through innovative email marketing strategies.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-indigo-700">Our Core Values</h3>
            <ul className="mt-4 space-y-4 text-lg text-gray-500">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Innovation: We constantly push the boundaries of what's possible in email marketing.
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Customer Success: Your success is our success. We're committed to helping you achieve your goals.
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Data Privacy: We prioritize the security and privacy of your data and your customers' information.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }