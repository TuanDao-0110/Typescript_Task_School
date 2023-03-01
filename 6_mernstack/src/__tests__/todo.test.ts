import app from "../app";
import supertest from "supertest";
const api = supertest(app);

// const url = "http://localhost:4000";

describe("1st testing", () => {
  test("add test", () => {
    expect(1 + 5).toBe(6);
  });
});

describe("2nd testing server", () => {
  const newText = { text: "new text" };
  test("GET status 200", async () => {
    const result = await api
      .get("/todo")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("POST Status 201", async () => {
    await api
      .post(`/todo`)
      .send(newText)
      .expect(201)
      .expect("Content-Type", /application\/json/);
      const result = await api
        .get("/todo")
        .expect(200)
        .expect("Content-Type", /application\/json/);
        expect(result.body.toDo).toContain(newText)
  });
});
