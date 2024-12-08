import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import MovieCard from './components/MovieCard';

const API_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

const movie = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) =>{
    try{
      let response = await fetch(`${API_URL}&s=${title}`);
      let data = await response.json();
      setMovies(data.Search);
    }
    catch(e){
      console.log(e);
    }
 
  }

  useEffect(() => {
    searchMovie('batman');

  }, [])

  return (
    <div className='app'>

      <Header/>

      <SearchBox searchFunction={searchMovie}/>

      <MovieCard movies={movies}/>

    </div>
  )
}

export default App
