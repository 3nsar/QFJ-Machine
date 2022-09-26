const PORT = 8000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.get('/jokes', (req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };
    
      axios.request(options).then((response)=> {
          res.json(response.data.content )
      }).catch((error) => {
          console.error(error);
      });
})

app.listen(PORT, ()=> console.log(`Server is running ${PORT}`))