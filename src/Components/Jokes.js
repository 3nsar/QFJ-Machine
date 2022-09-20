import React, { useState } from 'react'
import axios from "axios";

const Jokes = () => {

const[joke, setJoke] = useState(null)

const getJoke = ()=>{

const options = {
  method: 'GET',
  url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then((response)=> {
	setJoke(response.data[0].joke);
}).catch((error)=> {
	console.error(error);
});
}
  return (
    <div>
        <h1>{joke}</h1>
        <button onClick={getJoke}>Get Joke</button>
    </div>
  )
}


export default Jokes