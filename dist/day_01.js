"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string data type
let name = "Munna";
const country = "Bangladesh";
//tuple
let ourTuple;
ourTuple = ['Munna', 2353, true];
//object
const user = {
    firstName: 'samir',
    lastName: "Munna",
    country: "Bangladesh"
};
//Function type
//Normal Function
function add(num1, num2) {
    return (num1 + num2);
}
//Arrow function
const addNumber = (num1, num2) => num1 + num2;
//method inside object
const employee = {
    name: 'Munna',
    salary: 200,
    addSalary: function (newSalary) {
        return newSalary + this.salary;
    }
};
//spread operator for array operations
const courses = ['TS', 'Postgres', 'Node.js'];
const platforms = ['youtube', 'coursera', 'Udemy'];
//courses.push(platforms); //error
courses.push(...platforms);
//spread operator for object operations
const mentors1 = {
    node: 'Tom',
    postgres: 'Dick',
    prisma: 'Harry'
};
const mentors2 = {
    react: 'John',
    typescript: 'Paul',
    javascript: 'Jones'
};
const allMentors = { ...mentors1, ...mentors2 };
// Object Destructuring
const address = {
    city: "dhaka",
    street: {
        road: '12',
        aveneue: '3A'
    },
    country: "Bangladesh"
};
const { city, street, street: { road } } = address;
//Array destructuring
const friends = ['Rachel', 'Monica', 'Ross', 'Joye', 'Phoebe'];
const [a, , c, ...others] = friends;
const student1 = {
    name: 'John',
    age: 12,
    class: 'Four',
    mobile: 'xxx-xxxxxx'
};
const student2 = {
    name: 'Harry',
    age: 16,
    class: 'Nine'
};
const addNumbers = (num1, num2) => num1 + num2;
const john = {
    name: 'John',
    gender: 'male'
};
const adminUser = {
    username: 'john',
    email: 'john@example.com',
    isAdmin: true,
    canDelete: false,
    canEdit: true
};
//nullish coalescing operator
const webUser = null;
const defaultName = webUser ?? 'Guest';
const searchName = (text) => {
    console.log('Searching... ', text ?? 'no text to search');
};
searchName(null);
//# sourceMappingURL=day_01.js.map