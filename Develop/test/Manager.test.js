const Manager = require("../lib/Manager");

test("get manager office", ()=>{
  const data = new Manager ("Griffin", "1", "griffin@gmail.com", "12")
  expect(data.getOfficeNumber()).toBe("12")
})
