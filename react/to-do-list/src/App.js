import './App.css';
import react, {useState} from 'react';

import ListEntry from './components/ListEntry';
import ToDo from './components/ToDo';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [itemsDone, setItemsDone] = useState([]);

  const addNewItem = (newItem) => {
    setToDoList([...toDoList, newItem]);
    setItemsDone([...itemsDone, false]);
  };

  const updateItemStatus = (item, status) => {
    let newItemStatus = [...itemsDone];
    newItemStatus[toDoList.indexOf(item)] = status;
    setItemsDone(newItemStatus);
  }

  const removeItem = (item) => {
    let index = toDoList.indexOf(item);
    setItemsDone(itemsDone.slice(0, index).concat(itemsDone.slice(index + 1)));
    setToDoList(toDoList.filter(task => task != item))
  }
  
  return (
    <div className="App">
      <ListEntry list={toDoList} onNewItem={addNewItem}/>
      <ToDo list={toDoList} done={itemsDone} onItemStatusUpdate={updateItemStatus} onRemoveItem={removeItem} />
    </div>
  );
}

export default App;
