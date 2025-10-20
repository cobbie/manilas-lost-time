import React from 'react';

interface SolutionsSectionProps {
    navigateTo: (page: 'solutions') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ navigateTo }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Is There Any Hope?</h2>
        <p className="text-gray-400 text-lg">
          The problem is massive, but not impossible to solve. So what can be done? How can the Philippines solve this crisis?
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <button 
                onClick={() => navigateTo('solutions')} 
                className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
            >
                Learn More
            </button>
        </div>
      </div>
    </section>
  );
};
