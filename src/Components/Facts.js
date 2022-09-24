import React, { useEffect, useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ScaleLoader";


const Facts = () => {

const[fact, setFact] = useState(null);
const[loading, setLoading] = useState(false)

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

setLoading(true)
axios.request(options).then((response) =>{
	setFact(response.data[0].description)
  setLoading(false)
}).catch((error) =>{
	console.error(error);
},[])

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