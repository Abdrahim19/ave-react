import { Link } from 'react-router-dom';
import logo  from '../../../assets/logo.png'
import PopupInfo from './PopupInfo';


import "./navbar.css";
const Navbar = () => {
    return (
      <header className="home-header">
        <div className="container-md flex-items justify-content-between py-1">
          <Link to="/" className='home-logo'>
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="d-md-flex menu-container flex justify-content-between">
            <li className="topmenu-link active">
              <a href="#" className="flex-items gap-2 active">
                <i className="bi bi-house"></i>
                Accueil
              </a>
            </li>
            <li className="topmenu-link">
              <a href="#" className="flex-items gap-2">
                <i className="bi bi-people-fill"></i>
              </a>
            </li>
            <li className="topmenu-link">
              <a href="#" className="flex-items gap-2">
                <i className="bi bi-plus-circle"></i>
              </a>
            </li>
            <li className="topmenu-link">
              <a href="#" className="flex-items gap-2">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
          </ul>
          <PopupInfo />
        </div>
      </header>
    );
  };
  
  export default Navbar;