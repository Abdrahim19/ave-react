import masgDots from "../../../assets/masgDots.svg";
import { useEffect, useState } from "react";
import MessageUser from "./MsgUser";
import { getMessageUserData } from "../../../service/apiService";
import { MessageUserProps } from "../../../types/Types";
import UsersMessagesLoder from "../../../components/commen/sklitionsLoders/UsersMessagesLoder";
import { MassgesContext } from "../../../context/MassgesContext";

const UsersMessages = () => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const handleToggle = () => {
    setToggled((prevToggled) => !prevToggled);
  };

  const [messageUserData, setMessageUserData] = useState<MessageUserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMessageUserData();
        setMessageUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { search, setSearch } = MassgesContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Filter the messageUserData based on the search term
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
        {!loading ? (
          filteredMessageUserData.length > 0 ? (
            filteredMessageUserData.map((item, index: number) => (
              <MessageUser
                key={index}
                userName={item.userName}
                userImage={item.userImage}
                onlineStatus={item.onlineStatus}
                lastOnlineTime={item.lastOnlineTime}
                userId={item.userId}
              />
            ))
          ) : (
            <p className="fw-bold fs-px-21 ln-ht-20px">No users found.</p>
          )
        ) : (
          <UsersMessagesLoder />
        )}
      </div>
    </>
  );
};

export default UsersMessages;
