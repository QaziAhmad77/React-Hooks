import React from "react";
import { useLocation } from "react-router-dom";

const UseLocation = (props) => {
  const location = useLocation();
  return (
    <>
      <h1 className={`text-${props.mode === "black" ? "black" : "white"} text-center display-4 mt-3`}>Current path is: {location.pathname}</h1>
    </>
  );
};

export default UseLocation;
