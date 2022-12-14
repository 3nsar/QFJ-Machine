import React, { useEffect, useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ScaleLoader";


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
  url: 'http://localhost:8000/quotes',
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
        <div className='qfj-container'>
    <div className='qfj-content'>
      <p>{quote}</p>
      <h2>{author}</h2>
      </div>
      <div className='qfj-btn'>
        <button onClick={getQuote}>Get aQuote</button>
      </div>
      
      </div>
    )}
  </div>
) }

export default Quotes