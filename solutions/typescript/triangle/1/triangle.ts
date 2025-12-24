
export class Triangle {
  constructor(
    public readonly a: number,
    public readonly b: number,
    public readonly c: number
  ) {}

  get isValid(): boolean {
    return this.a + this.b > this.c &&
           this.a + this.c > this.b &&
           this.b + this.c > this.a &&
           [this.a, this.b, this.c].every(side => side > 0);
  }

  get isEquilateral(): boolean {
    return this.isValid && new Set([this.a, this.b, this.c]).size === 1;
  }

  get isIsosceles(): boolean {
    return this.isValid && (new Set([this.a, this.b, this.c]).size === 2 || new Set([this.a, this.b, this.c]).size === 1);
  }

  get isScalene(): boolean {
    return this.isValid && new Set([this.a, this.b, this.c]).size === 3;
  }
}
