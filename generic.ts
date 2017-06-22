// Creating two different interfaces with differnt properties
interface Employee {
    name: string;
    Id: number;
}

interface Dept{
    deptName: string;
    deptId: number;
}

// Class which takes Generics of <T> , and having Array to store the Data
class Parent<T> {
    children: T[];
    constructor(){
        this.children = [];
    }
}

// Calling of two different Interfaces
let emp: Employee = {name: 'Himangky', Id: 101};
let parents: Parent<Employee> = new Parent<Employee>();
// Store the Data into Employee Objects
parents.children.push(emp);
console.log(parents.children);

let dept: Dept = {deptName: 'AF01', deptId: 112};
let deptI: Parent<Dept> = new Parent<Dept>();
// Store the Data into Dept Objects
deptI.children.push(dept);
console.log(deptI.children);