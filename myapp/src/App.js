import './App.css';
import react from 'react';
import {useState} from 'react';
function App() {
const[todoList, setTodoList] = useState([]);
const [newtodo, setTodo] = useState('');
const handleChange = (e) => {
  setTodo (e.target.value);
} 
const addTodo = (e) => {
let arr=[]
}
  return (
    <div className="App">
     <div className='addtask'></div>
     <input onChange={handleChange}/>
      <button onClick={addTodo}>ADD TASK</button>
      <div className='List'></div>
      {newtodo}
    </div>
  );
}

export default App;
