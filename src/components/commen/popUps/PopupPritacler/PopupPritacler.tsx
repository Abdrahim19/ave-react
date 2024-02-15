import small_logo from "../../../../assets/small-logo.png"
import { useYourContext } from "../../../../context/MultiStepForm";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import Stepper from "../../ui/Stepper";
import './popupPritacler.css'


const PopupPritacler = () => {
  const {toggleshowPopup} = useYourContext()
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <>
    <section  
     className={`active popupPritacler-box row py-2 gap-4 overflow-y-auto overflow-x-hidden  bg-white`} >
      <div className="text-end">
   <button id="close" onClick={toggleshowPopup}>
              <i className="bi bi-x-lg" style={{fontSize:'min(40px ,20px)'}}></i>
            </button>
      </div>
      <div className="text-center">
        <img src={small_logo} className="box-img" alt="" />
        <p className="section-titel">S’inscrire</p>
      </div>
      <Stepper stepNumber={0} />
      <div className="d-flex flex-column w-100 flex-md-row gap-2">
      <div className="flex-1 position-relative">
      <Inputlabel name={""} type={"text"} label={"Nom"} error={""} />   
        </div>
      <div className="flex-1 position-relative">
      <Inputlabel name={""} type={"text"} label={"Prénom"} error={""} />   
        </div>
      </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"postale"} type={"text"} label={"Adresse postale"} error={""} />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Numéro"} type={"text"} label={"Numéro de téléphone"} error={""} />
        </div>
        <div className="col-12 position-relative">
          <Inputlabel name={"Adresse"} type={"text"} label={"Adresse postale"} error={""} />
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
        <button type="submit" className="btn-primary col-8 mx-auto ">M’inscrire</button>
    </section>
    </>
  )
}

export default PopupPritacler