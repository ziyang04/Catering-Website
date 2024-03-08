import { Route , Routes, BrowserRouter } from 'react-router-dom';
import App from "./App.js";
import MenuA from "./MenuA.tsx";
import React from 'react'
import About from './About.js';
import Contact from './Contact.js';
function Main(){
    return (
        <BrowserRouter>
            
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/menuA" element={<MenuA/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
            
        </BrowserRouter>
            
    )

}
export default Main;