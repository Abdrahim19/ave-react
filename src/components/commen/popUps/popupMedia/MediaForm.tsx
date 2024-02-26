import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputlabel from "../../ui/Inputlabel";
import { useYourContext } from "../../../../context/MultiStepForm";
import { emailPasswordschema } from "../../../../schema";

interface IFormInput {
    email: string;
    password: string;
  }
const MediaForm = () => {
  const { handleNext } = useYourContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(emailPasswordschema)});
  
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    handleNext()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-lg-7 col-xxl-6 mx-auto d-grid gap-3">
          <Inputlabel
            name="email"
            type="text"
            label="Email" 
            error={errors.email}      
            register={register} 
            />
          <Inputlabel
            name="password"
            type="password"
            label="Mot de passe" 
            error={errors.password} 
            register={register}        
            />
          <button className="singup-button" type="submit">
            S’inscrire
          </button>
        </form>
  )
}

export default MediaForm