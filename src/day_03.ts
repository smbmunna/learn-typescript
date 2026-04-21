//key of operator
type Vehicles = {
    car: string;
    bike: string;
    bicycle: string;
}

type VehicleNames = keyof Vehicles;

const VehicleNames: VehicleNames = "car"

//keyof example with object types
const getPropertyValue = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key];
}

const car = {
    model: "toyota",
    year: 2020
}
const result1 = getPropertyValue(car, 'model');
//console.log(result1); 
const mobile = {
    company: 'Apple',
    storage: '1 TB'
}
const result2 = getPropertyValue(mobile, "storage");
//console.log(result2); 


//--------Promises--------------
const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string | null = 'Some data';

        if (data) {
            resolve(data);
        } else {
            reject('No data found');
        }
    })
}

const resolvePromise = async (): Promise<string> => {
    const data = await createPromise();
    // console.log(data);
    return data;
}

// resolvePromise(); 

// json placeholder example

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getTodoData = async (): Promise<Todo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data: Todo = await res.json();
    return data;
}

//...............Conditional types

type NotNullable <T>= T extends null | undefined ? never : T; 

type A= NotNullable <null|undefined> ; //A becomes 'never'
type B= NotNullable <string>;  // B becomes 'string'
type C= NotNullable <number | boolean>; // C becomes 'number or boolean' 

// Functional example 
type ReturnTypeBasedOnTheInput<T extends boolean> = T extends true ? string : number; 

function getValue<T extends boolean>(flag : T){
    if(flag){
        return 'Munna' as ReturnTypeBasedOnTheInput<T>; 
    }else{
        return 42 as ReturnTypeBasedOnTheInput<T>; 
    }
}

const str= getValue(true); 
const numbr= getValue(false); 

//console.log(str); 
//console.log(numbr); 


// Another conditional type example 
//type CheckVehicle <T>= T extends 'car' | 'bike' | 'ship' ? true : false; 
type CheckVehicle <T>= T extends keyof Owner ? true : false; 

type HasCar= CheckVehicle<'car'> ; //true
type HasBike= CheckVehicle<'bike'> ; //true
type HasShip= CheckVehicle<'ship'> ; //true
type HasBicycle= CheckVehicle<'bicycle'> ; //False

//to avoid hardcode type
type Owner={
    car: string; 
    bike: string; 
    ship: string; 
}