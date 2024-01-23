import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=>setCountries(data))
    .catch((err)=>console.error("Error fetching data: ",err));
  },[]);
  return (
    <div >
       {
        countries.map((country)=>(
          <div>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`}></img>
            <h2>{country.name.common}</h2>
          </div>
        ))
       }
    </div>
  );
}

export default App;
