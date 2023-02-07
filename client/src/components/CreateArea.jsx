import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function submitNote() {
    
    try {
      const response = await axios.post("http://localhost:5000/notes", {
        title: note.title,
        content: note.content,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
    setNote({
      title: "",
      content: "",
    });

    window.location.reload();
  }


  

  const [isExapanded, setExpand] = useState(false);

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExapanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExapanded ? 3 : 1}
          onClick={expand}
        />
        {note.title.length > 0 && note.content.length > 0 ? (
          <Zoom in={isExapanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
