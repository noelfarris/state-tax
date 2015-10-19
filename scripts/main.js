'use strict';
var subtotal = document.getElementById("subtotal");
var state = document.getElementById("state");
var tax = document.getElementById("tax");
var total = document.getElementById("total");



document.getElementById("thing").addEventListener("click", function(e) {
	console.log(state.value);
	var sTotal = subtotal.value;
	var sTax = 0;
	e.preventDefault();
    if (state.value === "WI") {
    	sTax = parseFloat(subtotal.value)*.055;
    	console.log("test");
    	var sTotal = parseFloat(subtotal.value) + sTax;
    };
    console.log(sTotal);

    tax.innerHTML = "Your tax is: " + Math.round(sTax * 100) /100;
    total.innerHTML = "Your total is: " + Math.round(sTotal * 100) /100;
});