import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function CreateMovie(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [releaseDate, setRelaseDate] = useState('');

function submit (){
    if(name && rating && releaseDate){
        const movie = {
            name,
            rating,
            releaseDate
        }
    
      axios.post('http://localhost:8000/movies', movie).then(response => {
         console.log(response.data)
         alert("Succesfully created movie")
         history.push("/");
      }).catch(err =>{
        console.log(err);
        alert("Error: " + err.message)
      })
    }else{
        alert("Missing field")
    }
    


}


    return(<>
      <h1> Add A Movie</h1>
        
        <div>
            <p>Movie Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
        </div>


        <p>Ratings</p>
        <div style={{display: "flex", alignContent:'center', justifyContent:"center"}}>
           
         <ReactStars
         count={5}
         onChange={(value)=> setRating(value)}
       size={24}
         activeColor="#ffd700"
          />
          {/* <input value={rating} onChange={(e) => setRating(e.target.value)}  type="text" /> */}
        </div>
          
        <div>
            <p>Relase Date</p>
          <input value={releaseDate} onChange={(e) => setRelaseDate(e.target.value)} type="date" />
        </div>

        <button className="btn btn-primary m-4" onClick={() => submit()}> Submit </button>
          
          
       
    </>)
}