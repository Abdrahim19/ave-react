import { useYourContext } from "../../../../context/MultiStepForm";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import './popupIterprice.css'


const PopupIterprice = () => {
  const { handleNext } = useYourContext();
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <>
    <section
     className={`animate__animated
     animate__bounceInDown row gap-2`} >
      <div className="flex-items gap-2">
      <div className="col-lg-6 position-relative">
      <Inputlabel name={""} type={"text"} label={"Nom"} error={""} />   
        </div>
      <div className="col-lg-6 position-relative">
      <Inputlabel name={""} type={"text"} label={"Prénom"} error={""} />   
        </div>
      </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"commercial"} type={"text"} label={"Nom commercial"} error={""} />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Métier"} type={"text"} label={"Métier"} error={""} />
        </div>
        <div className="col-12 position-relative">
          <Inputlabel name={"Adresse"} type={"text"} label={"Adresse postale"} error={""} />
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Numéro"} type={"text"} label={"Numéro de téléphone"} error={""} />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"mail"} type={"text"} label={"Adresse E-mail"} error={""} />
        </div>
      <div className="flex-items gap-3">
        <Checkbox  onChange={handleCheckboxChange}  />
      <label className="form-check-label" htmlFor="Check1">
        J’accepte {" "}
            <span>  
              les conditions générales de vente et d’utilisation    
          </span> 
        </label>
      </div>
        <button type="submit" onClick={handleNext} className="btn-primary col-8 mx-auto ">M’inscrire</button>
    </section>
    </>
  )
}

export default PopupIterprice