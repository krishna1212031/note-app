import {useState} from 'react';
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
  
  let initial = [];
  if ( JSON.parse(localStorage.getItem('mylists')) !== null){
      initial = JSON.parse(localStorage.getItem('mylists'))
  }
  const [mylists, setmylists] = useState(initial);

  
  // setmylists(JSON.parse(localStorage.getItem('mylists')));


  const deleteFn = (id) => {
    const newmylists = mylists.filter((list) => list.id !== id );
    setmylists(newmylists);
    localStorage.setItem("mylists", JSON.stringify(newmylists));
  }

  const addFn = ( newNote) => {
    const newMyLists = [...mylists,newNote];
    setmylists(newMyLists);
    // hoisting
    // Execution context
    // coercion
    // event loop
    localStorage.setItem("mylists", JSON.stringify(newMyLists));
  }

  return (
    <div className="container">
      <h1 className="h2 hed">Sticky Notes</h1><hr/>
      <Input addNote = {addFn} />
      <List mylist={mylists} onDelete={deleteFn} />
    </div>
  );
}



export default App;
