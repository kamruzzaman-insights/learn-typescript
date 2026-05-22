const friends: string[] = ['X', 'Y', 'Z'];
const rollNumbers: number[] = [11, 12, 13];
const isEligible: boolean[] = [true, false, true];

const newFriends: Array<string> = ['A', 'B', 'C'];
const newRollNumbers: Array<number> = [1, 2, 3];
const newBoolean: Array<boolean> = [true, false, false];

type GenericArray = Array<number>;
const aggs: GenericArray = [11, 13, 14];

type NewGenericArray<T> = Array<T>;

const balls: NewGenericArray<number> = [12, 14, 15];
const ballNames: NewGenericArray<string> = ['red', 'orange', 'yellow'];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [1, 2];
const coordinates2: Coordinates<number, string> = [3, 'four'];

console.log(coordinates1, coordinates2);

const userList: NewGenericArray<{
    name: string;
    age: number
}> = [
        {
            name: 'X',
            age: 25
        },
        {
            name: 'Y',
            age: 22
        }
    ]


    interface Developer <T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: number;
    };
    smartWatch: T; 
}

const poorDeveloper : Developer <{
    heartRate: string;
    stopWatch: boolean;
}> = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: 'lenevo',
        model: 'AW',
        releasedYear: 2010,
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }
}
const richDeveloper : Developer <{
    heartRate: string;
    stopWatch: boolean;
    call: boolean;
    calculator: boolean;
}> = {
    name: "Mr. Rich",
    salary: 100,
    device: {
        brand: 'lenevo',
        model: 'AW',
        releasedYear: 2015,
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
        call: false,
        calculator: true,
    }
}

const createArrayWithGeneric = <T> (value: T) => [value];

const arrstr = createArrayWithGeneric <string> ("Apple");
console.log(arrstr);

const arrNum = createArrayWithGeneric(22);
console.log(arrNum);

const addStudentToCourse = <T> (studentInfo : T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};

const student1 = addStudentToCourse({
    id: 321,
    name: "Kamruzzaman",
    hasCar: true,
    isMarried: true,
})

console.log(student1);
