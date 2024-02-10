import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from "./schema/schema.js";
const app = express();
const port = 3000;
app.use("/graphql", createHandler({ schema }));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
