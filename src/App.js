import React from "react";
import {useSelector, useDispatch} from "react-redux";
import increment from "./actions/increment";
import decrement from "./actions/decrement";

function App() {
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
          <h2>Ome {counter}</h2>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    );
}

export default App;
