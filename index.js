// Write your solution in this file!
const employee = {name: 'Peter' , streetAddress:'Kansas'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newobj = {...employee}
    newobj [key] = value;
    return newobj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey (employee, key){
    const newobj2 = {...employee};
    delete newobj2[key];
    return newobj2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
