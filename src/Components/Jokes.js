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
  <div className='qfj-container'>
    <div className='qfj-content'>
      <p>{joke}</p>
      </div>
      <div className='qfj-btn'>
        <button onClick={getJoke}>Get Joke</button>
      </div>
  </div>
  )
}


export default Jokes