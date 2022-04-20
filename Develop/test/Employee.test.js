const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("becomes object with new keyword", () => {
            const obj = new Employee();

            expect(typeof(obj)).toBe("object");
        })

    it("sets name with constructor agruements", () => {
        const name = "Griffin";
        const obj = new Employee(name);

        expect(obj.name).toBe(name);
    })

    it("sets ID with constructor arguements", () => {
        const id = 1;
        const obj = new Employee("Griffin", id);
        expect(obj.id).toBe(id);
    })

    it("sets email with constructor agruement", () => {
        const email = "test@gmail.com";
        const obj = new Employee("Griffin", 1, email);
        expect(obj.email).toBe(email);
    })
    })
})