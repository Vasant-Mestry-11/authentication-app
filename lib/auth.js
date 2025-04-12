const { BetterSqlite3Adapter } = require("@lucia-auth/adapter-sqlite");
const { Lucia } = require("lucia");
const { default: db } = require("./db");

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
