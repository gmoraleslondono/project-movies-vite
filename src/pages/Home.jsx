import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import "../css/Home.css";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=abe93b0f0abf7680fa2ff938bf28b182&language=en-US&page=1";

const fetchMovies = async () => {
  const response = await fetch(API_URL);
  const { results } = await response.json();
  return results;
};

const posterUrl = (poster_path) =>
  `https://image.tmdb.org/t/p/w1280${poster_path}`;

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      const movies = await fetchMovies();
      setMovies(movies);
    }

    fetch();
  }, []);

  if (movies.length === 0) {
    return "Loading...";
  }

  return (
    <div>
      <div className="main-wrapper">
        {movies.map((movie) => (
          <MovieCard
            image={posterUrl(movie.poster_path)}
            title={movie.original_title}
            date={movie.release_date}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
