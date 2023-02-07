const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: mongoose, mongo } = require("mongoose");



app.use(cors({origin: "*"}));

app.use(bodyParser.json());
app.use(express.json());
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/noteApp");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(`Received note: title: ${title}, content: ${content}`);

  const newNote = new Note({ title, content });

  newNote
    .save()
    .then((note) => {
      res.json({ status: "success" });
    })
    .catch((error) => {
      console.error(error);
      res.json({ status: "failure" });
    });
});

app.get("/notes", (req, res) => {
  Note.find()
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => {
      console.error(error);
      res.json({ status: "failure" });
    });
});


app.delete("/notes", (req, res) => {
  console.log(req.body);
  Note.findByIdAndDelete(req.body.id)
    .then((notes) =>{
      res.json({status : "success"});
    })
    .catch((err) =>{
      res.json({status : "failure"});
    });
});




app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
