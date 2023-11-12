import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavigationBar } from "../components/NavigationBar.jsx";
import "../css/MovieDetails.css";

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=abe93b0f0abf7680fa2ff938bf28b182&language=en-US`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!movie) {
    return "Loading...";
  }

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="bar-nav">
        <NavigationBar />
      </div>
      <div className="info">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.original_title}
        />
        <aside>
          <h1 className="title">
            <span>{movie.original_title}</span>
            <span>{Math.round(movie.vote_average * 10) / 10}</span>
          </h1>
          <p>{movie.overview}</p>
        </aside>
      </div>
    </div>
  );
};
