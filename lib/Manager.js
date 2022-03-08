const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, mangerOffice){
        super (name, id, email,)
        this.mangerOffice = mangerOffice
    }
    getId(){
        return this.id
    }
    getmangerOffice(){
        return this.mangerOffice;
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager