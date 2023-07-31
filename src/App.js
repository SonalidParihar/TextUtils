import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark morde";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light morde";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" mode="mode" Home="Home " aboutText="About" />
       */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode === "light" ? "grey" : "dark"}
        />
        {/*   <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            exact={true}
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode === "light" ? "grey" : "dark"}
              />
            }
          ></Route> 
        </Routes>*/}
      </div>
    </>
  );
}

export default App;
