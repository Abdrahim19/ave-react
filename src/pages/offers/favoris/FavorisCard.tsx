import './favoris__card.css'
import userImage from '../../../assets/userImage.png'
const FavorisCard = () => {
  return (
    <div className='box'>
        <div className='flex-items justify-content-center gap-3'>
        <i className="bi bi-star-fill fs-2rem"></i>
        <h3 className='offer-titel'>Mes offreurs favoris</h3>
        </div>
        <hr className='mb-4' />
        <div className='d-grid gap-3'>
        <div className='flex-items gap-3'>
            <img src={userImage} className='w-40' alt="" />
            <div>
                <div className='flex-items gap-2'>
                    <h4 className='user-name'>Gilberto B.</h4>
                    <button className='verySmall-button'>Particulier</button>
                </div>
                <p className='user-loction'>Vienne (Jean-Moulin) - 13,4 km</p>
            </div>
        </div>
        <div className='flex-items gap-3'>
            <img src={userImage} className='w-40' alt="" />
            <div>
                <div className='flex-items gap-2'>
                    <h4 className='user-name'>Gilberto B.</h4>
                    <button className='verySmall-button'>Particulier</button>
                </div>
                <p className='user-loction'>Vienne (Jean-Moulin) - 13,4 km</p>
            </div>
        </div>
        <div className='flex-items gap-3'>
            <img src={userImage} className='w-40' alt="" />
            <div>
                <div className='flex-items gap-2'>
                    <h4 className='user-name'>Gilberto B.</h4>
                    <button className='verySmall-button'>Particulier</button>
                </div>
                <p className='user-loction'>Vienne (Jean-Moulin) - 13,4 km</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FavorisCard