import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

interface BpmChartProps {
  data: any[];
}

export default function BpmChart({ data }: BpmChartProps) {

  const last = data[data.length - 1];
  const keys = Object.keys(last).filter(k => k != 'name');

  return (
    <div className="h-44 bg-slate-100 rounded-lg">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: -10, bottom: 10 }}
        >
          {keys.map(key => (
            <Line key={key} type="monotone" dataKey={key} stroke="#8884d8" isAnimationActive={false} />
          ))}
          <YAxis
            opacity={0.7}
            axisLine={false}
            tickLine={false}
            tickSize={13}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}