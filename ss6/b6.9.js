"use strict";
function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeDuplicates("banana"));
console.log(removeDuplicates("hello world"));
