import { useState } from 'react';
import Nav from './components/Nav.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import RouterNav from './router/RouterNav.tsx';
import './App.css';

function App() {


  return (
    <div className="App">
      <div>
        <RouterNav/>
      </div>
      <Nav />
    </div>
  )
}

export default App
