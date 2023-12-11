import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap"; 
export default function Filter() { 
    const [inputFilter, setInputFilter] = useState({
    title: "",
    rating: "",
    
  });
    return (
    <form
      
    >
      <label>title:</label>
      <input
        value={inputFilter.title}
        onChange={(event) => {
          setInputFilter({...inputFilter, title: event.target.value });
        }}
      />

      <hr></hr>

      

      <hr></hr>
      <label>rating:</label>
      <input
        value={inputFilter.rating}
        onChange={(event) => {
          setInputFilter({...inputFilter, rating: event.target.value });
        }}
      />

      <hr></hr>
      

      <button>filter movie</button>
    </form>
  );
}
