import "./popu_client_type.css";
import './popu_client_type.css'
import { useYourContext } from "../../../../context/MultiStepForm";

const PopupClientType = () => {
  const { handleNext , handleButtonClick , userType , step } = useYourContext();

  return (
    <>
    <section
    className={`cliienttype-popup py-3 overflow-y-auto row gap-4 bg-white animate__animated
    ${step === 2 ? 'animate__bounceInDown' : 'animate__bounceOutDown'}
    `}>
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