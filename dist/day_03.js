"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleNames = "car";
//keyof example with object types
const getPropertyValue = (obj, key) => {
    return obj[key];
};
const car = {
    model: "toyota",
    year: 2020
};
const result1 = getPropertyValue(car, 'model');
//console.log(result1); 
const mobile = {
    company: 'Apple',
    storage: '1 TB'
};
const result2 = getPropertyValue(mobile, "storage");
//console.log(result2); 
//--------Promises--------------
const createPromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Some data';
        if (data) {
            resolve(data);
        }
        else {
            reject('No data found');
        }
    });
};
const resolvePromise = async () => {
    const data = await createPromise();
    // console.log(data);
    return data;
};
const getTodoData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return data;
};
function getValue(flag) {
    if (flag) {
        return 'Munna';
    }
    else {
        return 42;
    }
}
const str = getValue(true);
const numbr = getValue(false);
console.log(str);
console.log(numbr);
//# sourceMappingURL=day_03.js.map