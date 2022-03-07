const Employee = require("../lib/Employee")

describe("Test For Employee", () => {
    const employee = new Employee('Joe', '01', '@email.com')
    it("Should return name", () => {
        expect(employee.getName()).toBe('Joe')
    })
    it("Should return ID", () => {
        expect(employee.getId()).toBe('01')
    })
    it("Should return email", () => {
        expect(employee.getEmail()).toBe('@email.com')
    })
})