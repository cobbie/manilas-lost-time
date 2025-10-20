import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Manila's Lost Time. A conceptual project to visualize the impact of traffic.</p>
        <p className="text-sm mt-2">Data sourced from the TomTom Traffic Index, JICA, and other public records. Created by Cobbie Quintos.</p>
      </div>
    </footer>
  );
};