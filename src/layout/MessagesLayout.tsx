import Navbar from "../pages/dashbord/navbar/Navbar"
import  masgDots from "../assets/masgDots.svg";
import  masg_user_img from "../assets/masg-user-img.png";
import  blueAdd from "../assets/blue__add.png";
import  blueSend from "../assets/blue__send.png";



const MessagesLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-xl">
          <div className="col-md- col-lg-3">
            <div className="flex-items justify-content-between">
              <h3 className="display-1 fw-medium">Messages</h3>
              <button>
                <img src={masgDots} alt="" />
              </button>
            </div>
            <div className="position-relative">
              <input type="text" placeholder="Recherchez ici" className="msg-searchInput" />
              <i className="bi bi-search"></i>
            </div>
            <div className="msg-user flex-items gap-3">
              <img src={masg_user_img} className="masg_user_img" alt="" />
              <div>
                <h3 className="masg-user-name">Kate Lingard</h3>
                <p className="data-left">En ligne à 17h00</p>
              </div>
            </div>
          </div>
          <div className="col-md- col-lg-6">
            <div className="msg-respons d-flex">
              <img src={masg_user_img} className="verySmall_img" alt="" />
              <div className="msg-box">
                <p className="msg">Hey! i would like to know what do you want to fix?</p>
                <p className="dataSand__msg">13:01</p>
              </div>
            </div>
            <div className="msg-sand d-flex">
              <img src={masg_user_img} className="verySmall_img" alt="" />
              <div className="sand_msg-box">
                <p className="msg">Hey! i would like to know what do you want to fix?</p>
                <div className="flex-items justify-content-between">
                <p className="dataSand__msg">13:01</p>
                <p className="timeMsg__sand">Seen 13:05</p>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <input type="text" className="sand__input"/>
              <div className="position-absolute top-50 translate-middle-y add__container">
                <img src={blueAdd} alt="" className="add--img" />
              </div>
              <div className="position-absolute top-50 translate-middle-y sand__img">
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


