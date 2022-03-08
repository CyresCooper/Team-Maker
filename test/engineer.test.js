const Engineer = require("../lib/intern");


describe("test the manger class", () => {
    const engineer = new Engineer ( 'Bob', '01', 'github','@email.com')
    it("Should return name", () => {
        expect(engineer.getName()).toBe('Bob')
    })
    it("Should return ID", () => {
        expect(engineer.getId()).toBe('01')
    })
    it("Should return email", () => {
        expect(engineer.getSchool()).toBe('github')
    })
    it("Should return school", () => {
        expect(engineer.getEmail()).toBe('@email.com')
    })
})