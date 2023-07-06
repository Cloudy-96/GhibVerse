import "./modal.css";
import { useState, useEffect } from "react";

const Modal = ({ movies, setOpenModal, modalIsOpen, selectedMovie }) => {
  const [people, setPeople] = useState([]);

//   let peopleList = [];

//   people.filter(
//     people.films === `https://ghibliapi.vercel.app/films/${selectedMovie.id}`
//   );

//   useEffect(() => {
//     fetch(`https://ghibliapi.vercel.app/people/${selectedMovie.people}}`)
//       .then((res) => res.json())
//       .then((data) => setPeople(data))
//       .then(console.log("people:", people));
//   }, []);

  return (
    <div className="modal-body">
      <section className="flex modal-header border-bottom">
        <h2>{selectedMovie.title}</h2>
        <button className="bg-red-200" onClick={setOpenModal}>
          X
        </button>
      </section>

      <section className="modal-content">
        <img
          className=" card-img h-40 m-1.5"
          src={selectedMovie.movie_banner}
          alt="movie poster"
        />
        <p>Description: {selectedMovie.description}</p>
        <p>Characters:{selectedMovie.people.length}</p>
        {/* <p>Featured Species: {selectedMovie.species}</p>
          <p>Featured Vehicles: {selectedMovie.vehicles}</p>
          <p>Locations: {selectedMovie.locations}</p> */}
      </section>
    </div>
  );
};

export default Modal;
