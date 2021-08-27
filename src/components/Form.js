import React from 'react';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus, setName }) => {

    const inputTextHandler = (e) => {
        setInputText({
          ...inputText,
          todo: e.target.value
        });
    };

    const nameInputHandler = (e) => {
        setInputText({
          ...inputText,
          name: e.target.value
        });
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
          text: inputText.todo, 
          completed: false, 
          id: Math.random() * 1000
        }
        if(inputText.todo !== undefined) {
          if((inputText.todo).length > 0) {
            setTodos([
                ...todos, newTodo
            ]);
          }
          setInputText({...inputText, todo:""});
        }
    }

    const submitNameHandler = e => {
      e.preventDefault();
      if(inputText.name !== undefined) {
        if((inputText.name).length > 0) {
          setName(inputText.name)
          setInputText({...inputText, name:""})
        }
      }
    }

    const statusHandler = e => {
      setStatus(e.target.value);
    }

    return(
    <div>
      <form className="name-form">
        <input value={inputText.name} onChange={nameInputHandler} type="text" className="name-input" placeholder="Input name"/>
        <button onClick={submitNameHandler} className="name-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <form>
        <input value={inputText.todo} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
    );
}

export default Form;

//can also use function Form(){}