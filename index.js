const Reader = require("./lib/utils/Reader");
const StudentService = require("./lib/services/StudentService");

const students = Reader.readJsonFile("visualpartners.json"); 

console.log(StudentService.getStudents());
console.log(StudentService.getEmailsWithCertification(students));
console.log(StudentService.getCredits(students));

