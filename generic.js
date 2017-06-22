// Class which takes Generics of <T> , and having Array to store the Data
var Parent = (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
// Calling of two different Interfaces
var emp = { name: 'Himangky', Id: 101 };
var parents = new Parent();
// Store the Data into Employee Objects
parents.children.push(emp);
console.log(parents.children);
var dept = { deptName: 'AF01', deptId: 112 };
var deptI = new Parent();
// Store the Data into Dept Objects
deptI.children.push(dept);
console.log(deptI.children);
