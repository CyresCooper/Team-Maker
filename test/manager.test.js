const Manager = require("../lib/manager");


describe("test the manger class", () => {
    const manager = new Manager( 'Bob', '01', '@email.com')
    it("Should return name", () => {
        expect(manager.getName()).toBe('Bob')
    })
    it("Should return ID", () => {
        expect(manager.getId()).toBe('01')
    })
    it("Should return email", () => {
        expect(manager.getEmail()).toBe('@email.com')
    })
})