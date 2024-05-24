
import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Error from './components/Error';
import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,RouterProvider } from 'react-router-dom';

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(messege,type)=>{
    setAlert({
      messege:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleHandler=()=>{
   if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#121a38';
      showAlert("Dark mode enabled","success");
      document.title='TextUtils - Dark';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      document.title='TextUtils - Home';
    }
  };
  return (
    
    <>
      <Navbar title="Textutils" aboutText="About us" mode={mode} toggleHandler={toggleHandler}/>
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Textform heading="Enter the text here." mode={mode} showAlert={showAlert}/>}/>
          <Route path='/about' element={<About showAlert={showAlert}/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
