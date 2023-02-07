import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    async function fetchNotes() {
      const response = await axios.get("http://localhost:5000/notes");
      setNotes(response.data);
    }
    fetchNotes();
  }, []);


  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
