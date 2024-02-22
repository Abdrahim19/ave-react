import Navbar from "../pages/dashbord/navbar/Navbar"
import favorite from '../assets/favorite 1.png'
import correct_icon from '../assets/correct 1.png'
import blue_correct_icon from '../assets/blue-corect-button.png'

import blue_starts from '../assets/Group 143.png'
import company_icon from '../assets/company 1.png'
import Titel from "../pages/abonnement/Titel"
import BottomText from "../pages/abonnement/BottomText"
import Abonnement_background from '../assets/Abonnement-background.png'


const AbonnementLayout = () => {
  return (
    <>
    <Navbar />
    <div className="Abonnement-background bg-gray-light d-flex justify-content-center position-relative py-4">
        <img src={Abonnement_background} alt="" 
        style={{marginTop:'-1.2rem'}}
        className="position-absolute top-0 z-1 d-none d-md-block left-0 w-100 h-100" />
      <div className="row gap-4 gap-md-0 container">
        <Titel />
        <div className="pricePackage-box-container position-relative z-2 col-lg-10 mx-auto">
            <div className="pricePackage-box bg-white px-4 py-3">
                <div className="d-grid justify-content-center">
                <p className="text-center package-type clr-green-light fw-semibold fs-px_16 ln-ht-20px sp-letter-05">Basic</p>
                <p className="text-center package-price fw-bold fs-px-33 ln-ht-40px position-relative mt-3 mb-1">99</p>
                <p className="text-center clr-gray-300 fw-medium fs-px_16 ln-ht-20px">par mois</p>
                </div>
                <div className="flex-items my-3 justify-content-center gap-3">
                    <img src={favorite} alt="" />
                </div>
                <div className="gap-2 d-grid ">
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Email support</p>
                    </div>
                </div>
            </div>
            <div className="pricePackage-box bg-white px-4 py-3">
                <div className="d-grid justify-content-center">
                <p className="text-center package-type clr-green-light fw-semibold fs-px_16 ln-ht-20px sp-letter-05">Avancé</p>
                <p className="text-center package-price fw-bold fs-px-33 ln-ht-40px position-relative mt-3 mb-1">149</p>
                <p className="text-center clr-gray-300 fw-medium fs-px_16 ln-ht-20px">par mois</p>
                </div>
                <div className="flex-items my-3 justify-content-center gap-3">
                    <img src={favorite} alt="" />
                    <img src={favorite} alt="" />
                </div>
                <div className="gap-2 d-grid ">
            
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Email support</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                </div>
            </div>
            <div className="pricePackage-box Premium d-grid bg-white">
                <div className="blue-box bg-main-blue text-white text-center mb-2 ">
                    <p>Le plus choisis</p>
                </div>
                <div className="d-grid px-4 justify-content-center">
                <p className="text-center package-type fw-semibold fs-px_16 ln-ht-20px sp-letter-05 clr-main-blue">Premium</p>
                <p className="text-center package-price fw-bold fs-px-33 ln-ht-40px position-relative mt-3 mb-1">149</p>
                <p className="text-center clr-gray-300 fw-medium fs-px_16 ln-ht-20px">par mois</p>
                </div>
                <div className="flex-items px-4 my-3 justify-content-center gap-3">
                    <img src={blue_starts} alt="" />
                </div>
                <div className="gap-2 px-4 d-grid ">
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Email support</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Email support</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Tout les droits </p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={blue_correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Tout les droits </p>
                    </div>
                </div>
                <button className="main_blue_button col-8 mx-auto mt-5 mb-3">CHOISIR</button>
            </div>
            <div className="pricePackage-box bg-white px-4 py-3">
                <div className="d-grid justify-content-center">
                <p className="text-center package-type clr-green-light fw-semibold fs-px_16 ln-ht-20px sp-letter-05">Basic</p>
                <p className="text-center package-price fw-bold fs-px-33 ln-ht-40px position-relative mt-3 mb-1">99</p>
                <p className="text-center clr-gray-300 fw-medium fs-px_16 ln-ht-20px">par mois</p>
                </div>
                <div className="flex-items my-3 justify-content-center gap-3">
                    <img src={company_icon} alt="" />
                </div>
                <div className="gap-2 d-grid ">
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Access to dashboard</p>
                    </div>
                    <div className="flex-items gap-2 cursor-pointer">
                       <img src={correct_icon} alt="" className="img-fluid" />
                        <p className="fw-normal fs-px_14 ln-ht-20px">Email support</p>
                    </div>
                </div>
            </div>
        </div>
        <BottomText />
      </div>
  </div>
    </>
  )
}

export default AbonnementLayout