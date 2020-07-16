
//importing React and useState and useEffect
import React, {useState, useEffect } from "react";
//importing my data parser for API
import axios from 'axios'
// import my API Key and url for api from Nasa via constants
import { API_KEY, BASE_URL } from './constants'
import styled from 'styled-components'
import "./App.css";
import ApodPhoto from './components/ApodPhoto'

const StyledApp = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8374fac0-6f02-49a4-b287-125bf0580b45/d9eay0l-e6e11a40-1825-41c2-a649-493068ddc9fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODM3NGZhYzAtNmYwMi00OWE0LWIyODctMTI1YmYwNTgwYjQ1XC9kOWVheTBsLWU2ZTExYTQwLTE4MjUtNDFjMi1hNjQ5LTQ5MzA2OGRkYzlmZS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.tkQIqjeYoNsWDcj3Ycb1zS-QSFkOLxcy18wValps1eE");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}
    
`

function App() {
  
  //creating useState statement to have a place to set my data from the API into the DOM
  const [currentPhoto, setCurrentPhoto] = useState({})
  const backupPhoto = ""
  
  //initiating useEffect to make a call to the API to get my data pulling in from constants. Helps to limit calls to API
  useEffect( () => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`) // copy and paste to test your api and if statement ->> &date=2020-07-13
    .then(res => {
      setCurrentPhoto(res.data)
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }, []); 

  return (
    <div className="App">
      <StyledApp className = "nasaApp">
      <h1>Astronomy Photo of the Day! <span role="img" aria-label="space emojis">🚀🛰👽</span></h1> 
      <p>
      <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos! </a>
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer!
      </p>
     <ApodPhoto date media_type title explanation photo={currentPhoto} />
    </StyledApp>
      </div>
      
  );
}

export default App;
