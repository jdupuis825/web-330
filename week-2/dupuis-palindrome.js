/*
============================================
; Title: dupuis-palindrome.js
; Author: Jocelyn Dupuis
; Date: 05/31/2023
; Description: JavaScript file for Palindrome App
============================================
*/

// Function declared for obtaining current date
function getTodaysDate() {
    const date = new Date().toLocaleDateString('en-US'); // Variable declared containing current date
    return date; // Returns the date
}

// Function declared to get the length of the string
function getLength(str) {
    return str.length; // Returns length of parameter provided
}

// Function declared to reverse the string
function reverse(str) {
    let string = str.split(""); // Splits the parameter into an array
    string = string.reverse(); // Reverses the string
    string = string.join(""); // Joins the string back together

    return string; // Returns reversed string
}

// Function declared to determine if the parameter is a palindrome
function isPalindrome(str) {
    let palindrome = false; // Variable declared with false boolean value

    // If string (str) is equal to str
    if (reverse(str) == str) {
        palindrome = true; // Palindrome set to true
    }

    return palindrome; // Returns either the true or false value of the palindrome
}

// Onclick event to see if phrase is palindrome
document.getElementById("btnCheckPhrase").onclick = function() {
    let txtPhrase = document.getElementById('txtPhrase').value.toLowerCase(); // Variable declared for HTML test input 
    let assignResultsHeader = document.getElementById('assign-results-header'); // Variable declared for results header
    let assignResults = document.getElementById('assign-results'); // Variable declared for assigned results
    let today = getTodaysDate(); // Variable declared for todays date
    let len = getLength(txtPhrase); // Variable declared for phrase length
    let reversePhrase = reverse(txtPhrase); // Variable declared for reversed phrase

    let header = "Date: " + today + `<br/>`+ "Original Phrase: " + txtPhrase + `<br/>`+ "Reversed Phrase: "
        + reversePhrase + `<br/>`+ "Phrase Length: " + len; // Variable declared for HTML header and displays date 

    assignResultsHeader.innerHTML = header; // Displays results from inner HTML

    // If the palindrome is a palindrome & if not 
    if (isPalindrome(txtPhrase)) {
        assignResults.innerHTML = txtPhrase + ` <b><u>is</u></b>` + " a palindrome!"; // Displays string phrase is true 
    } else {
        assignResults.innerHTML = txtPhrase + ` <b><u>is not</u></b>` + " a palindrome!"; // Displays string phrase is false 
    }
}