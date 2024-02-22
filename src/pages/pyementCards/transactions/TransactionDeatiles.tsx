import { Link } from 'react-router-dom'
import arrow_down from "../../../assets/Vector (1).png";
import  money_hand from "../../../assets/money-hand.png";
import card_hand from "../../../assets/card-hand.png";

const TransactionDeatiles = () => {
  return (
    <>
    <div className='flex-items justify-content-between gap-2 mb-5'>
        <h3 className='fw-bold fs-px-22 ln-ht-27px'>Dernières transactions</h3>
        <Link to='' className='clr-gray-300 fw-normal fs-px_14 ln-ht-17px'>
        Voir Tout
        </Link>
    </div>
    <div className='flex-items w-50 justify-content-between'>
        <button className='fw-medium active fs-px_18 ln-ht-20px clr-green-light line-green'>Tout</button>
        <button className='fw-medium fs-px_18 ln-ht-20px clr-green-light line-green'>Revenu</button>
        <button className='fw-medium fs-px_18 ln-ht-20px clr-green-light line-green'>Dépenses</button>
    </div>
    <hr />
    <button className='flex-items pt-3 clr-blue-gray gap-2 my-3 fw-medium fs-px_16 ln-ht-20px'>
    Aujourd’hui
    <img src={arrow_down}  alt="" />
    </button>
    <div className='payment__box d-grid bg-white'>
      <div className='flex-items flex-column justify-content-center flex-sm-row gap-3'>
        <img src={money_hand} alt="" />
        <div className='flex-1'>
          <h3 className='fs-px_16 ln-ht-20px fw-medium mb-1 text-center text-md-start'>Paiement</h3>
          <p className='fs-px_14 fw-bold ln-ht-17px clr-gray-300 text-center text-md-start'>Service de chez {" "}
            <Link to={''} className='text-decoration-underline'>Fernando Gaucho</Link></p>
        </div>
        <div className='text-center'>
          <h3 className='fw-bold ln-ht-27px fs-px_20 mb-1' style={{color:'#EC6060'}}>150€</h3>
          <p className='fw-medium clr-gray-300 fs-px_14 ln-ht-17px'>17 Oct</p>
        </div>
      </div>
      <hr className='sparaiter' />
      <div className='flex-items gap-3 flex-column justify-content-center flex-sm-row gap-3'>
        <img src={card_hand} alt="" />
        <div className='flex-1'>
          <h3 className='fs-px_16 ln-ht-20px fw-medium text-center text-md-start mb-1'>Reception</h3>
          <p className='fs-px_14 fw-bold ln-ht-17px clr-gray-300 text-center text-md-start'>Paiement reçu de la part de
            {" "}
            <Link to={''} className='text-decoration-underline'>Fernando Gaucho</Link></p>
        </div>
        <div className='text-center'>
          <h3 className='fw-bold ln-ht-27px fs-px_20 clr-green-light'>230€</h3>
          <p className='fw-medium clr-gray-300 fs-px_14 ln-ht-17px'>17 Oct</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default TransactionDeatiles


