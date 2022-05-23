import React from 'react';
import { Line} from 'react-chartjs-2';

const App = () => {
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales for 2022 (M)',
        data: [3, 4, 5, 6, 2],
      },
    ],
  };

  return (
    <div>
      <Line data={data}/>
    </div>
  )
}

export default App