import { Link } from 'react-router-dom';
import logo  from '../../../assets/logo.png'
import PopupInfo from './PopupInfo';


import "./navbar.css";
import Headerlinks from './Headerlinks';
const Navbar = () => {
    return (
      <header className="home-header">
        <div className="container-md flex-items flex-wrap justify-content-between py-1">
          <Link to="/" className='home-logo'>
            <img src={logo} alt="Logo" />
          </Link>
          <Headerlinks />
          <PopupInfo />
        </div>
      </header>
    );
  };
  
  export default Navbar;