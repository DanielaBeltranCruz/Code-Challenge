const StudentController = require("./../../lib/controllers/StudentController");

describe("Prueba unitaria para StudentController", () => {
    test("1: Imprimir todos los estudiantes con todos sus campos de visualpartners.json", () => {
        const AllStudents = StudentController.getAllStudents();
        expect(AllStudents).not.toBeUndefined();
    });
    test("2: Imprimir los emails de todos los estudiantes con certificación", () => {
        const StudentsEmails = StudentController.getEmails();
        expect(StudentsEmails).toContain("Todd@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sharlene@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Haynes@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Montoya@visualpartnership.xyz");
    });
   test("3: Imprimir los estudiantes con más de 500 créditos", () => {
        const StudentCredits = StudentController.getCredits();
        expect(StudentCredits).not.toBeUndefined();
    });
});
