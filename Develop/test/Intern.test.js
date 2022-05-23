const Intern = require("../lib/Intern");

test("get school", () =>{
  const data = new Intern ("Griffin", "1", "griffin@gmail.com", "UofM")
  expect(data.getSchool()).toBe("UofM")
})