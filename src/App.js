import MovieCard from './MovieCard';
import MovieList from './MovieList';

import './App.css';
import Filter from './Filter';
import { useState } from 'react';

function App() {
   const [movies, setMovies] = useState([{
        title: "mission impossible 1",
        description:"action movie",
        rating:5,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg"
    },{
        title: "mission impossible 2",
        description:"action movie",
        rating:4.5,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg"
    }]);
  return (
    <div className="App">
      
      <MovieCard setMovies={setMovies} movies={movies} />
      <MovieList x={movies} />
      <Filter/>
      
    </div>
  );
}

export default App;
