import user_img  from '../../../assets/request-imges/Image-40.png'

const AddPost = () => {
    return (
      <div className="user-input-post w-100">
        <img src={user_img} className="user-post-img" alt="" />
        <input
          type="text"
          className="post-input"
          placeholder="De quoi avez-vous besoin aujourd'hui, Aya H. ?"
        />
      </div>
    );
  };
  
  export default AddPost;
  