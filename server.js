const express = require("express");
const path = require("path");

const complements = [
  "Thank you for showing up",
  "you are loved and good",
  "the world would never be the same without you",
  "you matters as much as anybody else in this world.",
  "do not underestimate yourself ",
  "You worth ",
  "people needs you",
  "spread love ",
  "the world needs more of that"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});


app.use("/public", express.static("./public"));


const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);



 
