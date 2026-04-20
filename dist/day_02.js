"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Type assertion 
    function processInput(input) {
        const name = input; //Type assertion
        //console.log(name.toUpperCase()); 
    }
    const data = 'xavier';
    const user1 = {
        name: 'Dana',
        age: 32
    };
    const user2 = {
        name: 'John',
        age: 13,
        role: 'Student'
    };
    const studentRolls = [20, 40, 12];
    const add = (num1, num2) => num1 + num2;
    //TS Genrics
    function functionName(param) {
        return param;
    }
    //TS infers T automatically 
    const name = functionName('Xavier'); // T becomes string 
    const weight = functionName(50); // T becomes number 
    // Also can specify T explicitly 
    const isAdmin = functionName(true);
    const student1 = {
        name: 'Jordan',
        roll: 20,
        class: 3,
        mobile: {
            home: 2323256
        }
    };
    const student2 = {
        name: 'Jordan',
        roll: 20,
        class: 'Four',
        mobile: {
            home: 656556
        }
    };
    //Functions with Generics 
    const functionWithGenerics = (param) => [param];
    const result1 = functionWithGenerics('Apple');
    const result2 = functionWithGenerics(200);
    const result3 = functionWithGenerics({ name: 'Tom', age: 50 });
    // console.log(result1); 
    // console.log(result2); 
    // console.log(result3); 
    //TS constraints
    const addCourseToStudent = (student) => {
        const course = 'TS Course';
        return {
            ...student,
            course
        };
    };
    const chris = addCourseToStudent({ id: 2020, name: 'Chris', email: 'chris1@exmaple.com' });
    const mike = addCourseToStudent({ id: 3232, name: 'Mike', email: 'mike@exmaple.com' });
    console.log(mike);
}
//# sourceMappingURL=day_02.js.map