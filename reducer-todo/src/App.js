import React, { useReducer } from 'react';
import './App.css';
import {baseReducer, reducerState} from "./reducers/reducer";

function App()
{
  const [baseState, baseCall] = useReducer(baseReducer, reducerState);
  
  return (
    <div className="App">
      {
        baseState.map((i)=>
          {
            return <div key={i.id}>{i.id} : {i.item}<br /></div>;
          })
      }

      <form onSubmit={(e)=>{e.preventDefault(); baseCall({type: "addItem",title: e.target.todoname.value}); e.target.todoname.value = "";}}>
        <input type="text" name="todoname" placeholder="todoname" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;