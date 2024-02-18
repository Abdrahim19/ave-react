import "./popupMedia.css";
import facebook_icon from "../../../../assets/icon _facebook.png"
import googl_icon from "../../../../assets/googl-icon.png"
import { useYourContext } from "../../../../context/MultiStepForm";
import Inputlabel from "../../ui/Inputlabel";
import OuLine from "../../OuLine";


// type Props = {
//   isVisible: boolean;
//   Toggolstate:() => void
// };

const Popup_media = () => {
  const { handleNext , step } = useYourContext();

  return (
    <>
    <section
      className={`row m-0 gap-4 animate__animated 
      ${step === 1 ? 'animate__bounceInDown' : 'animate__bounceOutDown'}
      `}
    >
      <form action="" method="post" className="col-8 mx-auto d-grid gap-3">
      <Inputlabel name={"email"} type={"text"} label={"Email"} error={""} />
      <Inputlabel name={"password"} type={"password"} label={"Mot de passe"} error={""} />
      <button className="singup-button" type="submit">S’inscrire</button>
      </form>
      <OuLine />
      <div className="col-12">
        <div className="col-sm-8 col-md-6 mx-auto">
          <a href="#" onClick={handleNext} className="Facebook singup-box d-flex align-items-center justify-content-center mx-auto mb-3 px-2" style={{ gap: "20px" }}>
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