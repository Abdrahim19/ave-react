import { FC } from 'react';

interface MessageUserProps {
  userName: string;
  userImage: string;
  onlineStatus: boolean;
  lastOnlineTime: string;
}

const MessageUser: FC<MessageUserProps> = ({ userName, userImage, onlineStatus, lastOnlineTime }) => {
  return (
    <div className="msg-user cursor-pointer flex-items gap-3">
      <div className="position-relative masg_user_img">
        <img src={userImage} className="img-fluid" alt={userName} />
        {onlineStatus && <span className="online-dot position-absolute"></span>}
      </div>
      <div>
        <h3 className="masg-user-name">{userName}</h3>
        <p className="data-left">{`En ligne à ${lastOnlineTime}`}</p>
      </div>
    </div>
  );
};

export default MessageUser;
