import React, { useEffect, useState } from 'react';
import './App.css';
import { csv } from 'd3'
import MySankey from './MySankey'
function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    csv('./quidd-bsc-transfers.csv').then(function (d, error) {
      if (error) {
        console.log(error);
      } else {
       setData(d)
      };
    });
  }, [])
  console.log(data); 
  return (
    <div className="App">
      <MySankey data={data} />
    </div>
  );
}

export default App;
