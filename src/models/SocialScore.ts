class SocialScore {
  private name: string;
  private value: string;
  constructor(name: string, value: string = '0') {
    this.name = name;
    this.value = value;
  }
  getName() {
    return this.name;
  }
  getValue() {
    return this.value;
  }
  setValue(value: string) {
    this.value = value;
  }
}

export default SocialScore;
