import React, { useEffect, useState } from "react";
import Tables from "./Tables";
import axios from "axios";
import AddMovies from "./AddMovies";
import moviesData from "./movie.json"; // Adjust the path as needed

export default function Movies() {
  const [data, setDate] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/movies`)
      .then((res) => setDate(res.data))
      .catch((error) => console.error("Error fetching data", error))
  }, []);
  useEffect(() => {
    setDate(moviesData.movies);
  }, []);

  const handleDelete = (movies) => {
    const movie = data.filter((m) => m.imdbID !== movies.imdbID);
    setDate(movie);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { length: count } = data;
  return count ? (
    <div>
      <h3>To Add Movies</h3>
      <button onClick={openPopup}>AddMovies</button>
      <AddMovies isOpen={isPopupOpen} onClose={closePopup} />
      <h2>{count} Movies showing...</h2>
      <Tables movies={data} handleDelete={handleDelete} openPopup={openPopup} />
      
    </div>
  ) : (
    <p>No Movies List</p>
  );
}
