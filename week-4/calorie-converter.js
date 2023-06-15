/*
============================================
; Title: calorie-converter.js
; Author: Jocelyn Dupuis
; Date: 06/15/2023
; Description: JavaScript file for Calorie App
============================================
*/

// Imports FoodModel class from JS food-model
import { FoodModel } from "./food-model.js";

// Create class to extend and export food model
export class CalorieConverter extends FoodModel {

    // Static variable created for food model objects
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ];

    // Function created to find food model objects
    static find(singleString) {

        // New array of data with food objects matching the parameter string
        let searchResult = CalorieConverter.data.filter(food => food.toLowerCase() == singleString);

        // Returns data results 
        return searchResult;
        
    }
}
