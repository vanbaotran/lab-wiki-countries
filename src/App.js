import './App.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from 'react-router-dom';
import React from 'react'
import axios from 'axios';
let Json;
class App extends React.Component {
  componentDidMount(){
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
        console.log(response.data)
        Json = response.data
    } )
    .catch(err=>console.log(err))
  }
  render(){
    if (!json){
      return 'loading'
    }
    return (
      <div className="App">
       <NavBar />
       <div className="content">
           <div className="sidebar">
          <CountriesList />
          </div>
          <main>
            <Switch>
              <Route exact path="/countries/:cca3" component={CountryDetails} />
            </Switch>
          </main>
        </div>
      
      </div>
    );
  }
}

export default App;
