import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/public/templates/register.html`);
});

app.post("/register", (req, res) => {
  res.status(200).json({
    name: req.body.name,
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/templates/home.html`);
});

app.listen("3333", () => {
  console.log("Server started on port 3333!");
});
