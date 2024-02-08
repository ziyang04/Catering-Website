import './App.css';
import SearchIcon from './search.svg';
import React from 'react';
import { Link } from 'react-router-dom';

/*function App() {
  return (
    <div className="App">S
      <h1>hello</h1>
    </div>
  );
}
*/


function App() {
  // const navigate = useNavigate();

  const enteredName = () => {
    prompt('Please enter your name')
  };
  return (
    
    <div className = 'app'>
      
      <h1>Catering Services</h1>
      
      
      <div className = "search">
        <input 
          placeholder="Search for Menu Sets"
        />
        <img
          src = {SearchIcon}
          alt = "search"
          onClick = {() => {
            enteredName()
            
          }}
        />
      </div>
      <div className = 'container'>

        <div className = 'image-container'>
          <Link to = "/menuA">
          <img src = "https://redhousespice.com/wp-content/uploads/2017/01/chinese-sweet-sour-fish.jpg" alt="Menu A" className="image"/>
          <p className = "image-description">
            Menu 1
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
            Menu 2
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
            Menu 3
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
            Menu 4
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
            Menu 5
          </p>
          </Link>
        </div>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;RM34.90 per person</h2>
      </div>
      
      
      
      
      
      
    </div>
  );
}


export default App;

