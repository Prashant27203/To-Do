import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtodo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo (e.target.value);
  } 

  const addTodo = () => {
    setTodoList([...todoList, { text: newtodo, completed: false }]);
    setTodo('');
  }

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const toggleCompleted = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  }
// hello
  return (
    <div className="App">
      <div className='header'>
        <h1>Todo List App</h1>
      </div>
      <div className='add-task'>
        <input onChange={handleChange} value={newtodo} placeholder="Enter a new task" />
        <button onClick={addTodo}>ADD TASK</button>
        <button onClick={() => setTodoList([])}>CLEAR ALL</button>
      </div>
      <div className='list'>
        {
          todoList.map((task, index) => (
            <div className={`task ${task.completed ? 'completed' : ''}`} key={index}>
              <h3>{task.text}</h3>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => toggleCompleted(index)}>Completed</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
