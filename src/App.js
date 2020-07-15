
//importing React and useState and useEffect
import React, {useState, useEffect } from "react";
//importing my data parser for API
import axios from 'axios'
// import my API Key and url for api from Nasa via constants
import { API_KEY, BASE_URL } from './constants'
import "./App.css";



function App() {
  
  //creating useState statement to have a place to set my data from the API into the DOM
  const [photoState, setPhotoState] = useState({})

  //initiating useEffect to make a call to the API to get my data pulling in from constants. Helps to limit calls to API
  useEffect( () => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(res => {
      setPhotoState(res.data)
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }, []); 

  const ApodPhoto = ({ elm }) => (
    <div className ="apod-div">
      <div className ="apod-img-div">
      <h2>Photo of the Day for {elm.date}</h2>
        <img src={elm.url} alt={elm.title} />
      </div>
      <div className="apod-data">
        <h2>{elm.title}</h2>
        <p>{elm.explanation}</p>
      </div>
    </div>
  )

  return (
    <div className="App">
      <h1>Astronomy Photo of the Day! <span role="img" alt="space emojis">🚀🛰👽</span></h1> 
      <p>
      <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos! </a>
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer!
      </p>
      <ApodPhoto elm={photoState} />
    </div>
  );
}

export default App;
