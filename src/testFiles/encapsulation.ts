export class Encaps {
  private a: number;

  constructor() {}

  setMember(x: number) {
    this.a = x;
  }

  getMember(): number {
    return this.a;
  }
}
