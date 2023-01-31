import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const UseNavigat = (props) => {
  const { name } = useParams();
  const location = useLocation();
  const navigat = useNavigate();
  console.log(navigat);
  return (
    <>
      <h1 className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>I am {name}</h1>
      <h1 className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>My current location is {location.pathname}</h1>
      {location.pathname === `/useNavigate/Ahmad` ? <button onClick={() => navigat.goBack()}>Go back</button> : null}
    </>
  );
};

export default UseNavigat;
