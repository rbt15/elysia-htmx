import { Elysia, t } from "elysia";
import { db } from "./repository";
import { users } from "./repository/schema";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("users", async () => db.select().from(users).all())
  .post("users", ({ body }) => {
    return db.insert(users).values(body).returning().get();
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
