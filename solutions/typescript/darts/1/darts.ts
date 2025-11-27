export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  switch (true) {
    case distance <= 1:
      return 10;
      break;
    case distance <= 5:
      return 5;
      break;
    case distance <= 10:
      return 1;
      break;
    default:
      return 0;
  }
}