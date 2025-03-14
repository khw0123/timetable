const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`${port}번 포트에서 작동중`);
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});

const watchBtn = document.querySelector(".word-container .w1");
const editBtn = document.querySelector(".word-container .w2");
const lunchBtn = document.querySelector(".word-container .w3");

watchBtn.addEventListener("click", function () {
  window.location.href = "time.ejs";
});
