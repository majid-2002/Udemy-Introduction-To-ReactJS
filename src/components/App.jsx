/* eslint-disable */
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header></Header> 
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
