import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [SingleCountry,setSingleCountry] = useState([]);
    
    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleCountry(data[0]))
    },[])

const {flag,name,nativeName,capital,population,region,area} = SingleCountry;
const flagStyle ={
    width:'100%'
};
const singleCountryStyle ={
    border:'none',
    marginTop:'50px',
    textAlign:'center',
    width:'500px',
    marginBottom:'25px',
    padding:'20px',
    borderRadius:'18px',
    boxShadow:'8px 10px 15px white'
    
}
    return (
        <div style={singleCountryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h1>{name}</h1>
            <p>Native Name: {nativeName} </p>
            <h2>Capital: {capital}</h2>
            <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
            <h5>Area: {area}</h5>
          
        </div>
    );
};

export default CountryDetail;