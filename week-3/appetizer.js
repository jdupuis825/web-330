/*
============================================
; Title: appetizer.js
; Author: Jocelyn Dupuis
; Date: 06/08/2023
; Description: JavaScript file for Restaurant App
============================================
*/

// Imports Product object from product.js
import { Product } from "./product.js";

// Class created to inherit Product object with teo parameters 
export class Appetizer extends Product {
    constructor(name, price) {
        // Parameters pass through super() function and exported 
        super(name, price);
    }
}
