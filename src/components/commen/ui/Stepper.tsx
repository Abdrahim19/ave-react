import { FC } from "react";
import { useYourContext } from "../../../context/MultiStepForm";

type props = {
    stepNumber:number,
}
const Stepper:FC<props> = ({stepNumber}) => {
  const { ToStep , step} = useYourContext();
  console.log(stepNumber);
  
  return (
    <div className="d-flex align-items-center justify-content-center" style={{gap: "19px"}}>
    <span onClick={() => ToStep(1) } className={`step-box cursor-pointer 
    ${step === 1 ? "" : 'done'}`}>
      {step === 1 ? 1 :<i className="bi bi-check2 text-white"></i>}
    </span>
    <hr className={`blue-line ${step >= 2 ? 'done'  : '' }`} />
    <span onClick={() => ToStep(2) } className={`step-box cursor-pointer 
    ${step === 3 ? "done" : ''}`}>
    {step === 3 ? <i className="bi bi-check2 text-white"></i> : 2}
    </span>
    <hr className={`blue-line ${step === 3 ? 'done' : '' }`} />
    <span onClick={() => ToStep(3) } className="step-box cursor-pointer">
      3
    </span>
  </div>
  )
}

export default Stepper