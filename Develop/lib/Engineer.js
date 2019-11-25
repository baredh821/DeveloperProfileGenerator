const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
        console.log(`This vehicle has ${this.name} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;