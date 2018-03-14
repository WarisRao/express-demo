import  express from "express";
const app = express();

app.get("/", function(req, res) {
    res.send("you just sent a GET request");
});

app.post("/", function(req, res) {
    res.send("you send a post request");
});

app.put("/", function(req, res) {
    res.send("you send a PUT request");
});

app.delete("/", function(req, res) {
    res.send("you send a  DELETE?");
});

app.listen(3000, function() {
    console.log("App is listening on port 3000");
});
