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

const insults = [
  "why don't you listen ?",
  "i told you not to you dick!",
  "get the fuck out of here bitch!",
  "oh dear , i can see you really got no ear ...",
  "i warned you !",
  "it's your fault.",
  "that was a good lesson",
  "next time you won't try to do this again",
  "fuck you!!🤣🤣🤣"
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

app.listen(3000);
console.log("listening on http://localhost:3000");




 function getRandominsult() {
 const randomIndex = Math.floor(Math.random() * insults.length);
 return insults[randomIndex];
 }



 app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/insults", function(req, res) {
 res
     .json({
      insults: getRandominsult()
     })
       .end();
   });

   app.use("/public", express.static("./public"));

   app.listen(3000);
   console.log("listening on http://localhost:3000");




