import { useEffect, useState } from 'react';
import BpmChart from '../../components/BpmChart';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const initialData = [
  { name: '0', uv: 78, pv: 80 },
  { name: '1', uv: 80, pv: 90 },
  { name: '2', uv: 82, pv: 92 },
  { name: '3', uv: 80, pv: 88 },
  { name: '4', uv: 78 },
  { name: '5', uv: 85, pv: 95 },
  { name: '6', uv: 85, pv: 98 },
  { name: '7', uv: 87, pv: 100 },
  { name: '8', uv: 80, pv: 88 },
  { name: '9', uv: 78, pv: 90 },
  { name: '10', uv: 85, pv: 95 },
  { name: '11', uv: 85, pv: 95 },
  { name: '12', uv: 85, pv: 98 },
  { name: '13', uv: 87, pv: 100 },
];

export default function BranchBpm() {
  
  const [data, setData] = useState(initialData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setData((prev: any) => {
  //       const newPoints = {
  //         name: Date.now(),
  //         uv: getRandomInt(70, 95),
  //         pv: getRandomInt(80, 110),
  //       }
  //       return [...prev, newPoints ].slice(1);
  //     });
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <BpmChart data={data} />
  );
}