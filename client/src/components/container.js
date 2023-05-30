import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


export default function Container(){


    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getMovies();
    }, [])


    function getMovies(){
       axios.get('http://localhost:8000/movies').then((response)=>{
        console.log(response.data);
        setMovies(response.data);
       }).catch((error)=>{
        console.log(error);
       })
    }

    return(
        <>
           <h1> Movies List </h1>

           <Link to="/create-movie" > <button className='btn btn-primary m-4' > Create Movie</button> </Link>
           <div className="row">
             {movies.reverse().map((movie, i)=>(
                <>
                
  <div className="col-sm-6 mb-3 mb-sm-0 p-4" key={i}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <div style={{display: "flex", alignContent:'center', justifyContent:"center"}}>
            
         <ReactStars
         count={5}
         value ={Number(movie.rating)}
         // onChange={(value)=> setRating(value)}
       size={24}
         activeColor="#ffd700"
          />
          </div>
        <h6> {movie.releaseDate}</h6>
    
      </div>
    </div>
  </div>
                </>
             ))}
     </div>
        </>
    )
}