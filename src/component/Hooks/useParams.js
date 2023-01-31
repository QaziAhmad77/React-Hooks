import React from "react";
import { useLocation, useParams } from "react-router-dom";

const UseParams = (props) => {
  const { name } = useParams();
  const location = useLocation();
  return (
    <>
      <h1 className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>I am {name}</h1>
      <h1 className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>My current location is {location.pathname}</h1>
      {location.pathname === `/useParams/Ahmad` ? <button onClick={() => alert(`You are awesome`)}>Click Me</button> : null}
    </>
  );
};

export default UseParams;
