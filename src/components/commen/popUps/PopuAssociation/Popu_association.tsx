import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useYourContext } from "../../../../context/MultiStepForm";
import { associationschema } from "../../../../schema";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";

interface IFormInput {
  association_nom:string,
  adressePostale:string,
  numeroTelephone:string,
  email:string,
}

const Popu_association = () => {
  const { handleNext  } = useYourContext();

  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(associationschema)});
  
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    handleNext()
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="animate__animated
animate__bounceInDown">
      <div className="col-12 mb-2 position-relative">
        <Inputlabel name={"association_nom"} type={"text"} label={"Nom de l’association"}
        error={errors.association_nom}      
        register={register} />   
        </div>
        <div className="col-12 mb-2 position-relative">
        <Inputlabel name={"postale"} type={"text"} label={"Adresse postale"}
        error={errors.adressePostale}      
        register={register} />    
        </div>
        <div className="col-12 mb-2 position-relative">
        <Inputlabel name={"numeroTelephone"} type={"text"} label={"Numéro de téléphone"} 
        error={errors.numeroTelephone}      
        register={register} />
        </div>
        <div className="col-12 mb-2 position-relative">
          <Inputlabel name={"email"} type={"text"} label={"Adresse E-mail"} 
          error={errors.email}      
          register={register}
          />
        </div>
      <div className="flex-items my-3 gap-3">
        <Checkbox  onChange={handleCheckboxChange}   />
      <label className="form-check-label" htmlFor="Check1">
        J’accepte {" "}
            <span>  
              les conditions générales de vente et d’utilisation    
          </span> 
        </label>
      </div>
      <div className="row">
        <button type="submit" className="btn-primary col-8 mx-auto ">M’inscrire</button>
      </div>
    </form>
    </>
  )
}

export default Popu_association