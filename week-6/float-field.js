/*
============================================
; Title: float-field.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: Float-field file for Future Value App
============================================
*/

// Export and declares float field class
export class FloatField {
    // Constructor declared to initialize name and field objects 
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
    // Validation function declared 
    validate() {
      if(!isNaN(this.field)) {
        // Returns true
        return true;
      } else {
        // Returns false
        return false;
      }
    }
    // Function declared to produce message 
    getMessage() {
      return this.name + " must be a float value. You entered " + this.field;
    }
  }
  