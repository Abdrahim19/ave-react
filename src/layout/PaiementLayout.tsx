import Navbar from "../pages/dashbord/navbar/Navbar"
import payment_icon from "../assets/payment_icon.svg";
import master_card from '../assets/paymentway_icons/masterCard-image.png'
import payoneer from '../assets/paymentway_icons/payoneer.png'
import paypalimg from '../assets/paymentway_icons/paypalimg.png'
import visa_image from '../assets/paymentway_icons/visa-image.png'
import master_Card from "../assets/masterCard__img.png";
import masterCardBox from "../assets/masterCard-box.png";
import small__logo from "../assets/icon.png";

import '../pages/paiement/paiement.css'
import AddCartPayment from "../components/commen/ui/AddCartPayment";
import CardDetails from "../components/commen/ui/CartDeatiles";
import PaymentWayBox from "../pages/paiement/paymentWayBox/PaymentWayBox";

const PaiementLayout = () => {
  const cardDetails = {
    cardNumber: '8050 5040 2030 XXXX',
    cardHolderName: 'HAMZA',
    expiryDate: '03/25',
    cvv: '233',
  };
  return (
          <>
        <Navbar />
        <div className="main-page position-relative flex-items justify-content-center py-4">
          <img src={payment_icon} alt="" className="payment__icon position-absolute top-0 right-0"  />
          <div className="container-lg align-items-center row gap-lg-0 gap-4">
            <div className="col-lg-7">
          <h1 className="ln-ht-50px fs-px-40 fw-bold mb-5">Méthode de paiement</h1>
          <div className="flex-items flex-wrap justify-content-center gap-4">
            <PaymentWayBox paymentImageSrc={master_card} />
            <PaymentWayBox paymentImageSrc={payoneer} />
            <PaymentWayBox paymentImageSrc={paypalimg} />
            <PaymentWayBox paymentImageSrc={visa_image} />
          </div>
          <h2 className="my-5 fs-px-24 ln-ht-30px">Choisissez votre carte</h2>
          <div>
            <div className="flex-items flex-column-reverse flex-md-row justify-content-center gap-5">
              <div>
              <img src={master_Card} alt="" />
              </div>
              <div>
              <img src={master_Card} alt="" />
              </div>
          <AddCartPayment />
            </div>
            <div className="col-lg-8 clr-gray-300">
            <CardDetails {...cardDetails} />
            </div>
          </div>
            </div>
            <div className="col-lg-5 position-relative z-2">
               <div className="w-100 rounded-4 position-relative m-auto py-4" 
               style={{backgroundColor:'#E3E9EE' , maxWidth:'371px'}}>
                <div className="text-center master_card__img">
                <img src={masterCardBox} alt="" className=""/>
                </div>
                <ul className="d-grid gap-2 mt-5 px-4">
                  <li className="flex-items gap-2 flex-wrap justify-content-center justify-content-sm-between">
                    <p className="fs-px_14 fw-medium ln-ht-17px clr-gray-300 ">Prestataire de service</p>
                    <h2 className="fs-px_16 fw-bold ln-ht-17px">Aya HAMZA</h2>
                  </li>
                  <li className="flex-items gap-2 flex-wrap justify-content-center justify-content-sm-between">
                    <p className="fs-px_14 fw-medium ln-ht-17px clr-gray-300 ">
Type de service
                    </p>
                    <h2 className="fs-px_16 fw-bold ln-ht-17px">
Plan de maison

                    </h2>
                  </li>
                  <li className="flex-items gap-2 flex-wrap justify-content-center justify-content-sm-between">
                    <p className="fs-px_14 fw-medium ln-ht-17px clr-gray-300 ">
infos 2
                    </p>
                    <h2 className="fs-px_16 fw-bold ln-ht-17px">
description 128
                    </h2>
                  </li>
                  <li className="flex-items gap-2 flex-wrap justify-content-center justify-content-sm-between">
                    <p className="fs-px_14 fw-medium ln-ht-17px clr-gray-300 ">Prestataire de service</p>
                    <h2 className="fs-px_16 fw-bold ln-ht-17px">Aya HAMZA</h2>
                  </li>
                </ul>
                <div className="position-relative overflow-hidden z-2 d-grid place-items-center" 
                style={{height:'7rem' , backgroundColor:'#E3E9EE'}}>
                  <div className="circal-white pos-left z-1">
                  </div>
                  <hr className="dotted-hr w-75 mx-auto" />
                  <div className="circal-white pos-right z-1">
                  </div>
                </div>
                <div className="flex-items px-4 justify-content-between">
                  <div className="px-4">
                    <h5 className="clr-gray-300 fs-px-22 ln-ht-27px fw-bold mb-2">Total à payer</h5>
                    <p className="fs-px-33 ln-ht-40px fw-bold">2230.50 {" "} <span className="fs-px_20 fw-medium">€</span></p>
                  </div>
                  <img src={small__logo} alt="" />
                </div>
               </div>
            </div>
          </div>
      </div>
        </>
  )
}

export default PaiementLayout
