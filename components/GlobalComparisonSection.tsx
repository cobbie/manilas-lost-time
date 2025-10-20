import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import type { TravelConditionData } from '../types';

// Data reflects different travel conditions in Metro Manila for a 10km trip.
// Rush Hour data is based on cited average speeds of 10-15km/h from various transport studies.
// Average and Free-Flow data is from the TomTom Traffic Index 2023.
const data: TravelConditionData[] = [
    { condition: 'Peak Rush Hour', minutes: 55, timeString: 'approx. 55m' },
    { condition: 'Daily Average', minutes: 25.5, timeString: '25m 30s' },
    { condition: 'Ideal (Free-Flow)', minutes: 12, timeString: '12m 00s' },
];

const COLORS = ['#EF4444', '#FBBF24', '#22C55E'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload as TravelConditionData;
      return (
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
          <p className="text-white font-bold">{`${label}`}</p>
          <p className="text-yellow-400">{`Time for 10km: ${dataPoint.timeString}`}</p>
        </div>
      );
    }
    return null;
};

export const RushHourPenaltySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">The Rush Hour Penalty</h2>
        <p className="text-gray-400 text-lg">
          Average traffic stats don't tell the whole story. The real cost is felt during peak hours, when a short trip becomes an ordeal. Here’s the reality of a 10km journey in Manila.
        </p>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
            barCategoryGap={30}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis type="number" tick={{ fill: '#A0AEC0' }} domain={[0, 60]} label={{ value: 'Minutes to travel 10km', position: 'insideBottom', fill: '#A0AEC0', dy: 20 }}/>
            <YAxis type="category" dataKey="condition" tick={{ fill: '#A0AEC0', fontSize: 14 }} width={120} interval={0} />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(236, 204, 104, 0.1)'}} />
            <Bar dataKey="minutes" name="Time for 10km Trip">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList dataKey="timeString" position="right" style={{ fill: 'white', fontWeight: 'bold' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
       <p className="text-center text-xs text-gray-500 mt-4 max-w-2xl mx-auto">
          Source: Peak Rush Hour estimate based on transport studies (e.g., JICA) citing speeds dropping to 10-15 km/h. Daily Average & Ideal times from TomTom Traffic Index 2023.
       </p>
    </section>
  );
};