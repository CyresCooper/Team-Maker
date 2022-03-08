const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, github, email){
        super (name, id, email,)
        this.github = github;

    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Enginer'
    }
}

module.exports = Engineer