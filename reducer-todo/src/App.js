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
            return <div>{i.id} : {i.item}<br /></div>;
          })
      }
    </div>
  );
}

export default App;
