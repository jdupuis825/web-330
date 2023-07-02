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
      return parseFloat(this.field) > parseFloat(this.max);
    }

    // Function declared to get message
    getMessage() {
      return this.name + " must be less than " + this.min + ". You entered " + this.field;
    }
  }
