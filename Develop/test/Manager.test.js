const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("set office number with constructor argument", () => {
    const testNum = 100;
    const obj = new Manager("Griffin", 1, "griffin@arcadiaitpartners.com", testNum);
    expect(obj.officeNumber).toBe(testNum);
});

test("getRole() should return 'Manager'", () => {
    const testRole = "Manager";
    const obj = new Manager("Griffin", 1, "griffin@arcadiaitpartners.com", 100);
    expect(obj.getRole()).toBe(testRole);
});

test("Can get office number with getOffice()", () => {
    const testNum = 100;
    const obj = new Manager("Griffin", 1, "griffin@arcadiaitpartners.com", testNum);
    expect(obj.getOfficeNumber()).toBe(testNum);
});