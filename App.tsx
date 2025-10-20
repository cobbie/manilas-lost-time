import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RushHourPenaltySection } from './components/GlobalComparisonSection';
import { CalculatorSection } from './components/CalculatorSection';
import { SolutionsSection } from './components/SolutionsSection';
import { Footer } from './components/Footer';
import { WorldComparisonSection } from './components/WorldComparisonSection';
import { SolutionsPage } from './components/SolutionsPage';

type Page = 'home' | 'solutions';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-red-900 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10">
        <Header navigateTo={navigateTo} />
        <main>
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
    </div>
  );
}

export default App;
