import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  console.log(movies);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">GhibVerse!</h1>
        <div>
          <p className="text-sm font-medium text-red-900">search movies</p>
        </div>

        {/*TODO: implement sort by: title, year of publication asc + desc,rt ratings  */}

        <main>
          <h2>Movies</h2>
          <div>
            grid display
            {/* map each movie to load here */}
            <ul>
              {movies.map((movie) => (
                <li key={movie}>
                  <h3>{movie.title}</h3>
                  <p>
                    {movie.original_title} : {movie.original_title_romanised}
                  </p>
                  <img src={movie.image} alt="movie poster" />
                  <p>{movie.producer}</p>
                  <p>{movie.release_date}</p>
                  <p>{movie.rt_scorre}</p>
                  <p>{movie.running_time}</p>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer>
          <p className="border-black">Developed by K.C. De Mey</p>
        </footer>
      </div>
    </>
  );
}

export default App;
