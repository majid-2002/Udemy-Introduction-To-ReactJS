import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })


  function handleChange(e){
    const {name, value} = e.target; //* get the event source (button) name and value 

    setNote(function (prevValue) {  //* call the set contact method of useState
      return{
        ...prevValue, //* spread operator in javascript to access all the values inside a object
        [name]: value
      }
     })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  
  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div> 
  );

  
}

export default CreateArea;
