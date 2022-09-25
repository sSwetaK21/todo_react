import React, { useState } from "react";
import './App.css';

function App() {



// const [todo, setTodo] = useState()



  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List App</h1>

        <div className="todoBox">
          <form>
            <input type="text"></input>
            <button type="submit">Go</button>
          </form>

        <ul className="ulList">
          <li className="ullink">
            <span>Exercise</span>
            <button type="button" className="editBtn">Edit</button>
            <button type="button" className="delBtn">Delete</button>
          </li>
        </ul>

        </div>
    
      </div>
    </div>
  );
}

export default App;
