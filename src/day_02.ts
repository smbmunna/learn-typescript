{

    // Type assertion 
    function processInput(input: unknown) {
        const name = input as string; //Type assertion
        //console.log(name.toUpperCase()); 
    }

    const data: unknown = 'xavier';
    //console.log((data as string).toUpperCase()); 

    //Interface 
    interface User {
        name: string;
        age: number;
    }

    const user1: User = {
        name: 'Dana',
        age: 32
    }


    interface UserWithRole extends User {
        role: string;
    }

    const user2: UserWithRole = {
        name: 'John',
        age: 13,
        role: 'Student'
    }

    //Array declaration with interface    

    interface StudentRollsInterface {
        [rolls: number]: number
    }

    const studentRolls: StudentRollsInterface = [20, 40, 12];


    //Type alias vs Interface for function signature: 

    type AddFunction = (num1: number, num2: number) => number;

    interface AddFunctionInterface {
        (num1: number, num2: number): number
    }

    const add: AddFunctionInterface = (num1, num2) => num1 + num2;

    //TS Genrics

    function functionName<T>(param: T): T {
        return param;
    }

    //TS infers T automatically 
    const name = functionName('Xavier'); // T becomes string 
    const weight = functionName(50); // T becomes number 

    // Also can specify T explicitly 
    const isAdmin = functionName<boolean>(true)

    //Generics with Interface

    type Mobile = {
        home: number;
        personal?: number;
    }

    interface Student<T, M> {
        name: string;
        roll: number;
        class: T;
        mobile: M
    }

    const student1: Student<number, Mobile> = {
        name: 'Jordan',
        roll: 20,
        class: 3,
        mobile: {
            home: 2323256
        }
    }

    const student2: Student<string, Mobile> = {
        name: 'Jordan',
        roll: 20,
        class: 'Four',
        mobile: {
            home: 656556
        }
    }

    //Functions with Generics 
    const functionWithGenerics = <T>(param: T) => [param];

    const result1 = functionWithGenerics<string>('Apple');
    const result2 = functionWithGenerics<number>(200);
    const result3 = functionWithGenerics<{ name: string, age: number }>({ name: 'Tom', age: 50 });

    // console.log(result1); 
    // console.log(result2); 
    // console.log(result3); 


    //TS constraints

    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'TS Course';
        return {
            ...student,
            course
        }
    }

    const chris = addCourseToStudent({ id: 2020, name: 'Chris', email: 'chris1@exmaple.com' });
    const mike = addCourseToStudent({ id: 3232, name: 'Mike', email: 'mike@exmaple.com' });
    console.log(mike);





}