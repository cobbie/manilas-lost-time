import React, { useState, useMemo } from 'react';

const WEEKS_PER_YEAR = 52;
const AVG_LIFE_EXPECTANCY_YEARS = 71;
const AVG_WORK_YEARS = 40;

export const CalculatorSection: React.FC = () => {
  const [dailyHours, setDailyHours] = useState(2);
  const [includeWeekends, setIncludeWeekends] = useState(false);
  const [weekendHours, setWeekendHours] = useState(1);

  const totalLostHoursPerYear = useMemo(() => {
    const weekdayHours = dailyHours * 5 * WEEKS_PER_YEAR;
    const weekendTotalHours = includeWeekends ? weekendHours * WEEKS_PER_YEAR : 0;
    return weekdayHours + weekendTotalHours;
  }, [dailyHours, includeWeekends, weekendHours]);

  const totalLostDaysPerYear = totalLostHoursPerYear / 24;
  const totalLostYearsInLifetime = (totalLostDaysPerYear / 365) * AVG_WORK_YEARS;

  const formatDays = (days: number) => {
    if (days < 1) return `${(days * 24).toFixed(0)} hours`;
    return `${days.toFixed(1)} days`;
  };
  
  const formatYears = (years: number) => {
      if (years < 1) return `${(years * 12).toFixed(1)} months`;
      return `${years.toFixed(1)} years`;
  }

  return (
    <section id="calculator" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-inter tracking-tighter">
            What's Your Traffic 'Life Sentence'?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Use the sliders to estimate your personal time lost. The results are not just numbers—they represent the moments you'll never get back.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 space-y-8">
            <div>
              <label htmlFor="daily-hours" className="block text-lg font-medium text-gray-200">
                Weekday Commute (Round Trip)
              </label>
              <input
                type="range"
                id="daily-hours"
                min="0.5"
                max="6"
                step="0.5"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2 accent-red-600"
              />
               <div className="text-center text-2xl font-bold mt-2 text-white">{dailyHours} hours</div>
            </div>
            
            <div className="flex items-center">
                <input
                    id="include-weekends"
                    type="checkbox"
                    checked={includeWeekends}
                    onChange={(e) => setIncludeWeekends(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="include-weekends" className="ml-3 text-lg font-medium text-gray-200">
                    Include Weekends?
                </label>
            </div>

            {includeWeekends && (
                 <div className="transition-opacity duration-500 opacity-100">
                    <label htmlFor="weekend-hours" className="block text-lg font-medium text-gray-200">
                        Avg. Weekend Traffic (Total)
                    </label>
                    <input
                        type="range"
                        id="weekend-hours"
                        min="0"
                        max="8"
                        step="0.5"
                        value={weekendHours}
                        onChange={(e) => setWeekendHours(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2 accent-red-600"
                    />
                    <div className="text-center text-2xl font-bold mt-2 text-white">{weekendHours} hours</div>
                </div>
            )}
          </div>
          <div className="text-center space-y-4">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-lg">Lost per Year</p>
                <p className="text-4xl font-bold text-red-500">{formatDays(totalLostDaysPerYear)}</p>
            </div>
            <div className="bg-red-800 text-white p-6 rounded-lg border border-red-600">
                <p className="text-xl">Lost in a Lifetime</p>
                <p className="text-5xl font-extrabold">{formatYears(totalLostYearsInLifetime)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
