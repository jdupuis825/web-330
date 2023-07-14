/*
============================================
; Title: footer.js
; Author: Jocelyn Dupuis
; Date: 07/14/2023
; Description: JS file for WhatABook App
============================================
*/

// Create class and export
export class HttpClient {
    // Function created with two parameters 
    async get(url, params) {
        // Instantiate new url object
        url = new URL(url);

        // Instantiate new URLSearchParams object and supplying the params parameter
        // Assign it to url.search property
        url.search = new URLSearchParams(params);

        // Object literal named res and using fetch() API passing in the url.String() variable
        const res = await fetch(url.toString(), {
            // Specify the request as a GET request
            method: "GET",
        })

        // Return res object literal as JSON
        const data = await res.json();
        return data;
    }
}

