class ShoppingBasket {
    constructor() {
        this.bag = new Array();
    };

    allItems() {
        return this.bag;
    };
    
    add(item) { const newItem = new Candy(item.name, item.price); {
        return this.bag.push(newItem)
        };
    };

    getTotalPrice() {
        const newArray = this.bag.map((record) => {
            return record.price
        });

        let sum = newArray.reduce(function (a, b) {
            return a + b;
          }, 0);
          return sum;
    };
}

module.exports = ShoppingBasket;