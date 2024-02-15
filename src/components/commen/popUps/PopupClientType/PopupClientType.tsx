import "./popu_client_type.css";
import small_logo from "../../../../assets/small-logo.png"
import './popu_client_type.css'
import { useYourContext } from "../../../../context/MultiStepForm";
import Stepper from "../../ui/Stepper";

const PopupClientType = () => {
  const { handleNext , toggleshowPopup ,handleButtonClick , userType  } = useYourContext();

  return (
    <>
    <section
    className={`cliienttype-popup py-3 overflow-y-auto row gap-4 bg-white`}>
      <div className="text-end">
        <button id="close" onClick={toggleshowPopup}>
          <i className="bi bi-x-lg" style={{ fontSize: "min(40px, 20px)" }}></i>
        </button>
      </div>
      <div className="text-center">
        <img src={small_logo} className="box-img" alt="" />
        <p className="section-titel">S’inscrire</p>
      </div>
      <Stepper stepNumber={0} />
      <div className="col-sm-8 col-lg-6 mx-auto d-grid gap-2 gap-lg-3 gap-xl-4 text-center">
        <h3 className="subtitel-popup my-4">quel est le type de vos services?</h3>
        <button className={`${userType === 'Particulier' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Particulier')}>Particulier</button>
        <div className="flex-items gap-4">
          <hr className="line-ou" />
          <p className="ou-text">Ou</p>
          <hr className="line-ou" />
        </div>
        <button className={`${userType === 'Indépendant' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Indépendant')}>Indépendant</button>
        <button className={`${userType === 'Entreprise' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Entreprise')}>Entreprise</button>
        <div className="flex-items gap-4">
          <hr className="line-ou" />
          <p className="ou-text">Ou</p>
          <hr className="line-ou" />
        </div>
        <button className={`${userType === 'Association' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Association')}>Association</button>
        <button onClick={handleNext} type="submit" className="btn-primary w-100">M’inscrire</button>
      </div>
    </section>
    </>
  );
};

export default PopupClientType;