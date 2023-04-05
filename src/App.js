import "./App.css";
import Navbar from "./DayTen/Navbar";

import Home from "./DayTen/Home";
import Destination from "./DayTen/Destination";
import About from "./DayTen/About";
import Contact from "./DayTen/Contact";
import Submit from "./DayTen/Submit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./DayTen/Register";

function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar />
      <Routes>
       
        
          <Route path="/" exact element={<Home/>} />
          <Route path="/destination" exact element={<Destination/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/registration" exact element={<Register/>} />
          <Route path="/submittedform" exact element={<Submit/>} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
