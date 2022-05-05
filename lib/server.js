const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api, Welcome!"});
});

app.get("/v1/students",(request,response) =>{
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const emails = StudentController.getEmails();
    response.json(emails);
});

app.get("/v1/students/credits", (request, response) => {
    const credits = StudentController.getCredits();
    response.json(credits);
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});