type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    }
    gender: 'male' | 'female';
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: 'Kamruzzaman',
        lastName: 'Zaman',
    },
    gender: 'male',
    contactNo: '01518',
    address: {
        division: 'mymensingh',
        city: 'mymensingh'
    }
}

const user2: User = {
    id: 123,
    name: {
        firstName: 'A',
        lastName: 'S',
    },
    gender: 'female',
    contactNo: '01518',
    address: {
        division: 'Sylhet',
        city: 'Sylhet'
    }
}

console.log(user1);
console.log(user2);

type AddFunc = (num1: number, num2: number) => number; 
const add: AddFunc = (num1, num2) => num1 + num2;

console.log(add(2, 2));