/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const MovieCard = ({ id, image, title, date }) => {
  return (
    <Link className="movie-card" key={id} to={`/details/${id}`}>
      <img src={image} alt="movie image" />
      <div className="movie-preview-info">
        <h2>{title}</h2>
        <p>Released: {date} </p>
      </div>
    </Link>
  );
};
