import "./popu_client_type.css";
import small_logo from "../../../../assets/small-logo.png"
import './popu_client_type.css'
import { useYourContext } from "../../../../context/MultiStepForm";

const PopupClientType = () => {
  const { handleNext , toggleshowPopup } = useYourContext();

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
      <div className="d-flex align-items-center justify-content-center" style={{ gap: "19px" }}>
        <span className="step-box done">
          <i className="bi bi-check2 text-white"></i>
        </span>
        <hr className="blue-line done" />
        <span className="step-box">
          2
        </span>
        <hr className="blue-line" />
        <span className="step-box">3</span>
      </div>
      <div className="col-sm-8 col-lg-6 mx-auto d-grid gap-2 gap-lg-3 gap-xl-4 text-center">
        <h3 className="subtitel-popup my-4">quel est le type de vos services?</h3>
        <button className="btn-white-shadow mx-auto">Particulier</button>
        <div className="flex-items gap-4">
          <hr className="line-ou" />
          <p className="ou-text">Ou</p>
          <hr className="line-ou" />
        </div>
        <button className="btn-white-shadow mx-auto">Indépendant</button>
        <button className="btn-white-shadow mx-auto entreprise">Entreprise</button>
        <div className="flex-items gap-4">
          <hr className="line-ou" />
          <p className="ou-text">Ou</p>
          <hr className="line-ou" />
        </div>
        <button className="btn-white-shadow mx-auto">Association</button>
        <button onClick={handleNext} type="submit" className="btn-primary w-100">M’inscrire</button>
      </div>
    </section>
    </>
  );
};

export default PopupClientType;