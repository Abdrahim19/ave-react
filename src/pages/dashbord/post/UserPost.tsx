import './post.css';
import postimg  from "../../../assets/image 1 (1).png";
import userImage  from "../../../assets/Image-40.png";
interface UserPostProps {
  userName: string;
  postTime: string;
  userLocation: string;
  postImage: string;
  postDescription: string;
}

const UserPost: React.FC<UserPostProps> = ({
  userName,
  postTime,
  userLocation,
  postDescription,
}) => {
  return (
    <div className="user-post">
      <div className="row p-4">
        <div className="col-1 px-0 text-center">
          <img
            src={userImage}
            className="user-post-img img-fluid"
            style={{ height: 'clamp(60px, 4vw, 100px)' }}
            alt=""
          />
        </div>
        <div className="col-11">
          <div className="flex-items">
            <h1 className="user-name flex-1">{userName}</h1>
            <p className="publich-time">{postTime}</p>
          </div>
          <span className="user-loction">{userLocation}</span>
        </div>
      </div>
      <img src={postimg} className="post-img" alt="" />
      <div className="p-4">
        <p className="post-discrption">{postDescription}</p>
        <hr className="post-line" />
        <div className="flex-items gap-3 justify-content-end">
          <a href="">
            <i className="bi bi-suit-heart"></i>
          </a>
          <a href="">
            <i className="bi bi-people"></i>
          </a>
          <a href="">
            <i className="bi bi-chat"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserPost;


