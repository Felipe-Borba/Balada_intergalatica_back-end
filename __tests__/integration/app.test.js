import request from "supertest";
import app from "../../src/app.js";

describe("POST /alien", () => {
  describe("given alien name and earthBirthday", () => {
    test("should respond with status code 200", async () => {
      const response = await request(app).post("/alien").send({
        nome: "Felipe test",
        dataDeNascimento: "09/01/1995",
      });

      //console.log(response.body);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("when alien name and earthBirthday is missing", () => {
    test("should respond with status code 400", async () => {
      const bodyData = [
        { nome: "jest" },
        { dataDeNascimento: "09/01/1995" },
        {},
      ];

      for (const body of bodyData) {
        const response = await request(app).post("/alien").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
