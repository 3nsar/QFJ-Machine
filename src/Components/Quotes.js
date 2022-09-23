import React, { useEffect, useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ScaleLoader";
import Footer from './Footer';

const Quotes = () => {

const[quote, setQuote] = useState(null)
const[author, setAuthor] = useState(null)
const[loading, setLoading] = useState(false)

useEffect(()=>{
  getQuote()
  },[])

const getQuote = ()=>{

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

setLoading(true)
axios.request(options).then((response)=> {
	setQuote(response.data.content )
  setAuthor(response.data.originator.name)
  setLoading(false)
}).catch((error) => {
	console.error(error);
});
}
return (
  <div className='qfj-container'>
    {

      loading ?(
        <div className='loading'>
          <ClipLoader color={"#5800FF"} loading={loading} size={150}/>
        </div>
      ):(
        <div>
    <div className='qfj-content'>
      <p>{quote}</p>
      <h2>{author}</h2>
      </div>
      <div className='qfj-btn'>
        <button onClick={getQuote}>Get Joke</button>
      </div>
      
      </div>
    )}
  </div>
) }

export default Quotes