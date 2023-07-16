import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {Routes, Route,} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background ="#042743";
      showAlert('blue mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.background ="white";
      showAlert('Light mode has been enabled', 'success')
    }
  }
  
 
  return (
    <>
    {/* <Navbar title='textUtils' aboutText='About Us'/> */}
    {/* <Navbar/> */}
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Routes> */}
        {/* <Route exact path='/' element={ } />  */}
        <TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode} showAlert={showAlert}/>
        {/* <Route exact path='/about' element={  } /> */}
        {/* <About mode={mode}/> */}
      {/* </Routes> */}
      
      
    </>
  );
}

export default App;
