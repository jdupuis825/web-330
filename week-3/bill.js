/*
============================================
; Title: bill.js
; Author: Jocelyn Dupuis
; Date: 06/08/2023
; Description: JavaScript file for Restaurant App
============================================
*/

// New class declared for bill
export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    // Function declared to add new beverage option
    addBeverage(beverage) {
        // Pushes new beverage option into beverage array
        this._beverages.push(beverage);
    }

    // Function declared to add new appetizer option
    addBeverage(appetizer) {
        // Pushes new appetizer option into appetizer array
        this._appetizers.push(appetizer);
    }

    // Function declared to add new main course option
    addBeverage(mainCourse) {
        // Pushes new main course option into main course array
        this._mainCourses.push(mainCourse);
    }

    // Function declared to add new dessert option
    addBeverage(dessert) {
        // Pushes new dessert option into dessert array
        this._desserts.push(dessert);
    }

    // function declared to get total price of all menu items selected by user
    getTotal() {
        // Initialize variable at 0
        let total = 0;

        // Calculates total of beverage(s) user picked and adds to total price
        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        })

        // Calculates total of appetizer(s) user picked and adds to total price
        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        })

        // Calculates total of main course(s) user picked and adds to total price
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        })

        // Calculates total of dessert(s) user picked and adds to total price
        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        })

        // Total is set to be displayed with two decimal points
        return total.toFixed(2);
    }
}
