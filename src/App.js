import './App.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList />
      < CountryDetails />
    </div>
  );
}

export default App;
