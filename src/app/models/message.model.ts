export class Message {
  text: string;

  constructor() {
    this.text = "";
  }

  static generateMockInstance(): Message {
    return {
      text: ""
    };
  }
}
