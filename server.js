const PORT = 8000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())


app.get('/quotes',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };
      axios.request(options).then((response)=> {
          res.json(response.data)
        //res.json(response.data.originator.name)
        
      }).catch((error) => {
          console.error(error);
      });
})




app.get('/facts',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://random-facts4.p.rapidapi.com/get',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
        }
      };
      axios.request(options).then((response) =>{
          res.json(response.data)
      }).catch((error) =>{
          console.error(error);
      },[])
      
})

app.get('/jokes',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
      };
      axios.request(options).then((response)=> {
          res.json(response.data);
      }).catch((error)=> {
          console.error(error);
      });

})


app.listen(PORT, ()=> console.log(`Server is running ${PORT}`))