
import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Dashboard.css'



const Dashboard = () => {
  const navigate = useNavigate();

  
  const handleClick = (buttonName) => {
    console.log(`You clicked the ${buttonName} button.`);
    if(buttonName === "Button 4"){
      navigate('/calculator');
    }
    if(buttonName === "Button 1"){
      navigate('/notification');
    }
    if(buttonName === "Button 2"){
      navigate('/uploadPhoto');
    }
    if(buttonName === "Button 3"){
      navigate('/text');
    }
    
   };

  

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <div>
      <button onClick={() => handleClick("Button 1")}>Notification Screen</button>
      </div>
      <div>
      <button onClick={() => handleClick("Button 2")}>Photo Screen</button>
      </div>
      <div>
      <button onClick={() => handleClick("Button 3")}>Text Screen</button>
      </div>
      <div>
      <button onClick={() => handleClick("Button 4")}>Mini Calculator Screen</button>
      </div>
    </div>
  );
};

export default Dashboard;

