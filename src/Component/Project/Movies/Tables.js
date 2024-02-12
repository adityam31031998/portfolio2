import React from "react";
export default function Tables  (props)  {
  const movies = props.movies;
  return (
    <div>
      <table className="tables">
        <thead>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Language</th>
            <th>Awards</th>
            <th>Release</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movies, index) => {
            return (
              <tr key={movies.id}>
                <td>
                  <img src={movies.Images[2]} alt={movies.Title} width="200px" />
                </td>
                <td>{movies.Title}</td>
                <td>{movies.Language}</td>
                <td>{movies.Awards}</td>
                <td>{movies.Released}</td>
                <td>{movies.Country}</td>

                <td>
                  <button  onClick={()=>props.handleDelete(movies)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
