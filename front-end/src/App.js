import './App.css';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';

import { MovieCard } from './Components/MovieCard';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-bold m-10" id="peliculas">Películas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-middle gap-5 mt-5 xl:mx-10">
          {
            movies && movies.map((movie, index) => <MovieCard key={index} {...movie} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App;
