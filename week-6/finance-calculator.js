/*
============================================
; Title: finance-calculator.js
; Author: Jocelyn Dupuis
; Date: 07/01/2023
; Description: finance-calculator file for Future Value App
============================================
*/

// Exports and declares finance calculator class
export class FinanceCalculator {
    // Static property for number of months in year
    static MONTHS_IN_YEAR = 12;
    // Static function declared for future values 
    static calculateFutureValue(monthlyPayment, rate, years) {
        // Variables declared for months, interest rates, present value, and future value
        const months = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + rate / 100;
        const presentValue = monthlyPayment * months;
        const futureValue =  presentValue * (Math.pow(interestRate, months));
        // Returns future value set to two decimal places
        return futureValue.toFixed(2);
    }
    // Static function declares to convert currency
    static convertToCurrency(field) {
        // Variable declared for formatting to USD currency 
        const currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
      // Returns currency format 
      return currencyFormatter.format(field);
    }
  }