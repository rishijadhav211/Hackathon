import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Label} from 'recharts';
import Data from './data.json';


const Dashboard = () => {

// const [data, setData] = useState([]);

// console.log(data.fabrication);
// useEffect(() => {
//     fetch('./data.json')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);
let index=0;
const data = [
    { name: 'Apple', value: 400, color: '#0088FE' },
    { name: 'Banana', value: 300, color: '#00C49F' },
    { name: 'Cherry', value: 200, color: '#FFBB28' },
    { name: 'Grape', value: 100, color: '#FF8042' },
  ];


var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

return (
		<PieChart width={700} height={700}>
		    <Pie data={data} dataKey="value" nameKey="Anoke" outerRadius={250} >
                {data.map((entry,index) => (
                    <Cell key={`cell-${entry.name}`} fill={colorArray[index % colorArray.length]} />
                ))}

            </Pie>
		</PieChart>
);

////////////////////////


// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch('./data.json')
//     .then(response => response.json())
//     .then(data => setData(data))
//     .catch(error => console.error(error));
// }, []);

// // convert data to chart format
// console.log(data);
// const chartData = {
//   labels: data.map(item => item.label),
//   datasets: [
//     {
//       data: data.map(item => item.value),
//       backgroundColor: [
//         'red',
//         'green',
//         'blue',
//         // add more colors as needed
//       ],
//     },
//   ],
// };

// return (
//   <div>
//     <h2>My Pie Chart</h2>
//     <Pie data={chartData} />
//   </div>
// );
}

export default Dashboard;
