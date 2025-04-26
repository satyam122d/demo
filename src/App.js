import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import C from './components/C';

function App() {
  let component;
  
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/contact':
      component = <Contact />;
      break;
    case '/content':
      component = <C />;
      break;
    default:
      component = <Home />; // default fallback
      break;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {component}
      </div>
    </>
  );
}

export default App;
