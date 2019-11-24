class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
        console.log(`This vehicle has ${this.name} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getId() {
        return this.id;
        console.log(`This vehicle has ${this.id} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getEmail() {
        return this.email;
        console.log(`This vehicle has ${this.email} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getRole() {
        return "Employee";
        console.log(`This vehicle has ${this.numberOfWheels} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }

}
module.exports = Employee;