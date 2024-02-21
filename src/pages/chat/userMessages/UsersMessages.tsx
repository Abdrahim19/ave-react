import  masgDots from "../../../assets/masgDots.svg";
import  masg_user_img from "../../../assets/masg-user-img.png";
import { useState } from "react";
import MessageUser from "./MsgUser";



const UsersMessages = () => {
    const [isToggled, setToggled] = useState<boolean>(false);
    const messageUserData = [
        {
        userName: 'Kate Lingard',
        userImage: masg_user_img,
        onlineStatus: true,
        lastOnlineTime: '17h00',
      } , 
      {
        userName: 'Kate Lingard',
        userImage: masg_user_img,
        onlineStatus: true,
        lastOnlineTime: '17h00',
      } ,
      {
        userName: 'Kate Lingard',
        userImage: masg_user_img,
        onlineStatus: true,
        lastOnlineTime: '17h00',
      } ,
      {
        userName: 'Kate Lingard',
        userImage: masg_user_img,
        onlineStatus: true,
        lastOnlineTime: '17h00',
      } 
    ];

    const handleToggle = () => {
      setToggled((prevToggled) => !prevToggled);
    };
  return (
    <>
             <div className="flex-items justify-content-between my-3 my-sm-0">
              <h3 className="msg-titel">Messages</h3>
              <button onClick={handleToggle}>
                <img src={masgDots} alt="" />
              </button>
            </div>
            <div className={`${isToggled ? '' : 'd-none d-md-block'} `}>
            <div className="position-relative my-4">
              <input type="text" placeholder="Recherchez ici" className="msg-searchInput" />
              <i className="bi bi-search top-50 translate-middle-y"></i>
            </div>
            {messageUserData.map((item, index: number) => (
  <MessageUser
    key={index} // Don't forget to add a unique key when mapping through an array
    userName={item.userName}
    userImage={item.userImage}
    onlineStatus={item.onlineStatus}
    lastOnlineTime={item.lastOnlineTime} // Assuming lastOnlineTime is a string
  />
))}

            </div>
    </>
  )
}

export default UsersMessages