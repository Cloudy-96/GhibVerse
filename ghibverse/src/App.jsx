import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/movie-modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // TODO: turn into a function when implementing a sort feature
  // movies.sort(function (a, b) {
  //   return a.release_date - b.release_date;
  // });

  function setOpenModal() {
    setIsOpen(!modalIsOpen);
    console.log("after setModalIsOpen:", modalIsOpen);
  }

  return (
    <>
      <div>
        <header>
          <h1 className="text-3xl font-bold underline">GhibVerse!</h1>
          <form>
            <input
              type="text"
              placeholder="search movies"
              className="text-sm font-medium text-red-900"
            />
            <input type="submit" value="search" />
          </form>
        </header>
        {/*TODO: implement sort by: title, year of publication asc + desc,rt ratings  */}

        <main>
          <h2>Movies</h2>
          {modalIsOpen && (
            <Modal
              movies={movies}
              setOpenModal={setOpenModal}
              modalIsOpen={modalIsOpen}
              selectedMovie={selectedMovie}
              // setSelectedMovie={setSelectedMovie}
            />
          )}

          <div className="">
            <ul>
              {movies.map((movie) => (
                <li
                  key={movie.id}
                  className="card h-56 border border-gray-900 border-solid rounded m-0.5"
                >
                  <div>
                    <img
                      className=" card-img h-40 m-1.5"
                      src={movie.image}
                      alt="movie poster"
                    />
                  </div>

                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>
                      {movie.original_title} : {movie.original_title_romanised}
                    </p>
                    <p>Producer: {movie.producer}</p>
                    <p>Released: {movie.release_date}</p>
                    <p>Rotton Tomatoes score: {movie.rt_score}%</p>
                    <p>Run time: {movie.running_time} mins</p>
                  </div>

                  <div className="see-more">
                    <button
                      id={`button${movie.id}`}
                      onClick={() => {
                        setOpenModal();
                        setSelectedMovie(movie);
                        console.log("selectedMovie:", selectedMovie);
                      }}
                    >
                      See More
                    </button>
                  </div>
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
