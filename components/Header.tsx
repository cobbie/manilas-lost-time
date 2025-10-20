import React from 'react';

interface HeaderProps {
    navigateTo: (page: 'home' | 'solutions') => void;
}

export const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="py-6 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-8">
                <button onClick={() => navigateTo('home')} className="text-xl md:text-2xl font-bold text-yellow-400 font-poppins">
                    Manila's Lost Time
                </button>
                <button onClick={() => navigateTo('solutions')} className="text-sm font-semibold text-gray-300 hover:text-yellow-400 transition-colors">
                    Solutions
                </button>
            </div>
          <a
            href="https://google.com/search?q=metro+manila+traffic+solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Research Further
          </a>
        </div>
      </div>
    </header>
  );
};
