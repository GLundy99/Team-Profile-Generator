const Engineer = require("../lib/Engineer");

test("set Github account with constructor", () => {
    const githubUser = "GitHubUser";
    const obj = new Engineer("Griffin", 1, "griffin@arcadiaitpartners.com", githubUser);
    expect(obj.github).toBe(githubUser);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const obj = new Engineer("Griffin", 1, "griffin@arcadiaitpartners.com", "githubUser");
    expect(obj.getRole()).toBe(testRole);
});

test("Can get Github username with getGithub()", () => {
    const testUser = "GitHubUser";
    const obj = new Engineer("Foo", 1, "griffin@arcadiaitpartners.com", testUser);
    expect(obj.getGithub()).toBe(testUser);
});