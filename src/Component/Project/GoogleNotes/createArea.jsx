import { Zoom, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import "./GoogleNotes.css";
const CreateArea = ({addNotes}) => {
  const [isExpend, setIsExpend] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function expand() {
    setIsExpend(true);
  }
  function handleClikc(e) {
    const {name, value} = e.target;
    setNote((prev)=>{
       return{ ...prev,[name]:value}
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    addNotes(note)
    setNote({
        title:"",
        content:""
    })
  }
  return (
    <div>
      <form className="create-note">
        {isExpend && (
          <input
            placeholder="Title"
            value={note.title}
            onChange={handleClikc}
            name="title"
          />
        )}
        <textarea
          placeholder="Take a note ...."
          name="content"
          onChange={handleClikc}
          value={note.content}
          rows={isExpend ? 3 : 1}
          onClick={expand}
        />
        <Zoom in={isExpend}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
