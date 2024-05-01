class Product {
    id: number;
    name: string;
    price: number;

    constructor(productId: number, productName: string, productPrice: number) {
        this.id = productId;
        this.name = productName;
        this.price = productPrice;
    }
}
class CartProduct extends Product {
    quantity: number;
    constructor(productId: number, productName: string, productPrice: number, productQuantity: number) {
        super(productId, productName, productPrice);
        this.quantity = productQuantity;
    }
    calculatePrice(): number {
        return this.price * this.quantity;
    }
    increaseQuantity(amount: number): void {
        this.quantity += amount;
    }
    decreaseQuantity(amount: number): void {
        if (this.quantity - amount >= 0) {
            this.quantity -= amount;
        } else {
            console.log("Cannot decrease quantity below zero.");
        }
    }
}
class ShopProduct extends Product {
    stock: number;
    constructor(productId: number, productName: string, productPrice: number, productStock: number) {
        super(productId, productName, productPrice);
        this.stock
