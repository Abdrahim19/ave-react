import { useYourContext } from "../../../../context/MultiStepForm";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import './popupIterprice.css'

// type  fieldData =  {
//   name: string;
//   label: string;
// }

const PopupIterprice = () => {
  const { handleNext } = useYourContext();
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  // const fieldData = [
  //   { name: 'nom', label: 'Nom' },
  //   { name: 'prenom', label: 'Prénom' },
  //   { name: 'commercial', label: 'Nom commercial' },
  //   { name: 'metier', label: 'Métier' },
  //   { name: 'adresse', label: 'Adresse postale' },
  //   { name: 'numero', label: 'Numéro de téléphone' },
  //   { name: 'mail', label: 'Adresse E-mail' },
  // ];
  return (
    <>
    <section
     className={`animate__animated
     animate__bounceInDown row gap-2`} >
      <div className="flex-items gap-2">
      <div className="col-lg-6 position-relative">
      <Inputlabel name={""} type={"text"} label={"Nom"} />   
      </div>
      <div className="col-lg-6 position-relative">
      <Inputlabel name={""} type={"text"} label={"Prénom"} />   
      </div>
      </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"commercial"} type={"text"} label={"Nom commercial"} />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Métier"} type={"text"} label={"Métier"} />
        </div>
        <div className="col-12 position-relative">
          <Inputlabel name={"Adresse"} type={"text"} label={"Adresse postale"} />
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Numéro"} type={"text"} label={"Numéro de téléphone"} />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"mail"} type={"text"} label={"Adresse E-mail"} />
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