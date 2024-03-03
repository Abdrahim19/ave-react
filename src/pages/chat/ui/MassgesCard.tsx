import { Link } from "react-router-dom"

type MassgesCardType = {
  id: number;
  userImg: string;
  userName: string;
  userType: string;
  rating: string;
};
const MassgesCard: React.FC<MassgesCardType> = (User) => {      
  return (
    <div key={User.id} className='offerUser-Card bg-white rounded-3 p-3 text-center'>
        <div className='mb-2'>
          <img src={User.userImg} className='user-img' 
          style={{ width: '101px', aspectRatio: '1' }} alt={User.userName} />
        </div>
        <h3 className='user-name'>{User.userName}</h3>
        <div className='flex-items justify-content-center gap-2 my-1'>
          <button className='small-blue-button'>Auto-{User.userType}</button>
          <div className='flex-items gap-1'>
            <p className='rate-gray'>({User.rating})</p>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <p className='contect-link'>
          <Link to='/'>
            <strong>Menage</strong>
          </Link> •Givors (Canal)
        </p>
      </div>
  )
}

export default MassgesCard