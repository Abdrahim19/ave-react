import './user__offer__card.css'
import bigwhitearrow from "../../../assets/bigwhitearrow.png";
import CarsoulUser from './CarsoulUser';
import { UserOfferCardTypes } from '../../../types/Types';
import { useRef } from 'react';




const UserOfferCard: React.FC<UserOfferCardTypes> = ({ title, description, users }) => {
  const listRef = useRef(null);
  const itemWidth = 150;
  const padding = 10;


  const handleNextClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += itemWidth + padding;
    }
  };
  return (
    <div className='UserOfferCard position-relative mt-5'>
      <h1 className='titel'>{title}</h1>
      <p className='discrption mt-2'>{description}</p>
      <div onClick={handleNextClick} className='w-25 h-75 bigwhite__arrow'>
          <img src={bigwhitearrow} alt="" />
        </div>
      <div ref={listRef}  className='carsoul-users no-scrollbar d-flex overflow-auto gap-3 w-100 mt-3'>
        {users.map((user, index) => (
          <CarsoulUser key={index} name={user.name} rating={user.rating} type={user.type} 
          online={user.online} link={user.link} workingImages={user.workingImages} id={user.id} />
        ))}
      </div>
    </div>
  )
}

export default UserOfferCard