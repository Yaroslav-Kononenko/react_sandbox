class Contexts {
  constructor(coord) {
    this._x = coord;
  }

  alfatest() {
    console.log("Test");
  }

  betatest() {
    let variable = 123;

    console.log("Internal: ", variable);
  }
}

const sample = new Contexts(5);
console.log(sample._x);
