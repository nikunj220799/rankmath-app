import React, { useState } from 'react';
import './CryptoDashboard.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';

const CryptoDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Day');

  const dayData = [
    { name: '01', value: 1200 },
    { name: '02', value: 7800 },
    { name: '03', value: 800 },
  ];

  const weekData = [
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 3800 },
    { name: 'Wed', value: 5000 },
    { name: 'Thu', value: 3000 },
    { name: 'Fri', value: 6500 },
    { name: 'Sat', value: 7800 },
    { name: 'Sun', value: 6000 },
  ];

  const monthData = [
    { name: 'Week 1', value: 2200 },
    { name: 'Week 2', value: 7800 },
    { name: 'Week 3', value: 4500 },
    { name: 'Week 4', value: 6000 },
  ];

  const yearData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 2800 },
    { name: 'Mar', value: 1800 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 3200 },
    { name: 'Jun', value: 5500 },
    { name: 'Jul', value: 6800 },
    { name: 'Aug', value: 4200 },
    { name: 'Sep', value: 3600 },
    { name: 'Oct', value: 5000 },
    { name: 'Nov', value: 7800 },
    { name: 'Dec', value: 9000 },
  ];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const lowerValue = 4895;
  const higherValue = 9999;
  const currentNKCValue = 7780;

  const renderDot = (props, data) => {
    const { cx, cy, stroke, index } = props;
    if (index === data.length - 1) {
      return (
        <>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
            </feMerge>
          </filter>
          {/* The circle with the glowing effect */}
          <circle cx={cx} cy={cy} r={7} fill="#F4AE30" filter="url(#glow)" />
          <circle cx={cx} cy={cy} r={5} fill="#F4AE30" />
        </>
      );
    }
  };


  let selectedData = dayData;
  if (selectedPeriod === 'Week') {
    selectedData = weekData;
  } else if (selectedPeriod === 'Month') {
    selectedData = monthData;
  } else if (selectedPeriod === 'Year') {
    selectedData = yearData;
  }

  return (
    <div className="crypto-dashboard">
      <div className="graph-section">
        <div className="graph-buttons">
          <button
            className={selectedPeriod === 'Day' ? 'active' : ''}
            onClick={() => handlePeriodChange('Day')}
          >
            Day
          </button>
          <button
            className={selectedPeriod === 'Week' ? 'active' : ''}
            onClick={() => handlePeriodChange('Week')}
          >
            Week
          </button>
          <button
            className={selectedPeriod === 'Month' ? 'active' : ''}
            onClick={() => handlePeriodChange('Month')}
          >
            Month
          </button>
          <button
            className={selectedPeriod === 'Year' ? 'active' : ''}
            onClick={() => handlePeriodChange('Year')}
          >
            Year
          </button>
        </div>
        <div className="graph-container">
          <div className="graph-values">
            <div className="lower-value">
              <div className="dot red"></div>
              <div>Lower: ${lowerValue}</div>
            </div>
            <div className="higher-value">
              <div className="dot green"></div>
              <div>Higher: ${higherValue}</div>
            </div>
          </div>
          <div className="line-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={selectedData}>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F4AE30" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F4AE30" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <CartesianGrid strokeDasharray="0" />
                <Tooltip formatter={() => null} labelFormatter={() => null} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F4AE30"
                  strokeWidth={3} 
                  fill="url(#gradient)"
                  dot={(props) => renderDot(props, selectedData)} 
                />
                <Label
              value={`1 NKC=$9912`}
              position="insideTop" // Centered vertically at the top
              offset={0} // Centered horizontally
              fill="#000" // Text color
              fontSize={16} // Text size
              textAnchor="middle" // Center aligned horizontally
            />
              </AreaChart>
            </ResponsiveContainer>
            <div className="label-outside-chart">
              <span className="orange-dot" />
              1 NKC=$9912
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;
