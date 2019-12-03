const path = require("path");
const fs = require("fs"); 

const templatesDir = path.resolve(__dirname, "../templates");
const render = employees => {
    const html = [];
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    )

    return renderMain(html.join(""));
}

const renderManager = manager => {
    let temp = fs.readFileSync(path.resolve(templatesDir,"manager.html"), "utf8");
    temp = replacePlaceholders(temp, "name", manager.getName());
    temp = replacePlaceholders(temp, "role", manager.getRole());
    temp = replacePlaceholders(temp, "email", manager.getEmail());
    temp = replacePlaceholders(temp, "id", manager.getId());
    temp = replacePlaceholders(temp, "officeNumber", manager.getOfficeNumber());
    console.log(temp)
    return temp;
}

const renderMain = html => {
    const temp = fs.readFileSync(path.resolve(templatesDir,"mainhtmlfile.html"), "utf8");
    return replacePlaceholders(temp, "team", html)
}
const replacePlaceholders = (temp, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return temp.replace(pattern, value);
  };

module.exports = render;
//<h2>Manager name: {{name}}<h2>