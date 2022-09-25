import React, { useState } from "react";
import './App.css';
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function App() {


  const [inputData, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true)

  const addItem = () => {
    if (!inputData) {
      alert("Please enter todo")

    } else {
      setItems([...items, inputData]);
      setInput('')
    }
  
  }

  const deleteItem=(id)=>{
    const updateItems = items.filter(
      (ele, ind)=>{
        return ind !== id;
      }
    )
    setItems(updateItems)
  }

  const editBtn=()=>{

  }

  const removeAll=()=>{
    setItems([])
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List App
        </h1>

        <div className="todoBox">
        <div className="formDiv">

            <input type="text" value={inputData} onChange={(e) =>
               setInput(e.target.value)}></input>
            <button type="submit" className="search" onClick={addItem}>        <FaCheck />
            </button>
            </div>


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
                        <button type="button" className="delBtn" onClick={
                          ()=>{
                            deleteItem(index)
                          }
                        }>
                          <FaTrashAlt />
                        </button>
                      </div>


                    </div>
                  )
                }
              )
            }
          </div>

            <div className="check">
              <button className="checktitle" onClick={removeAll}>Remove all</button>
            </div>

        </div>

      </div>
    </div>
  );
}

export default App;
