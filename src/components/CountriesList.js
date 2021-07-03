import React from 'react'
import Json from '../api.js'
import {Link} from 'react-router-dom'

function CountriesList(){
    if(!Json){
        return 'loading'
    }
        const list = [...Json]
    return (
        <div>
            {list.map((el,i)=>{
                return (
                    <div key={i}>
                    <h4>
                        {el.flag}<Link to={`/countries/${el.cca3}`}>{el.name.common}</Link>
                    </h4>
                    </div>
                )
            })}
        </div>

    )
}
export default CountriesList;