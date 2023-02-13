// It create a mutable variable which will not re-render the component
// used to access a DOM element directly
import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState();
  const count = useRef(0);
  const inputElem = useRef("");
  const changeStyle = () => {
    inputElem.current.style.backgroundColor = "red";
    inputElem.current.focus();
  };
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input ref={inputElem} type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
      <button onClick={changeStyle}>Submit</button>
      <p>The number of times render: {count.current}</p>
    </>
  );
};

export default UseRef;
