import { FC } from 'react';
import { Link } from 'react-router-dom';
import user_img from '../../../assets/Image-40.png'
import FichesCart from '../cartsChat/FichesCart';
import ImgestCart from '../cartsChat/ImgestCart';
import InformationsCart from '../cartsChat/InformationsCart';
import PinnedItemsCart from '../cartsChat/PinnedItemsCart';

interface AdditionalInfoProps {
  userName: string;
  userImage: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ userName, userImage }) => {
  return (
        <>
      <div className='offerUser-Card bg-white rounded-3 p-3 text-center'>
        <div className='mb-2'>
          <img src={userImage || user_img} className='user-img' style={{ width: '101px', aspectRatio: '1' }} alt={userName} />
        </div>
        <h3 className='user-name'>{userName}</h3>
        <div className='flex-items justify-content-center gap-2 my-1'>
          <button className='small-blue-button'>Auto-Entreprise</button>
          <div className='flex-items gap-1'>
            <p className='rate-gray'>(4.3)</p>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <p className='contect-link'>
          <Link to='/'>
            <strong>Menage</strong>
          </Link> •Givors (Canal)
        </p>
      </div>
      <div className='d-grid mt-3' style={{gap:'2rem'}}>
      <InformationsCart />
      <ImgestCart />
      <FichesCart />
      <PinnedItemsCart />
      </div>
        </>
  );
};

export default AdditionalInfo;
