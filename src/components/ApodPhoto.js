import React from 'react'

const ApodPhoto = props=> {
    const {photo} = props
  return(
    <div className ="apod-div">
    <div className ="apod-img-div">
    <h2>Photo of the Day for {photo.date}</h2>
      <img src={photo.url} alt={photo.title} />
    </div>
    <div className="apod-data">
      <h2>{photo.title}</h2>
      <p>{photo.explanation}</p>
    </div>
  </div>
  )
}


export default ApodPhoto