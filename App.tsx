import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WorldComparisonSection } from './components/WorldComparisonSection';
import { RushHourPenaltySection } from './components/GlobalComparisonSection';
import { CalculatorSection } from './components/CalculatorSection';
import { SolutionsSection } from './components/SolutionsSection';
import { Footer } from './components/Footer';
import { SolutionsPage } from './components/SolutionsPage';

type Page = 'home' | 'solutions';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-inter">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className={`absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-yellow-400 opacity-20 blur-[100px] transition-opacity duration-700 ${currentPage === 'solutions' ? 'opacity-0' : 'opacity-20'}`}></div>
      </div>
      
      <Header navigateTo={navigateTo} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <WorldComparisonSection />
            <RushHourPenaltySection />
            <CalculatorSection />
            <SolutionsSection navigateTo={navigateTo} />
          </>
        ) : (
          <SolutionsPage navigateTo={navigateTo} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
