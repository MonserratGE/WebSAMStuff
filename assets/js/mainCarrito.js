class Carrito {
    #cart = [];
    #total = 0;

    constructor() {
        this.#cart = [];
        this.#total = 0;
    }

    addItemToShoppingCart(item) {

        this.#cart.push(item);
        this.#total += item.price;
    }

    getItems() {
        return this.#cart;
    }

    getTotal() {
        return this.#total;
    }

    removeItem(item) {
        this.#cart = this.#cart.filter(i => i !== item);
        this.#total -= item.price;
    }

    clearCart() {
        this.#cart = [];
        this.#total = 0;
    }

    getItem(item) {
        return this.#cart.find(i => i === item);
    }

    getItemIndex(item) {
        return this.#cart.findIndex(i => i === item);
    }

    updateItem(item, quantity) {
        this.#cart[this.getItemIndex(item)] = {
            ...item,
            quantity
        };
        this.#total -= item.price;
        this.#total += item.price * quantity;
    }

    
}