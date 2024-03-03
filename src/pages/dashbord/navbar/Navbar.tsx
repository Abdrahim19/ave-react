import { Link } from 'react-router-dom';
import logo  from '../../../assets/logo.png'
import PopupInfo from './PopupInfo';
import Headerlinks from './Headerlinks';
import "./navbar.css";
import { AddPostContext } from '../../../context/AddPostSteeperContext';
import AddPostSteeper from '../../home/addPostSteeper/AddPostSteeper';
import Notifications from '../../../components/commen/ui/NotificationsCart/Notifications';
import { useState } from 'react';


const Navbar = () => {
  const {showPostPopup} = AddPostContext()
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
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
      <div onClick={toggleOpen} className='p-3 position-relative animate__animated animate__swing animate__repeat-3 
      scale__hover bg-green-light text-white fs-px-22 ln-ht-17px rounded-circle position-fixed'
      style={{bottom:"1rem" , right:"2rem"}}>
      <i className="bi bi-bell"></i>
      {true && 
      <div style={{width:'20px', aspectRatio:1}} className='bg-danger cenetr-grid rounded-circle
       position-absolute top-0 right-0 text-white'>
      <span className='fw-medium fs-px_16 lh-base'>1</span>
      </div>}
      </div>
      {isOpen ? (
        <>
        <div onClick={toggleOpen} className="bg-shadow active">
      </div>
        <Notifications />
        </>
      ) : (
        false 
      )}
      </>
    );
  };
  
  export default Navbar;