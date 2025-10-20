import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white font-poppins tracking-tighter mb-4">
          Traffic isn't just an inconvenience.
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-yellow-400 font-poppins tracking-tighter mb-8">
          It's stealing years from your life.
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Filipinos have become desensitized to traffic as a daily reality. But the hours spent in gridlock add up to a shocking amount of our precious time. Let's visualize the true cost.
        </p>
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
                <p className="text-sm text-yellow-400 font-semibold mb-2">The Daily Grind</p>
                <p className="text-2xl font-bold text-white">
                    Commuters spend <span className="text-yellow-400">2 to 4 hours</span> on the road every single day.
                </p>
                <p className="text-xs text-gray-400 mt-3">Source: University of the Philippines NCTS</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
                <p className="text-sm text-yellow-400 font-semibold mb-2">The Personal Cost</p>
                <p className="text-2xl font-bold text-white">
                    That's over <span className="text-yellow-400">27 full days</span> per year for one person, completely lost to traffic.
                </p>
                 <p className="text-xs text-gray-400 mt-3">Based on a 2.5hr daily roundtrip commute</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm md:col-span-2">
                <p className="text-sm text-yellow-400 font-semibold mb-2">The National Cost</p>
                <p className="text-2xl font-bold text-white">
                    Gridlock costs the national economy an estimated <span className="text-yellow-400">₱1.3 trillion</span> annually.
                </p>
                <p className="text-xs text-gray-400 mt-3">Source: Japan International Cooperation Agency (JICA)</p>
            </div>
        </div>
      </div>
    </section>
  );
};