import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import type { CityTrafficData } from '../types';

const data: CityTrafficData[] = [
    { city: 'Manila', country: 'Philippines', minutes: 25.5, timeString: '25m 30s' },
    { city: 'Dublin', country: 'Ireland', minutes: 25.5, timeString: '25m 30s' },
    { city: 'Toronto', country: 'Canada', minutes: 25, timeString: '25m 00s' },
    { city: 'London', country: 'UK', minutes: 24.83, timeString: '24m 50s' },
    { city: 'Lima', country: 'Peru', minutes: 24.33, timeString: '24m 20s' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload as CityTrafficData;
      return (
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
          <p className="text-white font-bold">{`${dataPoint.city}, ${dataPoint.country}`}</p>
          <p className="text-yellow-400">{`Avg. time for 10km: ${dataPoint.timeString}`}</p>
        </div>
      );
    }
    return null;
};

const CustomYAxisTick = ({ y, payload }: any) => {
    return (
        <g transform={`translate(0,${y})`}>
            <text x={0} y={0} dy={-4} textAnchor="start" fill="#A0AEC0" fontSize={14} fontWeight="bold">
                {payload.value}
            </text>
        </g>
    );
};

export const WorldComparisonSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">The World's Slowest Cities</h2>
        <p className="text-gray-400 text-lg">
          In 2023, Metro Manila was ranked as having the slowest travel time in the world. Here's how it compares to other congested metro areas for a 10km trip.
        </p>
      </div>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" horizontal={false} />
            <XAxis type="number" domain={[0, 30]} tick={{ fill: '#A0AEC0' }} label={{ value: 'Average minutes to travel 10km', position: 'insideBottom', fill: '#A0AEC0', dy: 20 }} />
            <YAxis 
                type="category" 
                dataKey="city" 
                tick={<CustomYAxisTick />}
                width={80}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(236, 204, 104, 0.1)'}} />
            <Bar dataKey="minutes">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.city === 'Manila' ? '#FBBF24' : '#718096'} />
                ))}
                <LabelList dataKey="timeString" position="right" style={{ fill: 'white', fontWeight: 'bold' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        Source: TomTom Traffic Index 2023 (Metro Area Rankings)
      </p>
    </section>
  );
};