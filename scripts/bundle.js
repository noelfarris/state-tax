(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var subtotal = document.getElementById("subtotal");
var state = document.getElementById("state");
var tax = document.getElementById("tax");
var total = document.getElementById("total");

document.getElementById("thing").addEventListener("click", function (e) {
   console.log(state.value);
   var sTotal = subtotal.value;
   var sTax = 0;
   e.preventDefault();
   if (state.value === "WI") {
      sTax = parseFloat(subtotal.value) * .055;
      console.log("test");
      var sTotal = parseFloat(subtotal.value) + sTax;
   };
   console.log(sTotal);

   tax.innerHTML = "Your tax is: " + Math.round(sTax * 100) / 100;
   total.innerHTML = "Your total is: " + Math.round(sTotal * 100) / 100;
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
