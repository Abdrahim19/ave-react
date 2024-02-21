import { FC } from 'react';
import { Link } from 'react-router-dom';
import arrow__down from '../../../assets/Vector (1).png';
import user_img from '../../../assets/Image-40.png'

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
      <div>
        <div className="flex-items cursor-pointer rounded-corners_1rem justify-content-between py-3 bg-white px-4 my-2">
          <h3 className="fs-3">Informations</h3>
          <img src={arrow__down} alt="arrow down" />
        </div>
      </div>
      <div>
        <div className="flex-items cursor-pointer rounded-corners_1rem justify-content-between py-3 bg-white px-4 mb-2">
          <h3 className="fs-3">Images (14)</h3>
          <img src={arrow__down} alt="arrow down" />
        </div>
      </div>
      <div>
        <div className="flex-items cursor-pointer rounded-corners_1rem justify-content-between py-3 bg-white px-4 mb-2">
          <h3 className="fs-3">Fichiers (3)</h3>
          <img src={arrow__down} alt="arrow down" />
        </div>
      </div>
      <div>
        <div className="flex-items cursor-pointer rounded-corners_1rem justify-content-between py-3 bg-white px-4 mb-2">
          <h3 className="fs-3">Pinned Items</h3>
          <img src={arrow__down} alt="arrow down" />
        </div>
      </div>
        </>
  );
};

export default AdditionalInfo;
