class IDGenerator {
    constructor(prefix = "ID") {
      this.prefix = prefix; //optional
      this.currentID = 0;
    }
  
    next() {
      this.currentID += 1;
      return `${this.prefix}-${this.currentID}`;
    }
  
    reset() {
      this.currentID = 0;
    }
  
    [Symbol.iterator]() {
      return {
        currentID: this.currentID,
        prefix: this.prefix,
        next: () => {
          this.currentID += 1;
          return { value: `${this.prefix}-${this.currentID}`, done: false };
        }
      };
    }
  }
  
  const generator = new IDGenerator("Cycle");
  
  for (const id of generator) {
    console.log(id);
    if (parseInt(id.split("-")[1]) >= 3) break;
  }
  