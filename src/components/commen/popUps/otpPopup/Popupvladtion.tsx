import OtpInput from "../../ui/otpInput/OtpInput";
import OptCounter from "./OptCounter";

const Popupvladtion = () => {
  const handleOtpChange = (otp: string) => {
    console.log('OTP:', otp);
  };
  return (
    <div className="Popupvladtion mt-3">
      <p className="Popupvladtion__discrption text-center">Ave  vous envoie le code de verification dans <br /> quelques instants</p>
      <OtpInput length={6} onChange={handleOtpChange} />
      <OptCounter />
      <div className="row text-center">
      <button className="green-button col-lg-8">Done</button>
      </div>
    </div>
  )
}

export default Popupvladtion