const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
        console.log(`This vehicle has ${this.name} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;