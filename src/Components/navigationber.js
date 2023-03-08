import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function ColorSchemesExample() {
  return (
    <div className='navi'>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
        <header className="box-shadow">
          <div className="section logo">
            <span className="white">THE</span><span className="green">RestuarantLocator</span>
          </div>
          <div className="section">
            <ul>
              <li className='me'><Link to="/findrestuarant">Home</Link></li>
              <li className='too'><Link to="/usercomponent">Add restuarant</Link></li>
              <li className='to'><Link to="/newcom">Find Restuarant</Link></li>
              <li><Link to="/details">About Page</Link></li>
            </ul>
          </div>
        </header>
      </div>
   
    
  );
}

export default ColorSchemesExample;