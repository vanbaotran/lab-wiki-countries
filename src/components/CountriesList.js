import React from 'react'
import json from '../countries.json'
import {Link} from 'react-router-dom'

function CountriesList(){
    const list = [...json]
    return (
        <div>
            {list.map((el,i)=>{
                return (
                    <div key={i}>
                    <h4>
                        <Link to={`/countries/${i}`}>{el.name.common}</Link>
                    </h4>
                    </div>
                )
            })}
        </div>

    )
}
export default CountriesList;