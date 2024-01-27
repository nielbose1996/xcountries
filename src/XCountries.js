import React, { useState, useEffect } from 'react';
import './App.css';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error('Error fetching data: ', err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className='containerStyle'>
      <input
        type='text'
        placeholder='Search for countries ...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='searchBar'
      />
      {filteredCountries.map((country) => (
        <div className='cardStyle' key={country.name.common}>
          <img
            className='imageStyle'
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
          ></img>
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
