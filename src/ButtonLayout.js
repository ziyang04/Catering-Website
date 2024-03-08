import "./ButtonLayout.css"
import { Route, Routes ,Router, useNavigate } from 'react-router-dom';

const ButtonLayout = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about")
  }
  const navigateToContact = () => {
    navigate("/contact")
  }
  const navigateToApp = () => {
    navigate("/")
  }

  
  return (
    <div>
      <div>
        <div className="button-layout">
          <button onClick= {() => {navigateToApp()}}>Main</button>
          <button onClick={() => {navigateToAbout()}}>About</button>
          <button onClick={() => {navigateToContact()}}>Contact us</button>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default ButtonLayout;