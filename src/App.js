import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Dark, setDark] = useState("light");
  const togglemode = () => {
    if (Dark === "dark") {
      setDark("light");
      document.body.style.backgroundColor = "white";
    } else {
      setDark("dark");
      document.body.style.backgroundColor = "#00182f";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Textyle" mode={Dark} toggle={togglemode} about="About" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter your text" mode={Dark} />
            </Route>
            <Route exact path="/about">
              <About mode={Dark}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
