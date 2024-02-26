import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useYourContext } from "../../../../context/MultiStepForm";
import { Iterpriceschema } from "../../../../schema";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import './popupIterprice.css'

interface IFormInput {
  nomCommercial:string ,
  metier:string,
  nom:string,
  prenom:string,
  adressePostale:string,
  numeroTelephone:string,
  email:string,
}
const PopupIterprice = () => {
  const { handleNext } = useYourContext();
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(Iterpriceschema)});
  
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    handleNext()
  };


  return (
    <>
    <form  
     onSubmit={handleSubmit(onSubmit)}
     className={`animate__animated
     animate__bounceInDown row gap-2`} >
      <div className="flex-items gap-2">
      <div className="col-lg-6 position-relative">
      <Inputlabel name={"nom"} type={"text"} label={"Nom"} error={errors.nom}      
            register={register}  />   
      </div>
      <div className="col-lg-6 position-relative">
      <Inputlabel name={"prenom"} type={"text"} label={"Prénom"} error={errors.prenom}      
            register={register}  />   
      </div>
      </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"nomCommercial"} type={"text"} label={"Nom commercial"} error={errors.nomCommercial}      
            register={register}  />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"metier"} type={"text"} label={"Métier"} error={errors.metier}      
            register={register}  />
        </div>
        <div className="col-12 position-relative">
          <Inputlabel name={"Adresse"} type={"text"} label={"Adresse postale"} error={errors.adressePostale}      
            register={register}  />
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"Numéro"} type={"text"} label={"Numéro de téléphone"} error={errors.numeroTelephone}      
            register={register}  />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"email"} type={"text"} label={"Adresse E-mail"} error={errors.email}      
            register={register}  />
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
        <button type="submit" className="btn-primary col-8 mx-auto ">M’inscrire</button>
    </form >
    </>
  )
}

export default PopupIterprice