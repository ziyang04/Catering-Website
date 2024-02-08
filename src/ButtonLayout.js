import REACT from 'react';
import './ButtonLayout.css';

const ButtonLayout = () => {
    return (
      <div className="button-layout">
        <button onClick = {() => 
        {alert ('happy');}} 
        >About</button>
        <button>Contact us</button>
        
      </div>
    );
  };

export default ButtonLayout;