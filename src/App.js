import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import Login from './LoginScreen';



function App() {
  
  const [splashFinished, setSplashFinished] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashFinished(true);
    }, 5000); // Change the time to the desired duration in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
   
    <div className="App">
      {!splashFinished && <Splash />}
      {splashFinished && (
        <div>
          <main>
           <Login/>
           
         </main>
          
        </div>
      )}
    </div>
 
    
  );
}

export default App;
