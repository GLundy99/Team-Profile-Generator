const { classToInvokable } = require("sequelize/types/utils");
const Employee = require("../lib/Employee");

test("set name employee", ()=>{
    const newemployee = new Employee("Griffin")
    expect(newemployee.name).toBe("Griffin")
})

test("get email returns email", ()=>{
    const emailtest = new Employee ("Griffin", "1", "griffin@gmail.com")
    expect(emailtest.getEmail()).toBe("griffin@gmail.com")
})

test("get ID returns ID", ()=>{
    const idtest = new Employee ("Griffin", "1", "griffin@gmail.com")
    expect(idtest.getId()).toBe("1")
})