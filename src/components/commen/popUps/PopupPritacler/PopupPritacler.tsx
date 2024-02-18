import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";


const PopupPritacler = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <>
    <section  
     className={`animate__animated animate__bounceInDown row gap-4`} >
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