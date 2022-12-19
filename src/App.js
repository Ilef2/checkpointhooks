import "./App.css";
import { useState } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import Fillter from "./Fillter";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";

function App() {
  const [fillter, setFillter] = useState("");
  const [rate, setRate] = useState("");

  const [movies, setMovies] = useState([
    {
      title: "The boat that rocked",
      description:
        "A comedy film is a category of film which emphasizes humor.[1] These films are designed to make the audience laugh through amusement.",
      posterURL: "https://i.stack.imgur.com/VbrId.jpg",
      URL:"https://www.youtube.com/embed/CZ3xNmqxZQE",
      id: 1,
      rate: 3,
    },
    {
      title: "Dumplin",
      description:
        "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement.Films in this style traditionally have a happy ending .",
      posterURL:
        "https://occ-0-1722-1723.1.nflxso.net/art/d4760/3083ab1519391cf10b74d004b5cf252c7f0d4760.jpg",
      URL:"https://www.youtube.com/embed/u1cdJA6jxtA",
      id: 2,
      rate: 4,
    },
    {
      title: "Toy story",
      description:
        "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement.",
      posterURL:
        "https://img2.thejournal.ie/inline/1072550/original/?width=348&version=1072550",
      URL:"https://www.youtube.com/embed/q_1wTx-qIpk",
      id: 3,
      rate: 2,
    },
  ]);
  const handleFillter = (val) => {
    setFillter(val);
  };
  const handleRate = (val) => {
    setRate(val);
  };
  const handleAdd = (newmovie) => {
    setMovies([...movies, newmovie]);
  };
 
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Fillter handleRate={handleRate} handleFillter={handleFillter} />
              <AddMovie handleAdd={handleAdd} />
              <MovieList
                movies={movies.filter(
                  (elm) => elm.title.includes(fillter) && elm.rate >= rate
                )}
              />
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail movies={movies}/>} />
      </Routes>

      <header></header>
    </div>
  );
}

export default App;
