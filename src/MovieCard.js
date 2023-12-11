import React from "react";
import { useState } from "react";

export default function MovieCard({movies,setMovies}) {

 
  const [formInputs, setFormInput] = useState({
    title: "",
    description: "",
    rating: 0,
    posteUrl: "",
    
  });
  function handleAddClick() {
  setMovies([...movies,formInputs])
    
      
  
     
     
    
  }
  return (
    
    <form onSubmit={(event) => {
      event.preventDefault();
     
       console.log(formInputs)

    }}>
      <label>title:</label>
      <input
        value={formInputs.title}
        onChange={(event) => {
          setFormInput({...formInputs, title: event.target.value });
        }}
      />

      <hr></hr>

      <label>description:</label>
      <input
        value={formInputs.description}
        onChange={(event) => {
          setFormInput({...formInputs, description: event.target.value });
        }}
      />

      <hr></hr>
      <label>rating:</label>
      <input
        value={formInputs.rating}
        onChange={(event) => {
          setFormInput({...formInputs, rating: event.target.value });
        }}
      />

      <hr></hr>
      <label>posteUrl:</label>
      <input
        value={formInputs.posteUrl}
        onChange={(event) => {
          setFormInput({...formInputs, posteUrl: event.target.value });
        }}
      />

      <hr></hr>

      <button onClick={handleAddClick}>add movie</button>
    </form>
  );
};