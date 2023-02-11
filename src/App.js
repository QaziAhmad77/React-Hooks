import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseState from "./component/Hooks/useState";
import UseEffect from "./component/Hooks/useEffect";
import UseReducer from "./component/Hooks/useReducer";
import UseParams from "./component/Hooks/useParams";
import UseLocation from "./component/Hooks/useLocation";
import UseNavigate from "./component/Hooks/useNavigate";
import Navbar from "./component/Navbar";
import UseRef from "./component/Hooks/useRef";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = (cls) => {
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/useState" element={<UseState mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useEffect" element={<UseEffect mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useReducer" element={<UseReducer mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useParams/:name" element={<UseParams mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useLocation" element={<UseLocation mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useNavigate" element={<UseNavigate mode={mode} toggleMode={toggleMode} />} />
          <Route path="/useRef" element={<UseRef mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
