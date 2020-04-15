const express = require("express");
const bodyParser = require("body-parser");
const { prisma } = require("./generated/prisma-client");
const app = express();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const posts = await prisma.posts();
  res.json(posts);
});

app.get("/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  const post = await prisma.post({ id });
  res.json(post);
});
app.listen(3000);
