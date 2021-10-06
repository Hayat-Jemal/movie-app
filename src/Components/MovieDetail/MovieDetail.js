import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovieDetailsById } from "../API/API";
import "./MovieDetail.css";
const MovieDetail = ({ id, viewInfo }) => {
  // const [movieDetails, setMovieDetails] = useState({"Ratings": []});
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    async function getData() {
      const data = await getMovieDetailsById(id);
      setMovieDetails(data);
    }
    getData();
  }, [id]);
  console.log(movieDetails);
  return (
    <div className="mainContainer">
      <div className="modalContainer">
        <div style={{ textAlign: "right" }}>
          <button style={{ fontSize: "1.5em" }} onClick={viewInfo}>
            X
          </button>
        </div>
        <Info>
          <img src={movieDetails.Poster} alt="" />
          <div className="infoText">
            <h1 className="infoTextItem">{movieDetails.Title}</h1>
            <h3 className="infoTextItem">Actors: {movieDetails.Actors} </h3>
            <h3 className="infoTextItem">Awards: {movieDetails.Awards}</h3>
            <h3 className="infoTextItem">Year: {movieDetails.Year} </h3>
            <h3 className="infoTextItem">Released : {movieDetails.Released}</h3>
            <h3 className="infoTextItem">Genre: {movieDetails.Genre}</h3>

            <h1>Ratings</h1>
            {movieDetails.Ratings?.map((movie) => (
              <div className="ratingsContainer">
                <p>
                  {movie.Source} -{" "}
                  <span className="rating"> {movie.Value} </span>
                </p>
              </div>
            ))}
          </div>
        </Info>
        <div className="btnContainer">
          <button className="searchBtn" onClick={viewInfo}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
let Info = styled.div`
  display: flex;
  justify-content: space-between;
  /* display: flex;
  margin: 50px;
  align-items: center; */

  > img {
    padding: 20px;
  }
`;

export default MovieDetail;
