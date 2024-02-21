import  blueAdd from "../../../assets/blue__add.png";
import  blueSend from "../../../assets/blue__send.png";
const SandInput = () => {
  return (
    <div className="sand__input__conatiner flex-items justify-content-between">
    <div className="add__container cursor-pointer">
      <img src={blueAdd} alt="" className="add--img" />
    </div>
    <input type="text" className="sand__input w-100 mx-4" placeholder="Écrivez votre message ici"/>
    <div className="sand__img cursor-pointer">
    <img src={blueSend} alt="" className="sand--img" />
    </div>
  </div>
  )
}

export default SandInput