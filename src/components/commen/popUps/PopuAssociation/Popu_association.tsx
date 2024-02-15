import small_logo from "../../../../assets/small-logo.png"
import { useYourContext } from "../../../../context/MultiStepForm";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import './popuassociation.css'



const Popu_association = () => {
  const { handleNext , toggleshowPopup } = useYourContext();

  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <>
      <div className={`active bg-shadow`}>
    </div>
    <section 
     className={`associationPopup p-2 gap-4 overflow-y-auto overflow-x-hidden bg-white`} >
      <div className="text-end">
   <button id="close" onClick={toggleshowPopup}>
              <i className="bi bi-x-lg" style={{fontSize:'min(40px ,20px)'}}></i>
            </button>
      </div>
      <div className="text-center">
        <img src={small_logo} className="box-img" alt="" />
        <p className="section-titel">S’inscrire</p>
      </div>
      <div className="d-flex align-items-center justify-content-center" style={{gap: "19px"}}>
        <span className="step-box done">
          <i className="bi bi-check2 text-white"></i>
        </span>
        <hr className="blue-line done" />
        <span className="step-box done">
          <i className="bi bi-check2 text-white"></i>
        </span>
        <hr className="blue-line done" />
        <span className="step-box">
          3
        </span>
      </div>
      <div className="col-12 my-3 position-relative">
      <Inputlabel name={""} type={"text"} label={"Nom de l’association"} error={""} />   
        </div>
        <div className="col-12 mb-2 position-relative">
        <Inputlabel name={""} type={"text"} label={"Adresse postale"} error={""} />    
        </div>
        <div className="col-12 mb-2 position-relative">
        <Inputlabel name={""} type={"text"} label={"Numéro de téléphone"} error={""} />
        </div>
        <div className="col-12 mb-2 position-relative">
          <Inputlabel name={""} type={"text"} label={"Adresse E-mail"} error={""} />
        </div>
      <div className="flex-items gap-3">
        <Checkbox  onChange={handleCheckboxChange}  />
      <label className="form-check-label" htmlFor="exampleCheck1">
        J’accepte 
            <span>  
              les conditions générales de vente et d’utilisation    
          </span> 
        </label>
      </div>
      <div className="row">
        <button type="submit" onClick={handleNext} className="btn-primary col-8 mx-auto ">M’inscrire</button>
      </div>
    </section>
    </>
  )
}

export default Popu_association