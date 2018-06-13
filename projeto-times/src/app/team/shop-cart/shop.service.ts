
export class ShoppingCartService {
  items = []

  clear() {
    this.items = []
  }

  addItem(item) {
    console.log(item);
    let foundItem = this.items.find((mItem) => mItem.id === item.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1
    }
    else {
      this.items.push(item)
    }
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    console.log(this.items[0].value())
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
