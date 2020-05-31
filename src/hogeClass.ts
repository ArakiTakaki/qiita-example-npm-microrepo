export class Hoge {
  private fuga: string;
  constructor() {
    this.fuga = 'fuga'
  }

  public hoge() {
    console.log('hoge');
  }

  public get getFuga() {
    return this.fuga;
  }

  public set setFuga(value: string) {
    this.fuga = value + 'fuga';
  }
}