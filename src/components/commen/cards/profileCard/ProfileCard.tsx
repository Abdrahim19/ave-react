import { Link } from 'react-router-dom'
import user_img from '../../../../assets/Image-40.png'
import './profile_card.css'
const ProfileCard = () => {
  return (
    <div className='ProfileCard p-3 text-center'>
      <div className='mb-2'>
      <img src={user_img} className='size-100px rounded-circle' alt="" />
      </div>
      <h3 className='user-name'>Fernando Gaucho</h3>
      <div className='flex-items justify-content-center gap-2 my-1'>
        <button className='small-blue-button'>Auto-Entreprise</button>
        <div className='flex-items gap-1'>
          <p className='rate-gray'>(4.3)</p>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <p className='contect-link'><Link to='/'> 
      <strong>Menage</strong></Link> •Givors (Canal)</p>
      <hr className='line' />
      <ul>
        <li className='d-lg-flex align-items-center flex-column flex-sm-row mb-2 mb-sm-0 justify-content-center justify-content-sm-between  gap-2'>
          <div className='d-flex align-items-center flex-column flex-sm-row user-deatiles gap-sm-3 flex-1'>
        <i className="bi bi-person"></i>
        <p className=''>Membre depuis</p>
          </div>
        <span><strong>Mar 2023</strong></span>
        </li>
        <li className='d-lg-flex align-items-center flex-column flex-sm-row mb-2 mb-sm-0 justify-content-center justify-content-sm-between  gap-2'>
          <div className='d-flex align-items-center flex-column flex-sm-row user-deatiles gap-sm-3 flex-1'>
          <i className="bi bi-geo-alt"></i>
        <p className=''>De</p>
          </div>
        <span><strong>Paris, France</strong></span>
        </li>
        <li className='d-lg-flex align-items-center flex-column flex-sm-row mb-2 mb-sm-0 justify-content-center justify-content-sm-between  gap-2'>
          <div className='d-flex align-items-center flex-column flex-sm-row user-deatiles gap-sm-3 flex-1'>
          <i className="bi bi-clock"></i>
        <p className=''>Moy. Temps de réponse</p>
          </div>
        <span><strong>2 heures</strong></span>
        </li>
      </ul>
    </div>
  )
}

export default ProfileCard

