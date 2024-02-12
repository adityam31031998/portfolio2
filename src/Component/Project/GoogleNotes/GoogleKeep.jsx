import React, { useState } from "react";
import "./GoogleNotes.css";
import Header from "./Header";
import CreateArea from "./createArea";
import Note from "./Note";

const GoogleKeep = () => {
  const [notes, setNotes] = useState([]);
  const addNotes = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };
  function handleDelete(id){
    setNotes((prev)=>{
      return prev.filter((item,index)=>{
        return index !==id
      })
    })
  }

  return (
    <div className="body6">
      <Header />
      <CreateArea addNotes={addNotes} />
      {notes.map((item, index) => (
        <Note key={index} title={item.title} content={item.content} handleDelete={handleDelete} id={index} />
      ))}
    </div>
  );
};

export default GoogleKeep;
