import React from 'react';
import json from '../countries.json'
import {Link} from 'react-router-dom'

function CountryDetails(props){
  console.log(props)
  // const foundCountry = json.find(function(el){
  //     return el.cca3===props.match.params.cca3
  //   })
  const getCountry = (cca3) => {
    const theCountry = (oneCountry) =>{
      return oneCountry.cca3 === cca3
    }
    return json.find(theCountry)
  }
  const foundCountry = getCountry(props.match.params.cca3)
  return (
    <div className="col-7">
      <h2>{foundCountry.name.common}</h2>
      <table className="table">
          <thead></thead>
            <tbody>
              <tr>
                <td style={{width:"30%"}}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {foundCountry.borders.map((el)=>{
                    return <li key={el}><Link to={`/countries/${el}`}>{getCountry(el).name.common}</Link></li>
                  })}
                  </ul>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
  )
}
export default CountryDetails