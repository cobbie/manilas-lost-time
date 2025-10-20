import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CityTrafficData } from '../types';

const worldData: CityTrafficData[] = [
  { city: 'Manila', minutes: 29.8 },
  { city: 'Dublin', minutes: 29.5 },
  { city: 'Toronto', minutes: 29.0 },
  { city: 'London', minutes: 28.5 },
  { city: 'Lima', minutes: 28.3 },
];

export const WorldComparisonSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-inter tracking-tighter">
            The World's Slowest Cities
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            In 2023, Metro Manila was ranked as having the worst traffic congestion in the world. Here's how the average time to travel 10km compares to other gridlocked cities.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={worldData} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
                    <XAxis type="number" stroke="#9CA3AF" domain={[0, 32]} tickFormatter={(tick) => `${tick} min`} />
                    <YAxis dataKey="city" type="category" stroke="#9CA3AF" width={80} tick={{ fill: '#D1D5DB' }} />
                    <Tooltip 
                        cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                        contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }}
                        labelStyle={{ color: '#F9FAFB' }}
                    />
                    <Bar dataKey="minutes" barSize={35} radius={[0, 8, 8, 0]}>
                         {worldData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.city === 'Manila' ? '#DC2626' : '#4B5563'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
