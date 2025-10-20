import React from 'react';
import { FaClock, FaUser, FaGlobeAsia } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl font-inter tracking-tighter">
          <span className="block">Your Life, Not a Traffic Jam.</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
          We've become numb to the gridlock, but the hours stolen from us add up to years. See the staggering true cost of Manila's traffic crisis—for you, and for the nation.
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Card 1: The Daily Grind */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 backdrop-blur-sm">
          <FaClock className="text-3xl text-red-500 mb-3" />
          <h3 className="font-bold text-xl text-white">The Daily Grind</h3>
          <p className="text-gray-400 mt-2">
            Recent studies show the average one-way commute in Metro Manila is over an hour, meaning many spend 2 to 4 hours on the road every single day.
          </p>
        </div>
        {/* Card 2: The Personal Cost */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 backdrop-blur-sm">
          <FaUser className="text-3xl text-red-500 mb-3" />
          <h3 className="font-bold text-xl text-white">The Personal Cost</h3>
          <p className="text-gray-400 mt-2">
            Based on a 2.5-hour daily commute, the average person loses over <span className="font-bold text-red-500">27 full days</span> per year just sitting in traffic.
          </p>
        </div>
        {/* Card 3: The National Cost */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 backdrop-blur-sm">
          <FaGlobeAsia className="text-3xl text-red-500 mb-3" />
          <h3 className="font-bold text-xl text-white">The National Cost</h3>
          <p className="text-gray-400 mt-2">
            This daily gridlock costs the Philippine economy an estimated <span className="font-bold text-red-500">₱1.3 trillion</span> annually in lost productivity and fuel. (JICA)
          </p>
        </div>
      </div>
    </section>
  );
};
