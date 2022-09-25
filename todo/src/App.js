import React, { useState } from "react";
import './App.css';
import { FcSearch } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function App() {



  // const [todo, setTodo] = useState()



  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List App
        </h1>

        <div className="todoBox">
          <form>
            <input type="text"></input>
            <button type="submit" className="search">        <FcSearch  />
            </button>
          </form>

          <ul className="ulList">
            <li className="ullink">
              <span>Exercise</span>
              <button type="button" className="editBtn">
                <FaEdit />
              </button>
              <button type="button" className="delBtn">
                <FaTrashAlt/>
              </button>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default App;
