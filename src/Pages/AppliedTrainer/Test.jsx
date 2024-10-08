import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Test = () => {
  const data = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ];

  return (
    <div className='w-96 h-96'>
      <PieChart data={data} />
    </div>
  );
};

export default Test;