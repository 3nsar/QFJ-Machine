import React, { useEffect, useState } from 'react'

const Fact = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.FACT_KEY,
            'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
        }
    };
    const [data, setData] = useState(null)
    useEffect(()=>{
    fetch('https://random-facts4.p.rapidapi.com/get', options)
        .then(response => response.json())
        .then(apiData => setData(apiData[data].topic))
        .catch(err => console.error(err));

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
})
}

export default Fact