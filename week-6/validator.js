/*
============================================
; Title: validator.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: Validator file for Future Value App
============================================
*/

// Imports the field objects from JS files
import {RequiredField} from "./required-field.js";
import {FloatField} from "./float-field.js";
import {FloatMinField} from "./float-min-field.js";
import {FloatMaxField} from "./float-max-field.js";

// Exports a validator class and declares constructor to initialize name and field
export class Validator {
    // Constructor declared and initiate variables
    constructor(name, field) {
        this.validators = [];
        this.messages = [];
        this.name = name;
        this.field = field;
    } 

    // Function declared to add required field
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    // Function declared to add required float field
    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    // Function declared to add float min value field
    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    // Function declared to add float max value field
    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // Validate function declared
    validate() {
        // For validators array
        for (let input of this.validators) {
            // If validate function returns false 
            if(!input.validate()) {
                this.messages.push(input.getMessage());
                // Returns false
                return false;
            }
        }
        // Returns true when all successfully validated
        return true;
    }
}
