import React, { useState } from "react";
import './App.css';
import { FcSearch } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function App() {



  const [inputData, setInput] = useState('');
  const [items, setItems] = useState([])

  const addItem = () => {
    if (!inputData) {

    } else {
      setItems([...items, inputData]);
      setInput("")
    }
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List App
        </h1>

        <div className="todoBox">
          <form>
            <input type="text" value={inputData} onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit" className="search" onClick={addItem}>        <FcSearch />
            </button>
          </form>

          <div className="showItem">
            {
              items.map(
                (element, index) => {
                  return (

                    <div className="addEl" key={index}>
                      <h3>{element}</h3>
                      <div className="btns">


                        <button type="button" className="editBtn">
                          <FaEdit />
                        </button>
                        <button type="button" className="delBtn">
                          <FaTrashAlt />
                        </button>
                      </div>


                    </div>
                  )
                }
              )
            }
          </div>



        </div>

      </div>
    </div>
  );
}

export default App;
