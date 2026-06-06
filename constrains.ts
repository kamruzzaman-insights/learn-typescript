const addStudentToCourse = <T extends {id: number, name: string}> (studentInfo : T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};

const student1 = {
    
    id: 321,
    name: "Kamruzzaman",
    hasCar: true,
    isMarried: true,
}

const student2 = {
    id: 322,
    name: "Zaman",
    hasCar: true,
    isMarried: true,
}

const studentOne = addStudentToCourse(student1);
const studentTwo = addStudentToCourse(student2);

console.log(studentOne);
console.log(studentTwo);

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

const user : User = {
    id: 222,
    name: "Zaman",
    address: {
        city: "ctg",
    },
};

console.log(user["name"]);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

console.log(getPropertyFromObj(user, "name"));

const product = {
    brand: "HPP",
};

const result2 = getPropertyFromObj(product, "brand");
console.log(result2);


