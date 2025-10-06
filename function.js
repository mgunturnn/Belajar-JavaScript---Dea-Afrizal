// function addName1(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     console.log(fullName);
//     return fullName;
// }

// function addName2() {
//     console.log(`Nama Awal: ${arguments[0]}`);
//     console.log(`Nama Akhir: ${arguments[1]}`);
// }

// function addName3() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// addName1("John", "Doe");

// const fullName = function addName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
//     return firstName + " " + lastName;
// }

// fullName("John", "Doe");

// function addName(firstName, lastName) {
//     console.log(firstName, lastName);
// }

// const fullName = new Function("firstName", "lastName", "console.log(firstName, lastName)");

// fullName("John", "Doe");

// cara 1 keyword new Function
const sum1 = new Function("a", "b", "return a + b");
console.log(sum1(10, 20));

// cara 2 standard function
function sum2(a, b) {
    return a + b;
}

console.log(sum2(60, 20));

// cara 3 => arrow function
const sum3 = (x, y) => {
    return x + y;
}

console.log(sum3(35, 20));