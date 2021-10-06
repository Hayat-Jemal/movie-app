import React, { useState } from 'react'
import styled from "styled-components";
import MovieDetail from "./MovieDetail/MovieDetail";
import Modal from "react-modal"
const MovieCard = ({poster,title,id}) => {
  const [view, setView] = useState(false);
  
  function viewInfo() {
      view === false ? setView(true) : setView(false);
  }
  
    return (
      <div>
        <Wrapper>
          <img src={poster} alt="Title" />
          <h2>{title}</h2>
          <button onClick={viewInfo}>view</button>
        </Wrapper>

         <Modal isOpen={view} onRequestClose={viewInfo}>
          <MovieDetail id={id} viewInfo={viewInfo} />
         </Modal> 
      </div>
    );
}
let Wrapper = styled.div`
 margin-top: 60px;
   > img {
     margin: 10px;
     height: 400px;
   }
 `;

export default MovieCard
