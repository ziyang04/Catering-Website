import { Route , Routes, BrowserRouter } from 'react-router-dom';
import App from "./App.js";
import MenuA from "./MenuA.tsx";
import React from 'react'

function Main(){
    return (
        <BrowserRouter>
            
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/menuA" element={<MenuA/>}/>
            </Routes>
            
        </BrowserRouter>
            
    )

}
export default Main;