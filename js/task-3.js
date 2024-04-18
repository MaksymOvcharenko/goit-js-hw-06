class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
// (this.items = this.items
// .slice(0, this.items.indexOf(item))
// .concat(this.items.slice(this.items.indexOf(item) + 1)));
