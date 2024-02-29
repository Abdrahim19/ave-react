import { useState } from "react";

const PostInput = () => {
const [postContent, setPostContent] = useState('');
  const maxCharacterLimit = 30;

  const handlePostContentChange = (event) => {
    const content = event.target.value;
    if (content.length <= maxCharacterLimit) {
      setPostContent(content);
    }
  };
  return (
    <>
    <div className='position-relative'>
    <textarea  value={postContent}
        onChange={handlePostContentChange} name="postContent" className='postInput clr-gray-300 fs-px_18 ln-ht-17px ' placeholder='hello , i want...'></textarea>  
    <label htmlFor="" style={{"left" :'50px' , "top":"-.5rem"}} className='position-absolute px-2 bg-white fs-px-18 ln-ht-17px fw-medium'>what do you need</label>
      </div>
    <p className={`${postContent.length > maxCharacterLimit && "text-danger"} fw-bold fs-px-16`}>
    {postContent.length}/{maxCharacterLimit}  Ajouter plus 
    de desscripyersj</p>
    </>
  )
}

export default PostInput