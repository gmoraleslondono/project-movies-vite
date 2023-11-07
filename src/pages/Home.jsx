import React from 'react'
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=abe93b0f0abf7680fa2ff938bf28b182&language=en-US&page=1";

  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    console.log(result.results)
    setMovies(result.results);
  };

  const formatImageUrl = (path) => {
    const imageUrlFormated = `https://image.tmdb.org/t/p/w1280${path}`;
    return imageUrlFormated;
  }

  return (
  <div className="main-wraper">
    {
      movies.map((movie) => (
        <MovieCard image={formatImageUrl(movie.poster_path)} title={movie.original_title} date={movie.release_date} />
      ))
    }
  </div>
  );
};
