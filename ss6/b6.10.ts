function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số không hợp lệ!";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số không hợp lệ!";
    }
    return Number(a) + Number(b);
}

function subtract(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số không hợp lệ!";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số không hợp lệ!";
    }
    return Number(a) - Number(b);
}

function multiply(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số không hợp lệ!";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số không hợp lệ!";
    }
    return Number(a) * Number(b);
}

function divide(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số không hợp lệ!";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số không hợp lệ!";
    }
    if (Number(b) === 0) {
        return "Không thể chia cho 0!";
    }
    return Number(a) / Number(b);
}

console.log(add(5, 3));
console.log(subtract(10, "5"));
console.log(multiply("6", 4));
console.log(divide("10", "2"));
console.log(add("abc", 3));
console.log(divide(10, "0"));
