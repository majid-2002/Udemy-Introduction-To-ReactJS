import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Note(props) {

  async function handleDelete(e){

    console.log(props.id);
    try {
      const response = await axios.delete("http://localhost:5000/notes", {
        data:{
          id : props.id
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    window.location.reload();

  };

  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
