const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");
const render = employees => {
    const html = [];
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    )
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    )
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    )
    return renderMain(html.join(""));
}


const renderManager = manager => {
    let temp = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    temp = replacePlaceholders(temp, "name", manager.getName());
    temp = replacePlaceholders(temp, "role", manager.getRole());
    temp = replacePlaceholders(temp, "email", manager.getEmail());
    temp = replacePlaceholders(temp, "id", manager.getId());
    temp = replacePlaceholders(temp, "officeNumber", manager.getOfficeNumber());
    console.log(temp)
    return temp;
}

const renderMain = html => {
    const temp = fs.readFileSync(path.resolve(templatesDir, "mainhtmlfile.html"), "utf8");
    return replacePlaceholders(temp, "team", html)
}
const replacePlaceholders = (temp, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return temp.replace(pattern, value);
}

const renderEngineer = engineer => {
    let temp1 = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    temp1 = replacePlaceholders(temp1, "name", engineer.getName());
    temp1 = replacePlaceholders(temp1, "role", engineer.getRole());
    temp1 = replacePlaceholders(temp1, "email", engineer.getEmail());
    temp1 = replacePlaceholders(temp1, "id", engineer.getId());
    temp1 = replacePlaceholders(temp1, "gitHub", engineer.getGitHub());
    console.log(temp1)
    return temp1;
}
const renderIntern = intern => {
    let temp1 = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    temp1 = replacePlaceholders(temp1, "name", intern.getName());
    temp1 = replacePlaceholders(temp1, "role", intern.getRole());
    temp1 = replacePlaceholders(temp1, "email", intern.getEmail());
    temp1 = replacePlaceholders(temp1, "id", intern.getId());
    temp1 = replacePlaceholders(temp1, "school", intern.getSchool());
    console.log(temp1)
    return temp1;
}



module.exports = render;

//<h2>Manager name: {{name}}<h2>