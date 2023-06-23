/*
============================================
; Title: cart-component.js
; Author: Jocelyn Dupuis
; Date: 06/21/2023
; Description: JavaScript file for Bobs Auto Repair App
============================================
*/

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    // Connects component when called
    connectedCallBack() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i>
        (<span id="cart-count"></span>)`;
    }
}

// Defines how the custom component is called
customElements.define('cart-component', CartComponent);