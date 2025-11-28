export class Squares {
  constructor(public readonly count: number) {}

  get sumOfSquares(): number {
    let result: number = 0;
    
    for (let index = 1; index <= this.count; index++) {
      result = result + Math.pow(index, 2);
    }
    
    return result;
  }

  get squareOfSum(): number {
    let result: number = 0;
    
    for (let index = 1; index <= this.count; index++) {
      result = result + index;
    }
    
    return Math.pow(result, 2);
  }

  get difference(): number {
    const squareOfSum: number = this.squareOfSum;
    const sumOfSquares: number = this.sumOfSquares;
    return squareOfSum - sumOfSquares;
  }
}
