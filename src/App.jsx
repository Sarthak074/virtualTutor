// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Mainmenu from "./mainmenu";

function App() {
  return (
    <div className="w-full h-screen bg-teal-300">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainmenu" element={<Mainmenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
