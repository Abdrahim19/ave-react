// import Inputlabel from '../../../components/commen/ui/Inputlabel';
// import UplodeFile from './UplodeFile';
// import arrowDown from '../../../assets/Vector (1).png'
import './dmaned.css'
// import { useState } from 'react';
import MultiActionButton from '../../../components/commen/ui/MultiActionButton/MultiActionButton';
const DemandeCard = () => {
    // Define state and toggle function
    // const [isShow, setShow] = useState<boolean>(false);
    // Toggle function
    // const handleToggle = () => {
    //   setShow(!isShow);
    // };
    const actions = [
      { label: 'Mon Compte', icon:<i className="bi bi-shield-lock"></i>},
      { label: 'Demande priveé', icon:<i className="bi bi-person"></i>},
      { label: 'Demande publique', icon:<i className={`bi bi-globe-asia-australia`}></i>},
      { label: 'Mes Informations', icon:<i className="bi bi-info-circle"></i>},
      { label: 'Mes Demandes ', icon:<i className="bi bi-plus-circle"></i> },
      { label: 'Deconnexion', icon: <i className="bi bi-box-arrow-right"></i>},
    ];    
  return (
    <div className='Demande-card d-grid'>
      <MultiActionButton actions={actions} />
    </div>
    // <div className="">
    //   <div onClick={handleToggle} className="flex-items mb-md-4" style={{ gap: '1rem' }}>
    //     <i className={`bi bi-globe-asia-australia fs-px-24`}></i>
    //     <button role='button' className="flex-items w-100 justify-content-between 
    //     justify-content-lg-start gap-3 Demande-link clr-blue-gray">
    //       Demande publique
    //       <img src={arrowDown} alt="" />
    //     </button>
    //   </div>
    //   <div className={`animate__animated ${isShow ? 'animate__backInUp' : 'd-none d-md-block'} mt-2`} >
    //   <div className='mb-3'>
    //   <Inputlabel name={"besoin"} type={"text"} label={"Décrivez votre besoin"} error={""} />
    //   </div>
    //   <UplodeFile onFileUpload={(file: File) : void => {
    //    console.log(file);
    //   } } />
    //   <div className='w-100 mx-auto text-center'>
    //   <button className="green-button mt-4">Poster ma demande</button>
    //   </div>
    //   </div>
    // </div>
  );
};

export default DemandeCard;
