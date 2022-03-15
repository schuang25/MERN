import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState([]);

  const fetchData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data.results);
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Pokemon</button>
      <ul>
        {
          responseData.length >= 1 ?
            responseData.map((item, i) => {
              return <li key={i}>{item.name}</li>
            })
            : ""
        }
      </ul>
    </div>
  );
}

export default App;
