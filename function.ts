function addNormal (num1 : number, num2 : number) {
    return num1 + num2;
}

console.log(addNormal(1, 4));

const addArrow = (num1 : number, num2 : number) : number => num1 + num2;
console.log(addArrow(8, 12));

const arr: number[] = [2, 4, 8, 10];
const sqrArray = arr.map ((element: number) : number => element*element);
console.log(sqrArray);