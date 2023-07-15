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
      // Object a string
      if(typeof this.field === 'string') {
        // Returns true
        return true;
      } else {
        // Returns false
        return false;
      }
    }
    
    //Function declared to get message
    getMessage() {
      return this.name + " is a required field.";
    }
  }