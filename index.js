const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

require("dotenv").config();

const { PORT } = process.env ;

app.get("/",(req,res)=>{
    res.send("Welcome to Home page.");
});


const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
  params: {query: 'london'},
  headers: {
    'X-RapidAPI-Key': '3a17db55d2mshec554914380eba9p1e5383jsna350bfcf5834',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



app.listen(PORT,()=>{
    console.log(`Server is running the localhost : ${PORT}.`);
});
