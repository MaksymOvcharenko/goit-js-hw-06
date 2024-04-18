class Storage {
  #items;
  constructor(params) {
    this.#items = params;
  }
  getItems() {
    return this.#items;
  }
  addItem(item) {
    return this.#items.push(item);
  }
  removeItem(item) {
    if (this.#items.includes(item)) {
      return (this.#items = this.#items
        .slice(0, this.#items.indexOf(item))
        .concat(this.#items.slice(this.#items.indexOf(item) + 1)));
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// return this.#items.splice(this.#items.indexOf(item), 1);
