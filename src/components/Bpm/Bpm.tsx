import { Activity } from 'phosphor-react'
import { useMemo } from 'react';
import { getColor } from './breakpoints';

interface BpmProps {
  value: number;
}

export default function Bpm({ value }: BpmProps) {
  const color = useMemo(() => getColor(value), [value]);
  return (
    <div
      className="inline-flex items-center gap-1"
      style={{ color }}
    >
      <Activity />
      {value}
    </div>
  );
}