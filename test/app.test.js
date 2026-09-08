const request = require("supertest");
const app = require("../src/app");

describe("Web application", () => {
  test("GET / returns the application name", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("DevOps Case Study Application");
  });

  test("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "ok"
    });
  });
});