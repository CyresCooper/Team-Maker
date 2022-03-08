const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, school, email){
        super(name, id, email,)
        this.school = school;
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school;
    }
  
}

module.exports = Intern