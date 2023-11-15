const express = require("express");
const path = require("node:path");
const searchRouter = require("./routers/search.js");
const app = express();
const PORT = process.env.PORT ?? 3001;
app.use(express.static(path.resolve(__dirname, "public")));
app.listen(PORT, err => {
  console.log(err ? err : `server up at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});
app.use("/search", searchRouter);
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/about.html"));
});
//catch all route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/404.html"));
});
