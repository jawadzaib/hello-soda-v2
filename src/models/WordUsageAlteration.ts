class WordUsageAlteration {
  private description: any;
  private count: any;
  private foundIn: any;
  private advisory: any;

  constructor(data: any) {
    this.description = data && data.description ? data.description : '';
    this.count = data && data.count ? data.count : 0;
    this.foundIn = data && data.foundIn ? data.foundIn : false;
    this.advisory = data && data.advisory ? data.advisory : '';
  }

  getDescription() {
    return this.description;
  }
  getCount() {
    return this.count;
  }
  getFoundIn() {
    return this.foundIn;
  }
  getAdvisory() {
    return this.advisory;
  }
}

export default WordUsageAlteration;
