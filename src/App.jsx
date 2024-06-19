// import { useState } from 'react'
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
// import Home from "./component/home/Home";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
        {/* <Route path="/"  element={<Home/>}/> */}
        <Route path="/"  element={<Login/>}/>
      </Routes></BrowserRouter>
     
      
    </>
  )
}

export default App
