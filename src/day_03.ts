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

