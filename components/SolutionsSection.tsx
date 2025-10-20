import React from 'react';

interface SolutionsSectionProps {
  navigateTo: (page: 'solutions') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ navigateTo }) => {
  return (
    <section id="solutions" className="py-16 sm:py-20 bg-gray-800 bg-opacity-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-inter tracking-tighter">
            Is There Any Hope?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            As an individual, changing a nation's infrastructure is a monumental task. The real power lies in awareness and advocating for large-scale, systemic reform. The government must be pressured to act on proven solutions.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigateTo('solutions')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
