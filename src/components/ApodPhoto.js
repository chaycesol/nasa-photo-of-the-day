import React from 'react'
import styled  from 'styled-components' //{ keyframes }

// const kf = keyframes`
//     100%{

//     }
//     50% {

//     }
//    100%{

// }
// `
const StyledDetails = styled.div`

    .apod-img-div{
        position: relative;
        width: 75%;
        height: auto;
        /* border: 2px dotted red; */
        background-color: #000;


    .image {
        display: center;
        width: 100%;
        height: auto;
        &:hover  {
            opacity: 0.15;
        }    
    }
    }

    .overlay {
        display: center;
        /* border: 2px dotted yellow; */

        height: 100%;
        width: 100%;
        opacity: 0;
        /* transition: .5s ease; */
        /* background-color: #000; */
        
        &:hover  {
            opacity: 0.75;
        }    
    }

    .apod-data {
    color: #000;
    /* border: 2px dotted red; */
    font-size: 20px;
    position: absolute;
    top: 0.5%;
    /* left: 50%; */
    width: 100%;
    height: 100%;
    background-color: white;

    /* transform: translate(-50%, -50%); */
    text-align: center;
}
`

const ApodPhoto = props=> {
    const {photo} = props
    const backupPhoto = "https://i.imgur.com/V9WY8ga.png"

            // 2nd fetch to check on media type
        // logic to handle media type not being able to display video
        if (photo.media_type === "image") {
            photo.url = photo.url
        } else if (photo.media_type !== "image"){
            photo.url = backupPhoto
            // check date and set date to minus day until it is an image
            // newDate variable 
            // const date = "datenow-1" 
        }

  return(
    <StyledDetails className ="apod-div">
        <h2>Photo of the Day for {photo.date}</h2>
    <div className ="apod-img-div">
      <img className = "image" src={photo.url} alt={photo.title} />
        <div className="overlay">
            <div className="apod-data">
                <h2>{photo.title}</h2>
                <p>{photo.explanation}</p>
            </div>
        </div>
    </div>
  </StyledDetails>
  )
}


export default ApodPhoto


  