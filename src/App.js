import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkModeToggle from "react-dark-mode-toggle";


function App() {


  const [images,setimages]=useState([]);
  return (
   <>
   <Navbar/>
   <Header/>  
   </>
  );
}

export default App;
