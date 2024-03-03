import masgDots from "../../../assets/masgDots.svg";
import { useState } from "react";
import MessageUser from "./MsgUser";
import { MassgesContext } from "../../../context/MassgesContext";

const UsersMessages = () => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const { search, setSearch } = MassgesContext();


  const handleToggle = () => {
    setToggled((prevToggled) => !prevToggled);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  const messageUserData = [
  
    {
      id:1 ,
      userName: "David Davis",
      userImage: "https://i.postimg.cc/fkd1Y5V2/Image-40.png",
      onlineStatus: true,
      lastOnlineTime: "2 weeks ago"
    },
    {
      id:2 ,
      userName: "Sophia Johnson",
      userImage: "https://i.postimg.cc/F7Q8pcc9/Image-60.png",
      onlineStatus: true,
      lastOnlineTime: "1 hour ago"
    },
    {
      id:3 ,
      userName: "William Smith",
      userImage: "https://i.postimg.cc/fkd1Y5V2/Image-40.png",
      onlineStatus: false,
      lastOnlineTime: "3 weeks ago"
    }
  ]
  const filteredMessageUserData = messageUserData.filter((user) =>
    user.userName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="flex-items overflow-hidden justify-content-between my-3 my-md-0">
        <h3 className="msg-titel">Messages</h3>
        <button onClick={handleToggle}>
          <img src={masgDots} alt="" />
        </button>
      </div>
      <div className={`${isToggled ? '' : 'd-none d-md-block'} `}>
        <div className="position-relative my-4">
          <input
            type="text"
            placeholder="Recherchez ici"
            onChange={handleSearchChange}
            className="msg-searchInput"
          />
          <i className="bi bi-search top-50 translate-middle-y"></i>
        </div>
        {filteredMessageUserData.length > 0 ? (
  filteredMessageUserData.map((item, index: number) => (
    <MessageUser
      key={index}
      userName={item.userName}
      userImage={item.userImage}  // Fix this line
      onlineStatus={item.onlineStatus}
      lastOnlineTime={item.lastOnlineTime}
      userId={index}
    />
  ))
) : (
  <p className="fw-bold fs-px-21 ln-ht-20px">No users found.</p>
)}
      </div>
    </>
  );
};

export default UsersMessages;
