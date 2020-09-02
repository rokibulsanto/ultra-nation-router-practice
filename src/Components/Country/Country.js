import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,population} = props.country;
    const countryStyle ={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'14px',
       textAlign:'center'
    }
    const history = useHistory();
    const handleClick = (countryName) => {
            history.push(`/country/${countryName}`)
    }
    const btnStyle ={
        border:'1px solid goldenrod',
        backgroundColor:'orange',
        borderRadius:'5px',
        fontSize:'17px',
        cursor:'pointer'
    }
    return (
        <div style={countryStyle}>
           
            <h1>{name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Population: {population}</h3>
            <Link to={`country/${name}`}>Show details</Link> <br/>
            <button style= {btnStyle} onClick={()=> handleClick(name)}>Click here</button>
           
        </div>
    );
};

export default Country;