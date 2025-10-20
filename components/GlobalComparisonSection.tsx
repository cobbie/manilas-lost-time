import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TravelConditionData } from '../types';

const rushHourData: TravelConditionData[] = [
  { condition: 'Ideal (Free-Flow)', minutes: 12, color: '#10B981' }, // Emerald
  { condition: 'Daily Average', minutes: 29, color: '#F59E0B' },   // Amber
  { condition: 'Peak Rush Hour', minutes: 58, color: '#EF4444' },  // Red
];

export const RushHourPenaltySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-800 bg-opacity-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-inter tracking-tighter">
            The Rush Hour Penalty
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It's not just that traffic is bad; it's how dramatically worse it gets when it matters most. Here’s the time it takes to travel the same 10km in Metro Manila under different conditions.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto" style={{ height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rushHourData} layout="vertical" margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
              <XAxis type="number" stroke="#9CA3AF" domain={[0, 60]} tickFormatter={(tick) => `${tick} min`} />
              <YAxis dataKey="condition" type="category" stroke="#9CA3AF" width={120} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Bar dataKey="minutes" barSize={40} radius={[0, 8, 8, 0]}>
                {rushHourData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
