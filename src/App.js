import './App.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from 'react-router-dom';

function App() {
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

export default App;
