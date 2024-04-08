"use strict";
let firstName = "linh";
let lastName = "ne";
let fullName;

function FirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

firstName = FirstLetter(firstName);
lastName = FirstLetter(lastName);

fullName = `${lâstName} ${firstName}`;

console.log("Full Name:", fullName);
