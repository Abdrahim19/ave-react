import Popu_association from '../../../components/commen/popUps/PopuAssociation/Popu_association';
import PopupClientType from '../../../components/commen/popUps/PopupClientType/PopupClientType';
import PopupIterprice from '../../../components/commen/popUps/PopupIterprice/Popup-iterprice';
import PopupPritacler from '../../../components/commen/popUps/PopupPritacler/PopupPritacler';
import Popup_media from '../../../components/commen/popUps/popupMedia/Popup_media';
import { useYourContext } from '../../../context/MultiStepForm';

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
        return <Popu_association />;
      case 4:
        return <PopupIterprice />;
      case 5:
        return <PopupPritacler />;
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