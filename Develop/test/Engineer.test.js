const Engineer = require("../lib/Engineer");

test("get github", ()=>{
  const githubtest = new Engineer ("Griffin", "1", "griffin@gmail.com", "github")
  expect(githubtest.getGithub()).toBe("github")
})