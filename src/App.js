import React, { useState, useEffect } from 'react'
import './App.css';

//Importing componenets 
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => { //this has to be on top because it runs once
    getLocalTodos();
  }, [])

  useEffect(() => { //filters an object everytime we add a todo or change status
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => 
            todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => 
            todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    //this will set the items to the new array when new todos are added
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  //Save to Local
    //If our local storage doesn't have todos inside or null then we are going to make an empty array using JSON.stringify, but if it does have something then it will set that item to our state through parse
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      }else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    };
    
  return (
    <div className="App">
      <header>
        <h1>Alvin's Todo List</h1>
      </header>
      <Form 
      setInputText={setInputText} 
      inputText={inputText} 
      setTodos={setTodos} 
      todos={todos}
      setStatus={setStatus}
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
