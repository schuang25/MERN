import './App.css';

import {useParams} from "react-router";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
};

const SingleInput = (props) => {
  const {input} = useParams();
  return (
    <h1>{isNaN(input) ?
      "The word is: " + input
      : "The number is: " + input
    }</h1>
  );
}

const ColoredInput = (props) => {
  const {input, textColor, bgColor} = useParams();
  console.log(input);
  console.log(textColor);
  console.log(bgColor);
  return (
    <h1 style={{color: textColor, backgroundColor: bgColor}}>The word is: {input}</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:input">
          <SingleInput />
        </Route>
        <Route exact path="/:input/:textColor/:bgColor">
          <ColoredInput />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
