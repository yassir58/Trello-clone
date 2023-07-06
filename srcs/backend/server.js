const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server");
});

const server = app.listen(port, () => {
  console.log(`Listenning on port ${port}`);
});
