/*
============================================
; Title: product.js
; Author: Jocelyn Dupuis
; Date: 06/21/2023
; Description: JavaScript file for Bobs Auto Repair App
============================================
*/

// Exports class product
export class Product {
    // Constructor and sets initial properties for product class and random product ID 
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(12).slice(2);
    }
}
