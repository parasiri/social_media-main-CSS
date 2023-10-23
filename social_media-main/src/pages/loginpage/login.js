import "./style.css";
import "./App.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import NavBar from "./Navbar";


export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    
  
    <div className="App">

      <NavBar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />

    </div>
  );
}
