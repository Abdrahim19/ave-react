import { Link } from 'react-router-dom';
import logo  from '../../../assets/logo.png'
import PopupInfo from './PopupInfo';
import Headerlinks from './Headerlinks';
import "./navbar.css";
import { AddPostContext } from '../../../context/AddPostSteeperContext';
import AddPostSteeper from '../../home/addPostSteeper/AddPostSteeper';


const Navbar = () => {
  const {showPostPopup} = AddPostContext()
    return (
      <>
  {showPostPopup ? <AddPostSteeper /> : false}
      <header className="home-header">
        <div className="container-md flex-items flex-wrap justify-content-between py-1">
          <Link to="/" className='home-logo'>
            <img src={logo} alt="Logo" />
          </Link>
          <Headerlinks />
          <PopupInfo />
        </div>
      </header>
      </>
    );
  };
  
  export default Navbar;