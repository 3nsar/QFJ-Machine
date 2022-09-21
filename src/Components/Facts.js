import React, { useEffect, useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Facts = () => {

const[fact, setFact] = useState(null);
const[loading, setLoading] = useState(true)

useEffect(()=>{
getFact()
},[])

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
    <div className='qfj-container'>
      {

        loading ?(
        <ClipLoader color={"#5800FF"} loading={loading} size={150} />
        ):(
          <div>
      <div className='qfj-content'>
        <p>{fact}</p>
        </div>
        <div className='qfj-btn'>
          <button onClick={getFact}>Get Fact</button>
        </div>
        </div>
      )}
    </div>
    
  )
}

export default Facts