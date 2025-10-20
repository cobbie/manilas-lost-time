import React from 'react';

interface HeaderProps {
  navigateTo: (page: 'home' | 'solutions') => void;
}

export const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="py-4 shadow-md bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-red-500 focus:outline-none">Manila's Lost Time</button>
        <nav>
          <button onClick={() => navigateTo('solutions')} className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">Solutions</button>
        </nav>
      </div>
    </header>
  );
};
