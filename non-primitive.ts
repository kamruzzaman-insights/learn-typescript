let name: string[] = ["zaman", "raihan", "mahbub"];

name.push("abul");

console.log(name);

let mixedArray : (string | number)[] = ['eggs', 12, 'milk', 1];
mixedArray.push('apple');

console.log(mixedArray);

mixedArray.push("orange");
console.log(mixedArray);

mixedArray.push(12, 14, 16);
console.log(mixedArray);

mixedArray.push(11, 12, "string");
console.log(mixedArray);

let newArray = [11, 13, 15];
newArray.push(15);

console.log(newArray);
console.log("new array is a number type array. when i want to assign string type value in this array, compile warning me. string data assigned but it is should not done.")

let coOrdinates : [number, number] = [20, 30];
console.log(coOrdinates);

let nameAndRoll : [string, number] = ["zaman", 2018331533];
console.log(nameAndRoll);

const user : {
    readonly institution : string;
    firstName : string;
    middleName ? : string;
    lastName : string;
} = {
    institution : "Men",
    firstName : "Md",
    middleName : "Kamruzzaman",
    lastName : "zaman"
};

console.log(user);
