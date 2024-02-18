import { useYourContext } from "../../../../context/MultiStepForm";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";



const Popu_association = () => {
  const { handleNext  } = useYourContext();

  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <>
    <section className="animate__animated
animate__bounceInDown">
      <div className="col-12 mb-2 position-relative">
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
      <div className="flex-items my-3 gap-3">
        <Checkbox  onChange={handleCheckboxChange}  />
      <label className="form-check-label" htmlFor="exampleCheck1">
        J’accepte 
            <span>  
              les conditions générales de vente et d’utilisation    
          </span> 
        </label>
      </div>
      <div className="row">
        <button type="submit"  onClick={handleNext} className="btn-primary col-8 mx-auto ">M’inscrire</button>
      </div>
    </section>
    </>
  )
}

export default Popu_association