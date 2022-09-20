import React, { useState } from 'react'
import axios from "axios";

const Facts = () => {

const[fact, setFact] = useState(null);

const getFact= ()=>{

const options = {
  method: 'GET',
  url: 'https://random-facts4.p.rapidapi.com/get',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
  }
};

axios.request(options).then((response) =>{
	setFact(response.data[0].description)
}).catch((error) =>{
	console.error(error);
},[])


}
  return (
    <div>
    <h1>{fact}</h1>
    <button onClick={getFact}>Get a Fact!</button>
    </div>
  )
}

export default Facts