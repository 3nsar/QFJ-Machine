import React, { useState } from 'react'
import axios from "axios";

const Quotes = () => {

const[quote, setQuote] = useState(null)

const[author, setAuthor] = useState(null)

const getQuote = ()=>{

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

axios.request(options).then((response)=> {
	setQuote(response.data.content )
    setAuthor(response.data.originator.name)
}).catch((error) => {
	console.error(error);
});
}

  return (
    <div className='qfj-container'>
      <div className='qfj-content'>
        <p>{quote}</p>
        <h2>{author}</h2>
        </div>
        <div className='qfj-btn'>
          <button onClick={getQuote}>Get Quote</button>
        </div>
    </div>
  )
}

export default Quotes