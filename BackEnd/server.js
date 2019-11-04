// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://Admin:Admin@cluster0-j23ip.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{useNewUrlParser:true});

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

const MovieModel = mongoose.model('movie', movieSchema);



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/movies', (req,res,next) => {
//   const movies = [
//     {
//       "Title": "Avengers: Infinity War",
//       "Year": "2018",
//       "imdbID": "tt4154756",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//     },
//     {
//       "Title": "Charlie Wilson's War",
//       "Year": "2007",
//       "imdbID": "tt0472062",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
//     }];
//   console.log("get request")
//   res.json({
//     message: 'Posts fetched succesfully!',
//     movies: movies
//   });

  MovieModel.find((err,data)=>{
    res.json({movies:data});
  })
})

app.delete('/api/movies/:id', (req, res) => {
  console.log(req.params.id);
  MovieModel.deleteOne({_id:req.params.id}, (error, data) =>{
    if(error){
      res.json(data);
   }
  })
})

app.get('/api/movies/:id', (req, res, next) => {
  console.log(req.params.id);
  MovieModel.findById(req.params.id,
  function (err, data) {
  res.json(data);
  });
})

app.post('/api/movies', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.poster);

MovieModel.create({
  title:req.body.title,
  year: req.body.year,
  poster: req.body.poster
});
res.json('data uploaded');
})



app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});
