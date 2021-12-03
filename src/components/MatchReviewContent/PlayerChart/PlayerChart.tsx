import React from 'react';

import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type PlayerChartProps = {
  labels: string[];
  metricValues: number[];
};

export const PlayerChart: React.FC<PlayerChartProps> = ({ labels, metricValues }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const options = {
    indexAxis: 'y' as const,
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'value',
        data: metricValues,
        backgroundColor: metricValues.map((value) => (value > 0 ? '#F0556F' : '#AAD0F3')),
      },
    ],
  };

  return (
    <div className="cart">
      <Bar options={options} data={data} />
    </div>
  );
};
