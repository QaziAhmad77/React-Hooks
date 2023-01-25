import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = (props) => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 10;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>{state}</p>
        <div className={`d-flex justify-content-center align-items-center`}>
          <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
