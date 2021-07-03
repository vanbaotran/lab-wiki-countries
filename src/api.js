import axios from 'axios'
// let json1;
const getData = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
        console.log(response)
        // json1 = response
    } )
    .catch(err=>console.log(err))
}
export default getData