/*
============================================
; Title: float-max-field.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: Float-max-field file for Future Value App
============================================
*/

// Export and declares float min field class
export class FloatMaxField {
    // Constructor declared and initializes name, field, and min
    constructor(name, field, max) {
      this.name = name;
      this.field = field;
      this.min = max;
    }
    // Validate function declared
    validate() {
      // Object less than max
      if (parseFloat(this.field) < this.max) {
        // Returns true
        return true;
      } else {
        // Returns false
        return false;
      }
    }

    // Function declared to get message
    getMessage() {
      return this.name + " must be less than " + this.max + ". You entered " + this.field;
    }
  }
