const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
        console.log(`This vehicle has ${this.name} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;