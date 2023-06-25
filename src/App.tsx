import { useState, useEffect } from 'react';
import Nav from './components/Nav.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import RouterNav from './router/RouterNav.tsx';
import './App.css';

function App() {
  const [homeactive, setHomeActive] = useState<boolean>(false);
  const [contactactive, setContactActive] = useState<boolean>(false);
  const [contentactive, setContentActive] = useState<boolean>(false);


  const handlehomeactive =()=> {
      setContactActive(false);
      setHomeActive(true);
      setContentActive(false);
  }

  const handlecontactactive =()=> {
      setContactActive(true);
      setHomeActive(false);
      setContentActive(false);
  
  }

  const handlecontentactive =()=> {
      setContactActive(false);
      setHomeActive(false);
      setContentActive(true);
  
  }

  useEffect(()=>{
    if (contactactive == true) {
      setHomeActive(false);
      setContactActive(true);
      setContentActive(false);
    }
    if (homeactive == true) {
      setHomeActive(true);
      setContactActive(false);
      setContentActive(false);
    }
    if (contentactive == true) {
      setHomeActive(false);
      setContactActive(false);
      setContentActive(true);
    }
    
  }, [contactactive, homeactive, contentactive])



  return (
    <div className="App">
   {/* <video   
        id="v2" 
        autoPlay 
        loop
        muted 
        src="dude.mp4" 
        type="video/mp4">
      </video>*/}
        <Nav 
          homeactive={homeactive} 
          handlehomeactive={handlehomeactive} 
          contactactive={contactactive}
          handlecontactactive={handlecontactactive}
          contentactive={contentactive}
          handlecontentactive={handlecontentactive}/>
        <RouterNav 
          homeactive={homeactive} 
          handlehomeactive={handlehomeactive} 
          contactactive={contactactive}
          handlecontactactive={handlecontactactive}
          contentactive={contentactive}
          handlecontentactive={handlecontentactive}/>
          {/*<h1 className="contactcalltoaction">Call Now! 4698918404</h1>*/}
    </div>
  )
}

export default App
