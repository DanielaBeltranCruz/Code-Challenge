const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }

    static getEmails() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailsWithCertification(students);
    }

    static getCredits() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getCredits(students);
    }
}

module.exports = StudentController;