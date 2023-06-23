/*
============================================
; Title: product.js
; Author: Jocelyn Dupuis
; Date: 06/21/2023
; Description: JavaScript file for Bobs Auto Repair App
============================================
*/

// Exports class ShoppingCart
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // Counts order length
    count() {
        return this.products.length;
    }

    // Adds products to list
    add(product) {
        this.products.push(product);
    }

    // Lists the auto products
    * listProducts() {
        for(let product of this.products) {
            yield product;
        }
    }
}
