/*
====================================
; Title: theme.js
; Author: Jocelyn Dupuis
; Date: 5/28/23
; Description: JS page for light mode and dark mode toggle
====================================
**/

// Function created to call setDefaultTheme
function setDefaultTheme() { 
	const theme = localStorage.getItem("mode") || "light-theme"; // Sets default to light mode
	const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off"; // Sets toggle for dark mode
	const iconText = localStorage.getItem("iconText") || "Light Mode"; // Sets toggle for light mode

	document.body.classList.value = theme; // Calls the theme
	document.getElementById("icon-mode").classList.add(iconMode); // Pushes dark mode to html
	document.getElementById("icon-text").innerHTML = iconText; // Pushes light mode to html
}

// Sets HTML body to selected theme or default light theme
function setSelectedTheme() { 
	document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
