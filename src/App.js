import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
        setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
      document.title = 'Text Utils | Dark Mode'
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success"); 
      document.title = 'Text Utils | Light Mode'    
    }
  }

  return (
    <Router>
    <Navbar title="Abdul Moid Khan" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path="/About" element = {<About mode={mode} />} />
        <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text below to analyse" mode={mode} />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
