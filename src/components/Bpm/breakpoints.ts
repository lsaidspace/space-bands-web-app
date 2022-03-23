export const breakpoints = [
  {
    value: 90,
    color: 'var(--jelo-warning)',
  },
  {
    value: 110,
    color: 'var(--jelo-alert)',
  }
];

const defaultColor = 'var(--jelo-green)';

export const getColor = (bpm: number) => {
  let result = defaultColor;
  for (const { value, color } of breakpoints) {
    if (bpm >= value) {
      result = color;
    }
  }
  return result;
}