import { useRef, useState } from 'react'
import user_img  from '../../../assets/request-imges/Image-40.png'
import { Link } from 'react-router-dom'
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const PopupInfo = () => {
    const [Isvisabel, setIsvisabel] = useState<boolean>(false);
    const ref = useRef(null);
    const handleClickOutside = () => {
        return Isvisabel ? setIsvisabel(false) :false
      };
    useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="flex-items position-relative" style={{ gap: '15px' }}>
    <div className="price-box">
      <span>180€</span>
    </div>
    <div ref={ref} className={`${Isvisabel  ? 'active animate__zoomIn' : 'animate__zoomOut'} 
    animate__animated  user-popup-info d-grid gap-3 p-3`}>
      <div className="flex-items justify-content-between gap-3">
        <Link to="/profile" className="underline-name text-decoration-underline">
        Morgan louis
        </Link>
        <div className="small-price-box px-2">
          <span>180€</span>
        </div>
      </div>
      <hr className="sparaiter" />
      <Link to='' className="d-flex align-items-center gap-3 link">
      <i className="bi bi-plus-circle"></i>
        Mes demandes
      </Link>

      <a href="#" className="d-flex align-items-center gap-3 link">
        <i className="bi bi-currency-euro"></i>
        Mon solde
      </a>
      <hr className="sparaiter" />
      <a href="#" className="d-flex align-items-center gap-3 link">
        <i className="bi bi-info-circle"></i>
        Centre d’aide
      </a>
      <a href="#" className="d-flex align-items-center gap-3 link">
        <i className="bi bi-info-circle"></i>
        À propos
      </a>
      <hr className="sparaiter" />
      <a href="#" className="d-flex align-items-center gap-3 link">
        <i className="bi bi-box-arrow-right"></i>
        Déconnexion
      </a>
    </div>
    <button id="profile-img">
      <img src={user_img} onClick={() => setIsvisabel(!Isvisabel)} className="header-user-img" alt="Profile" />
    </button>
  </div>
  )
}

export default PopupInfo