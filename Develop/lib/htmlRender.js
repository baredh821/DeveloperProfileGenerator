const render = employees => {
    const html = [];
    html.push(employees
    .filter(employee => employee.getRole() === "Manger")
    .map(manager => renderManager(manager))    
    )

    return renderMain(html.join(""));
}

const renderManger = manager => {
    let temp  = fs.readFileSync(pathtoManager.html, "utf8");
    temp =replacePlaceholders(temp, "name", manager.getName());

    return temp;
}

const renderManin = html => {
    const temp = fs.readFileSync("mainhtmlfile", "utf8");
    return replacePlaceholders(temp, "team",html)
}
const replacePlaceholders = (temp, placeholder, value) => {
    const pattern = new RegExp("{{" +placeholder + "}}", "gm");
    return temp.replace(pattern, value);
}

//<h2>Manager name: {{name}}<h2>