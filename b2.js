"use strict";
class Product {
    constructor(productId, productName, productPrice) {
        this.id = productId;
        this.name = productName;
        this.price = productPrice;
    }
}
class CartProduct extends Product {
    constructor(productId, productName, productPrice, productQuantity) {
        super(productId, productName, productPrice);
        this.quantity = productQuantity;
    }
    calculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity(amount) {
        this.quantity += amount;
    }
    decreaseQuantity(amount) {
        if (this.quantity - amount >= 0) {
            this.quantity -= amount;
        }
        else {
            console.log("Cannot decrease quantity below zero.");
        }
    }
}
class ShopProduct extends Product {
    constructor(productId, productName, productPrice, productStock) {
        super(productId, productName, productPrice);
        this.stock;
    }
}
