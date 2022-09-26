import React, { useEffect,useState } from 'react'
import axios from "axios";
import ClipLoader from "react-spinners/ScaleLoader";


const Jokes = () => {

const[joke, setJoke] = useState(null)
const[loading, setLoading] = useState(false)

useEffect(()=>{
  getJoke()
  },[])

const getJoke = ()=>{

const options = {
  method: 'GET',
  url: 'https://http://localhost:8000/jokes',
};

setLoading(true)
axios.request(options).then((response)=> {
	setJoke(response.data[0].joke);
  setLoading(false)
}).catch((error)=> {
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
      <p>{joke}</p>
      </div>
      <div className='qfj-btn'>
        <button onClick={getJoke}>Get a Joke</button>
      </div>
        
      </div>
    )}
  </div>
  
) }

export default Jokes