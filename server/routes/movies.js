const express = require('express')
const router = express.Router();



const movies = [
{"name":"War Game, The","rating":2,"releaseDate":"8/30/2022"},
{"name":"Silvestre","rating":1,"releaseDate":"11/22/2022"},
{"name":"Cantinflas","rating":2,"releaseDate":"12/3/2022"},
{"name":"Highlander: The Source","rating":1,"releaseDate":"6/25/2022"},
{"name":"Tales from the Crypt","rating":2,"releaseDate":"7/24/2022"},
{"name":"Flying Leathernecks, The","rating":5,"releaseDate":"11/20/2022"},
{"name":"Very Natural Thing, A","rating":4,"releaseDate":"12/17/2022"},
{"name":"Generation, A (Pokolenie)","rating":5,"releaseDate":"1/29/2023"},
{"name":"FernGully 2: The Magical Rescue","rating":0,"releaseDate":"2/11/2023"},
{"name":"7 Days in Havana","rating":4,"releaseDate":"7/29/2022"},
{"name":"Valmont","rating":1,"releaseDate":"12/2/2022"},
{"name":"Herbie Rides Again","rating":2,"releaseDate":"8/4/2022"},
{"name":"Sparks","rating":4,"releaseDate":"4/4/2023"},
{"name":"Cross of Lorraine, The","rating":2,"releaseDate":"9/19/2022"},
{"name":"Wrecking Crew, The","rating":0,"releaseDate":"3/5/2023"},
{"name":"Aladdin","rating":3,"releaseDate":"9/13/2022"},
{"name":"Showtime","rating":3,"releaseDate":"8/14/2022"},
{"name":"Mission Bloody Mary","rating":5,"releaseDate":"2/22/2023"},
{"name":"Twilight Saga: Breaking Dawn - Part 2, The","rating":3,"releaseDate":"5/19/2023"},
{"name":"Night to Remember, A","rating":5,"releaseDate":"8/25/2022"}
]


router.get('/movies', function (req, res) {
    res.json(movies);
})


router.post('/movies', async function (req, res) {
   try {
        const movie = {
            name: req.body.name,
            rating: req.body.rating,
            releaseDate: req.body.releaseDate,
        } 
    
        movies.push(movie);

        res.json("created successfully")
    }catch(err){
        console.log(err);
        res.json("error: " + err.message);
    }
    

})

module.exports = router;