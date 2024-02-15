import PopupClientType from '../../../components/commen/popUps/PopupClientType/PopupClientType';
import Popup_media from '../../../components/commen/popUps/popupMedia/Popup_media';
import { useYourContext } from '../../../context/MultiStepForm';
import Singup from './Singup';

const MultiStepForm = () => {
    const { step , showPopup ,  toggleshowPopup } = useYourContext();

    console.log(step);
    

  // Render the component based on the step value using a switch statement
  const renderComponent = () => {
    switch (step) {
      case 1:
        return <Popup_media />;
      case 2:
        return <PopupClientType />;
      case 3:
        return <Singup />;
      default:
        return null;
    }
  };

  return <div>
    {showPopup && 
    <div onClick={toggleshowPopup} className='bg-shadow active'>
    </div> }
    {renderComponent()}
    </div>;
};

export default MultiStepForm;