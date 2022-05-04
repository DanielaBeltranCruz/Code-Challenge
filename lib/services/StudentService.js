const Reader = require("../utils/Reader");

class StudentService {
    static getStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }

    static getEmailsWithCertification(students) {
        const StudentWithCertification = students.filter((student) => student.haveCertification === true);
        const StudentsEmails = StudentWithCertification.map((student) => student.email);
        return StudentsEmails;
    }

    static getCredits(students) {
        const StudentCredits = students.filter((student) => student.credits > 500);
        return StudentCredits;
    }
}

module.exports = StudentService;