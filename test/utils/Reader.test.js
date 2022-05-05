const Reader = require("./../../lib/utils/Reader");

describe("Prueba unitaria para Reader", () => {
    test("Prueba 1. Imprime lista de objetos de los estudiantes de visualpartners.json", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        expect(students).not.toBeUndefined();
    });
});
module.exports = Reader;