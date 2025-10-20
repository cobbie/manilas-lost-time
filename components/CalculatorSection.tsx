import React, { useState, useMemo } from 'react';

const WORKING_DAYS_PER_WEEK = 5;
const WEEKS_PER_YEAR = 52; // Corrected from 50
const WORKING_YEARS = 40;

export const CalculatorSection: React.FC = () => {
  const [dailyCommuteHours, setDailyCommuteHours] = useState(3);
  const [includeWeekends, setIncludeWeekends] = useState(false);
  const [weekendCommuteHours, setWeekendCommuteHours] = useState(2);


  const timeLost = useMemo(() => {
    const weekdayHoursPerWeek = dailyCommuteHours * WORKING_DAYS_PER_WEEK;
    const weekendHoursPerWeek = includeWeekends ? weekendCommuteHours : 0;
    
    const totalHoursPerWeek = weekdayHoursPerWeek + weekendHoursPerWeek;
    const hoursPerYear = totalHoursPerWeek * WEEKS_PER_YEAR;
    const totalHours = hoursPerYear * WORKING_YEARS;
    
    const totalDays = totalHours / 24;
    const totalYears = Math.floor(totalDays / 365);
    const remainingDays = Math.floor(totalDays % 365);
    const totalMonths = Math.floor(remainingDays / 30);
    const finalDays = Math.floor(remainingDays % 30);

    return {
      perWeek: totalHoursPerWeek.toFixed(1),
      perYear: hoursPerYear.toLocaleString(),
      lifetimeYears: totalYears,
      lifetimeMonths: totalMonths,
      lifetimeDays: finalDays,
    };
  }, [dailyCommuteHours, includeWeekends, weekendCommuteHours]);

  return (
    <section className="py-16 md:py-24 bg-gray-800/50 rounded-3xl my-16 border border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">What's Your Traffic 'Life Sentence'?</h2>
          <p className="text-gray-400 text-lg">
            Use the sliders to match your commute time and see the staggering amount of your life spent on the road.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <label htmlFor="commute-slider" className="block text-center text-xl font-semibold mb-4">
              Daily Weekday Commute: <span className="text-yellow-400 text-2xl font-bold">{dailyCommuteHours}</span> hours
            </label>
            <input
              id="commute-slider"
              type="range"
              min="0.5"
              max="6"
              step="0.5"
              value={dailyCommuteHours}
              onChange={(e) => setDailyCommuteHours(parseFloat(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-yellow-400"
              aria-label="Daily weekday commute time in hours"
            />
             <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>30 mins</span>
                <span>6 hours</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 my-6">
            <input 
                type="checkbox" 
                id="include-weekends" 
                checked={includeWeekends} 
                onChange={() => setIncludeWeekends(!includeWeekends)}
                className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-yellow-400 focus:ring-yellow-500"
            />
            <label htmlFor="include-weekends" className="font-semibold text-gray-200">Include weekends?</label>
          </div>
          
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${includeWeekends ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
             <div className="mb-8">
                <label htmlFor="weekend-slider" className="block text-center text-lg font-semibold mb-4">
                    Total Weekend Traffic: <span className="text-yellow-400 text-xl font-bold">{weekendCommuteHours}</span> hours
                </label>
                <input
                  id="weekend-slider"
                  type="range"
                  min="0"
                  max="8"
                  step="0.5"
                  value={weekendCommuteHours}
                  onChange={(e) => setWeekendCommuteHours(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-md accent-yellow-400"
                  aria-label="Total weekend traffic time in hours"
                />
                 <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>0 hours</span>
                    <span>8 hours</span>
                </div>
              </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <p className="text-gray-400 text-sm">Lost per Week</p>
              <p className="text-3xl font-bold text-yellow-400">{timeLost.perWeek} <span className="text-lg font-medium text-gray-300">hours</span></p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <p className="text-gray-400 text-sm">Lost per Year</p>
              <p className="text-3xl font-bold text-yellow-400">{timeLost.perYear} <span className="text-lg font-medium text-gray-300">hours</span></p>
            </div>
            <div className="bg-yellow-400 p-6 rounded-xl text-gray-900 md:col-span-3">
              <p className="font-semibold opacity-80 text-sm">Total Lost Over a 40-Year Career</p>
              <p className="text-3xl md:text-4xl font-black">
                {timeLost.lifetimeYears} <span className="text-2xl font-bold opacity-90">years,</span> {timeLost.lifetimeMonths} <span className="text-2xl font-bold opacity-90">months,</span> {timeLost.lifetimeDays} <span className="text-2xl font-bold opacity-90">days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};