import React, { useState } from "react";
import "./Modal.css"; // Import your CSS file for styling
import axios from "axios";

export default function AddMovies({ isOpen, onClose }) {
  const [movieName, setMovieName] = useState("");
  const [movieImage, setMovieImage] = useState("");
  if (!isOpen) {
    return false;
  }
  const getMovieName = (e) => {
    const movieName = e.target.value;
    setMovieName(movieName);
  };
  const getMovieImage = (e) => {
    const movieImage = e.target.value;
    setMovieImage(movieImage);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const movieDetails={
      Title:movieName,
      Images:movieImage
    }
    axios
    .post(`http://localhost:3004/movies`,movieDetails)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close-button" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={onSubmit}>
          <h2>Add Movies Details</h2>
          <label>Movie Name</label>
          <input onChange={getMovieName} />
          <br></br>
          <br></br>
          <label>Movie Image</label>
          <input onChange={getMovieImage} />
          <br></br>
          <br></br>
          <button className="btn-danger">submit</button>
        </form>
      </div>
    </div>
  );
}
