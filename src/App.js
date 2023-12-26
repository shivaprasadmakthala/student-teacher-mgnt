import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import NotFound from "./components/pages/NotFound";
import AddUser from './components/users/AddUser';
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";


function App() {
  const [targetValue, setTarget] = useState();

  const handleTarget = (e) => {
    setTarget(e.target.id);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleTarget={handleTarget} />
        <Routes>
          <Route path="/" element={<Home handleTarget={handleTarget} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/users/:id"
            element={<User targetValue={targetValue} />}
          />
          <Route
            path="/users/add"
            element={<AddUser targetValue={targetValue} />}
          />
          <Route
            path="users/edit/:id"
            element={<EditUser targetValue={targetValue} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
