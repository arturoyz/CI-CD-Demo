const request = require("supertest");
const app = require("./app");

describe("GET /bienvenida", () => {
  it("debe devolver status 200", async () => {
    const res = await request(app).get("/bienvenida");
    expect(res.statusCode).toBe(200);
  });

  it("debe devolver el mensaje correcto", async () => {
    const res = await request(app).get("/bienvenida");
    expect(res.body.mensaje).toBe(
      "Esta es la 1 version de mi aplicacion implementando CI/CD",
    );
  });

  it("debe devolver version 1.0.0", async () => {
    const res = await request(app).get("/bienvenida");
    expect(res.body.version).toBe("1.0.0");
  });

  it("debe devolver status ok", async () => {
    const res = await request(app).get("/bienvenida");
    expect(res.body.status).toBe("ok");
  });
});
