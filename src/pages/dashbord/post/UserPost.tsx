import './post.css';
import userImage  from "../../../assets/Image-40.png";
import SocialTab from './SocialTab';
import PostImges from './PostImges';

type UserPostProps =  {
  userName: string;
  postTime: string;
  userLocation: string;
  postImage: string[];
  postDescription: string;
}

const UserPost: React.FC<UserPostProps> = ({
  userName,
  postTime,
  userLocation,
  postDescription,
}) => {
  return (
    <div className="user-post mt-4">
      <div className="row p-4">
        <div className="col-3 col-sm-2 col-xl-1 px-0 text-center">
          <img
            src={userImage}
            className="user-post-img img-fluid"
            style={{ height: 'clamp(60px, 4vw, 100px)' }}
            alt=""
          />
        </div>
        <div className="col-9 col-sm-10 col-xl-11">
          <div className="flex-items">
            <h1 className="user-name flex-1">{userName}</h1>
            <p className="publich-time">{postTime}</p>
          </div>
          <span className="user-loction">{userLocation}</span>
        </div>
      </div>
      <PostImges images={[              
                  'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
                  'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
                  'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
                  'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
        ]}/>
      <SocialTab  postDescription={postDescription} />
    </div>
  );
};

export default UserPost;


