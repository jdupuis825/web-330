/*
============================================
; Title: float-min-field.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: Float-min-field file for Future Value App
============================================
*/

// Export and declares float min field class
export class FloatMinField {
    // Constructor declared and initializes name, field, and min
    constructor(name, field, min) {
      this.name = name;
      this.field = field;
      this.min = min;
    }
    // Validate function declared
    validate() {
      // Object greater than min
      if (parseFloat(this.field) > this.min) {
        // Returns true
        return true;
      } else {
        // Returns false
        return false;
      }
    }

    // Function declared to get message
    getMessage() {
      return this.name + " must be more than " + this.min + ". You entered " + this.field;
    }
  }
