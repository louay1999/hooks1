import './App.css';
import movieData from "./movies.json";
import { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  const[movies,setMovies]=useState(movieData)
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  console.log(movies)
  return ( <>
  <h1>movie app</h1>
  <AddMovie addMovie={addMovie}/>
  <MovieList movies={movies}/>
  </>
    
  );
}

export default App;
