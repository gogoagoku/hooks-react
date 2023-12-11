import React, { useState } from 'react'

import { Card } from "react-bootstrap";  
const MovieList = ({x}) => {
 
  
  return (
    <div>{x.map((movie) =>
      <div className="info">
        <Card style={{ width: "400px", margin: "10px", textAlign: "center",border:"black solid 4px",borderRadius:"6px" }}>
      <Card.Img variant="top" src={movie.posteUrl} alt="" width={"400px"} height={"400"}  />
      <Card.Body >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          description: {movie.description}<br />
          rating: {movie.rating}<br />
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
        
      </div>
      )}
      {/* {setMovies[...movies],{title:movies.title,description:movies.description,rating:movies.rating,posteUrl:movies.posteUrl} )} */}
    </div>
  )
}

export default MovieList