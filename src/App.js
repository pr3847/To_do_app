import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {
  const[inputList,setinputList]=useState('');
  const[Items,setItems]=useState([]);
  const listofItems=()=>{
   if(inputList!=="" && Items.length<=9){
    setItems((oldItems)=>{
      return(
        [...oldItems,inputList]
      )
    })
   }
   if(Items.length>9){
    alert("You can enter 10 items only")
   }
   if(inputList===""){
    alert("input field required")
   }
    setinputList("");
  }
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }

  const inputEvent=(event)=>{
    setinputList(event.target.value);

  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={inputEvent}
            value={inputList} 
            
            
          />
          <button onClick={listofItems}>+</button>
          <ol>
          {Items.map((itemVal,i)=>{
            return(
              <ToDolist text={itemVal} key={i} id={i} onSelect={deleteItems}></ToDolist>
            )

          })}
            
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;