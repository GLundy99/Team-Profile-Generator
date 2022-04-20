const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
    const testSchool = "MSU";
    const obj = new Intern("Griffin", 1, "griffin@arcadiaitpartners.com", testSchool);
    expect(obj.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const obj = new Intern("Griffin", 1, "griffin@arcadiaitpartners.com", "MSU");
    expect(obj.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
    const testSchool = "MSU";
    const obj = new Intern("Griffin", 1, "griffin@arcadiaitpartners.com", testSchool);
    expect(obj.getSchool()).toBe(testSchool);
});