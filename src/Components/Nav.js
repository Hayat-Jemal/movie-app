import React, { useState } from "react";
import MovieList from "./MovieList";
import "./Nav.css"
const Search = () => {
  // const [show, setShow] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [allInput, setAllInput] = useState("The matrix");
  const [type, setType] = useState("movie");
  const handleClick = (e) => {
    e.preventDefault();
    setType(document.getElementById("type").value);
    setAllInput(userInput);
    // setShow(true);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="navContainer">
          <div className="formContainer">
            <input
              type="text"
              onChange={(e) => setUserInput(e.target.value)}
              className="searchInput"
            />
            <select name="type" id="type">
              <option value="movie" select>
                Choose Type
              </option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="game">Game</option>
            </select>
            <button onClick={handleClick} className="searchBtn">
              Submit
            </button>
          </div>
        </div>
      </form>
      <MovieList userInput={allInput} type={type} />
    </div>
  );
};

export default Search;
