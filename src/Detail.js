import React from 'react'

import "./App.css";
import { Link, useParams } from 'react-router-dom';




const Detail  = (props) => {
  const params=useParams()
  const movie=props.movies.filter(el=>el.id === +params.id)
 
  
 

 return (
    <div>
     <Link to ="/"> <button> back</button></Link>
     <h1>{movie[0].description}</h1> 
     <iframe width="560" height="315" src={movie[0].URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
     
     

   </div>
  )
}

export default Detail;