import React from 'react';  
import Profile from "./components/Profile";  
import './App.css';  

const App: React.FC = () => {  
  return (  
    <div className="container">  
      <header className="header">  
        <h1>My Profile App</h1>  
      </header>  
      <Profile />  
    </div>  
  );  
};  

export default App;