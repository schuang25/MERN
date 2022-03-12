import './App.css';
import react, {useState} from 'react';

import AddBox from './components/AddBox';
import Boxes from './components/Boxes';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxNum, setBoxNum] = useState(0);

  const addNewBox = (newBox) => {
    boxes.push(newBox);
    // console.log(boxes);
    setBoxNum(boxNum + 1);
  }

  return (
    <div className="App">
      <AddBox onNewBox={addNewBox}/>
      <Boxes boxList={boxes} boxNum={boxNum}/>
    </div>
  );
}

export default App;
