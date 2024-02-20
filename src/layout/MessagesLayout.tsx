import Navbar from "../pages/dashbord/navbar/Navbar"
import  masgDots from "../assets/masgDots.svg";
import  masg_user_img from "../assets/masg-user-img.png";
import  blueAdd from "../assets/blue__add.png";
import  blueSend from "../assets/blue__send.png";
import "../pages/chat/chat.css";


const MessagesLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-xl">
          <div className="col-md- col-lg-3">
            <div className="flex-items justify-content-between">
              <h3 className="msg-titel">Messages</h3>
              <button>
                <img src={masgDots} alt="" />
              </button>
            </div>
            <div className="position-relative my-4">
              <input type="text" placeholder="Recherchez ici" className="msg-searchInput" />
              <i className="bi bi-search top-50 translate-middle-y"></i>
            </div>
            <div className="msg-user cursor-pointer flex-items gap-3">
              <div className="position-relative masg_user_img">
              <img src={masg_user_img} className="img-fluid" alt="" />
              <span className="online-dot position-absolute"></span>
              </div>
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
            <div className="msg-user cursor-pointer flex-items gap-3">
              <div className="position-relative masg_user_img">
              <img src={masg_user_img} className="img-fluid" alt="" />
              <span className="online-dot position-absolute"></span>
              </div>
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
            <div className="msg-user cursor-pointer active flex-items gap-3">
              <div className="position-relative masg_user_img">
              <img src={masg_user_img} className="img-fluid" alt="" />
              <span className="online-dot position-absolute"></span>
              </div>
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
            <div className="msg-user cursor-pointer flex-items gap-3">
              <div className="position-relative masg_user_img">
              <img src={masg_user_img} className="img-fluid" alt="" />
              <span className="online-dot position-absolute"></span>
              </div>
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
            <div className="msg-user cursor-pointer flex-items gap-3">
              <div className="position-relative masg_user_img">
              <img src={masg_user_img} className="img-fluid" alt="" />
              <span className="online-dot position-absolute"></span>
              </div>
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
          </div>
          <div className="col-md- col-lg-6 mx-4 px-4 border-left-right position-relative">
            <div className="msg-respons mb-4 d-flex gap-3">
              <img src={masg_user_img} className="verySmall_img align-self-end" alt="" />
              <div className="msg-box">
                <p className="msg">Hey! i would like to know what do you want to fix?</p>
                <p className="dataSand__msg">13:01</p>
              </div>
            </div>
            <div className="msg-sand mb-4 text-end w-100 d-flex gap-3 align-self-end">
              <div className="sand_msg-box">
                <p className="msg">
                hello! Thanks for reaching out so there are many problems
                 of Lorem ipsum so i was looking for someone to help
                </p>
                <div className="flex-items justify-content-between">
                <p className="dataSand__msg">13:01</p>
                <p className="timeMsg__sand">Seen 13:05</p>
                </div>
              </div>
              <img src={masg_user_img} className="verySmall_img align-self-end" alt="" />
            </div>
            <div className="msg-respons mb-4 d-flex gap-3">
              <img src={masg_user_img} className="verySmall_img align-self-end" alt="" />
              <div className="msg-box">
                <p className="msg">Hey! i would like to know what do you want to fix?</p>
                <p className="dataSand__msg">13:01</p>
              </div>
            </div>
            <div className="msg-sand mb-4 text-end w-100 d-flex gap-3 align-self-end">
              <div className="sand_msg-box">
                <p className="msg">
                hello! Thanks for reaching out so there are many problems
                 of Lorem ipsum so i was looking for someone to help
                </p>
                <div className="flex-items justify-content-between">
                <p className="dataSand__msg">13:01</p>
                <p className="timeMsg__sand">Seen 13:05</p>
                </div>
              </div>
              <img src={masg_user_img} className="verySmall_img align-self-end" alt="" />
            </div>
            <div className="sand__input__conatiner flex-items justify-content-between">
              <div className="add__container cursor-pointer">
                <img src={blueAdd} alt="" className="add--img" />
              </div>
              <input type="text" className="sand__input w-100 mx-4" placeholder="Écrivez votre message ici"/>
              <div className="sand__img cursor-pointer">
              <img src={blueSend} alt="" className="sand--img" />
              </div>
            </div>
          </div>
          <div className="col-md- col-lg-3">
          </div>
      </div>
  </div>
    </>
  )
}

export default MessagesLayout


