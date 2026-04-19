//string data type
let name= "Munna"; 

const country="Bangladesh"; 
//tuple
let ourTuple : [string, number, boolean]; 
ourTuple= ['Munna', 2353, true]; 

//object
const user: {
    firstName: 'samir'; 
    middleName?: string; //Optional Type
    lastName: string;     
    country: 'Bangladesh'; //Literal Type
}= {
    firstName: 'samir',     
    lastName: "Munna", 
    country: "Bangladesh"
}

//Function type
//Normal Function
function add(num1: number, num2: number): number{
    return (num1 +num2); 
}

//Arrow function
const addNumber= (num1: number, num2: number): number=> num1 + num2; 

//method inside object
const employee={
    name: 'Munna' , 
    salary: 200, 
    addSalary: function (newSalary: number): number{
        return newSalary + this.salary; 
    }    
}

//spread operator for array operations
const courses: string[]= ['TS', 'Postgres', 'Node.js']; 
const platforms: string[]= ['youtube', 'coursera', 'Udemy']; 

//courses.push(platforms); //error
courses.push(...platforms); 

//spread operator for object operations
const mentors1= {
    node: 'Tom', 
    postgres: 'Dick', 
    prisma: 'Harry'
}
const mentors2={
    react: 'John',
    typescript: 'Paul',
    javascript: 'Jones'
}

const allMentors={...mentors1, ...mentors2}; 

// Object Destructuring
const address= {
    city: "dhaka", 
    street: {
        road: '12', 
        aveneue: '3A'
    }, 
    country: "Bangladesh"
}

const {city,street, street:{road} }= address; 
 
//Array destructuring
const friends= ['Rachel', 'Monica', 'Ross', 'Joye', 'Phoebe']; 
const [a, ,c,...others]= friends;
//console.log(a, c, others); Rachel Ross [ 'Joye', 'Phoebe' ]


//Type alias
type Student ={
    name: string; 
    age: number; 
    class: string; 
    mobile?: string; 
}

const student1: Student={
    name: 'John', 
    age: 12, 
    class: 'Four',
    mobile: 'xxx-xxxxxx'
}

const student2: Student={
    name: 'Harry', 
    age: 16, 
    class: 'Nine'
}

//Type aliasing for functions

type AddNumbers= (num1: number, num2: number)=> number; 

const addNumbers: AddNumbers= (num1, num2)=> num1 + num2; 


//Union type
type Human= {
    name: string; 
    gender: 'male' | 'female'; //String leteral type
} 
const john: Human={
    name:'John', 
    gender: 'male'
}

//Inersection type
type BaseUser={
    username: string; 
    email: string; 
}

type AdminPrivileges={
    isAdmin: boolean; 
    canDelete: boolean; 
    canEdit: boolean; 
}

type Admin= BaseUser & AdminPrivileges; 

const adminUser: Admin= {
    username: 'john', 
    email: 'john@example.com', 
    isAdmin: true, 
    canDelete: false, 
    canEdit: true
}

//nullish coalescing operator
const webUser= null ; 
const defaultName= webUser ?? 'Guest'; 
//console.log(defaultName); 

//Nullable types
type SearchFunction= (text : string | null)=> void; 

const searchName: SearchFunction= (text)=>{
    console.log('Searching... ', text ?? 'no text to search')
}
searchName(null); 