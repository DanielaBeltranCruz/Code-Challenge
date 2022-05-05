const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");
const students = Reader.readJsonFile("visualpartners.json");

describe("Prueba unitaria para StudentService", () => {
    test("1: Verificar consulta de todos los estudiantes con todos sus campos", () => {
        const Students = StudentService.getStudents(students);
        expect(Students).not.toBeUndefined();
    });
    test("2: Verificar consulta de los emails de todos los estudiantes con certificación", () => {
        const StudentsEmails = StudentService.getEmailsWithCertification(students);
        expect(StudentsEmails).toContain("Todd@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sharlene@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Haynes@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Montoya@visualpartnership.xyz");
    });
    test("3: Verificar consulta de todos los estudiantes con créditos mayor a 500", () => {
        const StudentsCredits = StudentService.getCredits(students, 500);
        expect(StudentsCredits).not.toBeUndefined();
    });
});