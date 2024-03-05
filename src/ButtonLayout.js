import About from './About'; // Import the About component
import "./ButtonLayout.css"
import { Route, Routes ,Router, useNavigate } from 'react-router-dom';

const ButtonLayout = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about")
  }
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/about" element={< About /> } />
        </Routes>
        <div className="button-layout">
          <button onClick={() => {navigateToAbout()}}>About</button>
          <button>Contact us</button>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default ButtonLayout;