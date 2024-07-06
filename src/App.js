import './App.css';
import ButtonLayout from './ButtonLayout';
import SearchIcon from './search.svg';
import React from 'react';
import { BrowserRouter, Link, useNavigate} from 'react-router-dom';
import { useEffect,useState} from 'react';
/*function App() {
  return (
    <div className="App">S
      <h1>hello</h1>
    </div>
  );
}
*/


function App() {
  const navigate = useNavigate();
  const navigateToA = () => {
    navigate("/menuA")
  }
  const [inputValue, setInputValue] = useState('');
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Return' || event.keyCode === 13) {
      // Redirect to the page corresponding to the input value
      console.log(inputValue);
      navigate(`/menu${inputValue.toUpperCase()}`);
    }
  };
  
  return (
    <div>
    < ButtonLayout />
    <div className = 'app'>
      
      <h1>Catering Services</h1>
      
      <div className = "search">
        <input 
          placeholder="Enter Menu Letter"
          value = {inputValue}
          onChange = {handleInput}
          onKeyDown = {handleKeyDown}
        />
        <img
          src = {SearchIcon}
          alt = "search"
          onClick = {() => {
            if (inputValue === "A" || inputValue === "a") {
                navigateToA()
            }
            
          }}
        />
      </div>
      <div className = 'container'>

        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu A" className="image"/>
          <p className = "image-description">
            Menu A
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM19.40 per person</h2>
      </div>
      <div className = 'container'>
        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu B" className="image"/>
          <p className = "image-description">
            Menu B
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM24.90 per person</h2>
      </div>
      <div className = 'container'>
          
        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu C" className="image"/>
          <p className = "image-description">
            Menu C
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM28.60 per person</h2>
      </div>
      <div className = 'container'>
          
        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu D" className="image"/>
          <p className = "image-description">
            Menu D
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM31.90 per person</h2>
      </div>
      <div className = 'container'>
          
        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu E" className="image"/>
          <p className = "image-description">
            Menu E
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM34.90 per person</h2>
      </div>
      
    </div>

    </div>
  );
}


export default App;

