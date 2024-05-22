import request from "supertest";
import { app } from "../app.js";
import { User } from "../models/user.model.js";

describe("User Endpoints", () => {
  it("should sign up a new user", async () => {
    const res = await request(app).post("/api/v1/users/signup").send({
      username: "sumansaran",
      lastname: "saran",
      firstname: "suman",
      email: "sumansaran@gmail.com",
      password: "Suman@1234",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("username", "sumansaran");
    expect(res.body.data).toHaveProperty("email", "sumansaran@gmail.com");
    expect(res.body.data).not.toHaveProperty("password");
    expect(res.body.data).not.toHaveProperty("refreshToken");
  });

  it("should not sign up a user with existing email or username", async () => {
    await request(app).post("/api/v1/users/signup").send({
      username: "sumansaran",
      lastname: "saran",
      firstname: "suman",
      email: "sumansaran@gmail.com",
      password: "Suman@1234",
    });

    const res = await request(app).post("/api/v1/users/signup").send({
      username: "sumansaran",
      lastname: "saran",
      firstname: "suman",
      email: "sumansaran@gmail.com",
      password: "Suman@1234",
    });

    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty(
      "message",
      "User with email or username already exists"
    );
  });

  it("should sign in an existing user", async () => {
    await request(app).post("/api/v1/users/signup").send({
      username: "sumansaran",
      lastname: "saran",
      firstname: "suman",
      email: "sumansaran@gmail.com",
      password: "Suman@1234",
    });

    

    const res = await request(app).post("/api/v1/users/signin").send({
      username: "sumansaran",
      password: "Suman@1234",
    });

    console.log("RES-------", res)

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("user");
    expect(res.body.data.user).toHaveProperty("username", "sumansaran");
    expect(res.body.data).toHaveProperty("accessToken");
    expect(res.body.data).toHaveProperty("refreshToken");
  });

  it("should not sign in with incorrect credentials", async () => {
    await request(app).post("/api/v1/users/signup").send({
      username: "sumansaran",
      lastname: "saran",
      firstname: "suman",
      email: "sumansaran@gmail.com",
      password: "Suman@1234",
    });

    const res = await request(app).post("/api/v1/users/signin").send({
      username: "sumansaran",
      password: "wrongpassword",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message", "Invalid user credentials");
  });
});
