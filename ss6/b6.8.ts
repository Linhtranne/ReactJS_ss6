let firstName: string = "linh";
let lastName: string = "ne";
let fullName: string;

function FirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

firstName = FirstLetter(firstName);
lastName = FirstLetter(lastName);

fullName = `${lastName} ${firstName}`;

console.log("Full Name:", fullName);
