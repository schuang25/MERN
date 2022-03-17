import './App.css';

import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom';
import axios from 'axios';


function App() {
  const [category, setCategory] = useState("");
  const [id, setId] = useState(0);
  const [response, setResponse] = useState([]);
  

  const formSubmitted = (form) => {
    console.log(form)
    setCategory(form.category);
    setId(form.id);
  }
  
  useEffect(() => {
    if (category != "" && id > 0) {
      axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
          console.log(response.data);
          setResponse(response.data);
        })
        .catch(err => setResponse(["error!"]));
    }
  }, [category, id])

  return (
    <div className="App">
      <BrowserRouter>
        <SearchForm onFormSubmit={formSubmitted}/>
        <Switch>
          <Route path="/:category/:id">
            <SearchResults data={response}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
