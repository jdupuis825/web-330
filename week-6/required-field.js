/*
============================================
; Title: required-field.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: Require-field file for Future Value App
============================================
*/

// Exports and declares required field class
export class RequiredField {
    // Constructor declared to initialize name and field 
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
    // Validate function declared
    validate() {
      if(parseFloat(this.field)) {
        // Return false
        return false;
      }
      // Return true
      return true;
    }
  
    getMessage() {
      return this.name + " is a required field.";
    }
  }