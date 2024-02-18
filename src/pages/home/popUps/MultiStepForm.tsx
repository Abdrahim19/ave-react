import PopupClientType from '../../../components/commen/popUps/PopupClientType/PopupClientType';
import Popup_media from '../../../components/commen/popUps/popupMedia/Popup_media';
import small_logo from '../../../assets/small-logo.png';
import { useYourContext } from '../../../context/MultiStepForm';
import Singup from './Singup';
import Stepper from '../../../components/commen/ui/Stepper';
import PopupDone from '../../../components/commen/popUps/PopupDone/PopupDone';

const MultiStepForm = () => {
  const { step, showPopup, toggleshowPopup } = useYourContext();

  // Render the component based on the step value using a switch statement
  const renderComponent = () => {
    switch (step) {
      case 1:
        return <Popup_media />;
      case 2:
        return <PopupClientType />;
      case 3:
        return <Singup />;
      case 4:
        return <PopupDone />;  
      default:
        return null;
    }
  };

  return (
    <div>
      {showPopup && (
        <div onClick={toggleshowPopup} className='bg-shadow active'></div>
      )}
      <section
        className={`auth_box row m-0 gap-2 overflow-y-auto p-2 h-75 bg-white`}
      >
        <div className='text-end animate__animated animate__bounceInDown'>
          <button id='close' onClick={toggleshowPopup}>
            <i
              className='bi bi-x-lg'
              style={{ fontSize: 'min(40px, 20px)' }}
            ></i>
          </button>
        </div>
        <div className='text-center animate__animated animate__bounceInDown'>
          <img src={small_logo} className='box-img' alt='' />
          <p className='section-titel'>S’inscrire</p>
        </div>
        <Stepper />
        {renderComponent()}
      </section>
    </div>
  );
};

export default MultiStepForm;