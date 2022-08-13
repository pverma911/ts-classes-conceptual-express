class super1 {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;

    console.log("Numbers from super1 class  ", num1, "  ", num2);
  }

  sum(): number {
    var sumVal = this.num1 + this.num2;

    return sumVal;
  }
}

class super2 extends super1 {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    super(num1, num2);
    this.num1 = num1;
    this.num2 = num2;

    console.log("Numbers from super2 class  ", num1, "  ", num2);
  }
}

export default super2;
