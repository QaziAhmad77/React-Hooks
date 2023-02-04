import React from "react";
import "./style.css";

const UseState = (props) => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);

  // const updateState =()=>{
  //   setMyNum(myNum)
  // }
  return (
    <>
      <div className="center_div">
        <p className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>{myNum}</p>
        <div className={`d-flex justify-content-center align-items-center`}>
          <div className="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div className="button2" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
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

export default UseState;
