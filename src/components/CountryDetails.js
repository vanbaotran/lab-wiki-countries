import React from 'react';
import  CountriesList  from './CountriesList';
import { Link } from 'react-router-dom';
 
const CountryDetails = (props) => {
    console.log(props); 
    const getCountry = (id) => {
        const theCountry = oneCountry => {
          return oneCountry.id === id;
        }
        return CountriesList.find(theCountry)
      };
      const { params } = props.match;
      const foundCountry = getCountry(params.id);
 
    return (
      <div>
        <h2> {foundCountry.name.common}</h2>
        <p>{foundCountry.capital}</p>
        <p>{foundCountry.area}</p>
      </div>
    );
}    
 
export  default CountryDetails;