import React from 'react';
import Navbar from './Navbar';
import { FaCheckCircle, FaEnvelopeOpen, FaMobileAlt, FaRegClock, FaUserShield } from 'react-icons/fa';
import { FiUsers, FiMail } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import {Link} from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="h-screen bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Email Marketing Pro</h1>
          <p className="text-xl md:text-2xl mb-8">
            The most powerful, intuitive, and effective email marketing solution designed to grow your business.
          </p>
          <button className="bg-white h-14 mt-10 text-violet-500 font-bold py-2 px-6 rounded-md transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white hover:border">
            Get Started for Free
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-indigo-500">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: FaCheckCircle, title: "High Deliverability", desc: "Our emails reach the inbox, not spam." },
              { icon: FaEnvelopeOpen, title: "Engagement Tracking", desc: "Analyze open and click rates effortlessly." },
              { icon: FaMobileAlt, title: "Mobile-Friendly", desc: "Optimized for every device, every time." },
              { icon: FaUserShield, title: "Secure & Private", desc: "Your data is safe and secure with us." },
              { icon: FaRegClock, title: "Scheduled Campaigns", desc: "Automate your emails at the perfect time." },
              { icon: FiMail, title: "Custom Templates", desc: "Use or create beautiful email templates." },
            ].map((feature, index) => (
              <div key={index} className="shadow-sm p-6 rounded-lg hover:shadow-md transition-shadow">
                <feature.icon className="text-indigo-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-indigo-500 mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-indigo-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Email Campaigns", desc: "Run targeted campaigns to reach your audience." },
              { title: "Automated Workflows", desc: "Automate repetitive tasks and stay consistent." },
              { title: "Advanced Analytics", desc: "Track and measure every email’s performance." },
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-500">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-indigo-500">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Marketing Manager", feedback: "This platform transformed our email marketing!" },
              { name: "Jane Smith", role: "CEO, StartUp", feedback: "Incredible results! Highly recommend it." },
              { name: "Chris Wilson", role: "Freelancer", feedback: "Easy to use and very effective." },
            ].map((testimonial, index) => (
              <div key={index} className="shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                <AiFillStar className="text-yellow-500 text-4xl mb-4" />
                <p className="italic mb-4">"{testimonial.feedback}"</p>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-400 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Email Marketing Pro. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
