import "./popupMedia.css";
import facebook_icon from "../../../../assets/icon _facebook.png"
import googl_icon from "../../../../assets/googl-icon.png"
import small_logo from "../../../../assets/small-logo.png"
import { useYourContext } from "../../../../context/MultiStepForm";
import Stepper from "../../ui/Stepper";


// type Props = {
//   isVisible: boolean;
//   Toggolstate:() => void
// };

const Popup_media = () => {
  const { handleNext ,  toggleshowPopup } = useYourContext();

  return (
    <>
    <section
      className={`mediaPopup_box 
      row m-0 gap-4 overflow-y-auto p-1 p-sm-4 bg-white`}
    >
      <div className="text-end">
        <button id="close" onClick={toggleshowPopup}>
          <i className="bi bi-x-lg" style={{ fontSize: "min(40px, 20px)" }}></i>
        </button>
      </div>
      <div className="text-center">
        <img src={small_logo}className="box-img" alt="" />
        <p className="section-titel">S’inscrire</p>
      </div>
      <Stepper stepNumber={0} />
      <div className="col-12 mt-4">
        <div className="col-sm-8 col-md-6 mx-auto">
          <a href="#" onClick={handleNext} className="Facebook singup-box d-flex align-items-center justify-content-center mx-auto mb-4 px-2" style={{ gap: "20px" }}>
            <img src={facebook_icon} alt="" />
            Sign in with Facebook
          </a>
          <a href="#" onClick={handleNext} className="Google singup-box d-flex align-items-center justify-content-center mx-auto px-2 mb-3" style={{ gap: "20px" }}>
            <img src={googl_icon} alt="" />
            Sign in with Google
          </a>
        </div>
      </div>
      <p className="text-center media-discrption"> 
      En continuant, vous acceptez automatiquement nos
       <a href="#" className="text-text-decoration-underline">conditions générales</a>, <br />
      notre <a href="#" className="text-text-decoration-underline">  politique de confidentialité </a> et notre politique en 
      <a href="#" className="text-text-decoration-underline">matière de cookies</a>.
      </p>
    </section>
    </>
  );
};

export default Popup_media;