export function steps(count: number): number {
  let steps: number = 0;

  if (count > 0 && Number.isInteger(count)){
    while (count !== 1) {
      if (count % 2 === 0){
        count = count /2;
        steps++;
      } else{
        count = count * 3 + 1;
        steps++;
      }
    }
    return steps;
  } else{
    throw "Only positive integers are allowed";
  }
}
