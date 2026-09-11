export function calculateSum(numbers) {
  return numbers.reduce((suma, nr) => suma + nr, 0);
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}