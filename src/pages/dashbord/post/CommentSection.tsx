import Inputlabel from "../../../components/commen/ui/Inputlabel";
import { useYourContext } from "../../../context/MultiStepForm";
import Comment from "./Comment";

const CommentSection = () => {
  const { toggleChatOpen, IsChatOpen } = useYourContext();

  return (
    <section className={`animate__animated ${IsChatOpen ? 'animate__backInDown' :  "animate__backOutDown h-transtion" } `}>
      <hr className="post-line" />
      <div className='flex-items gap-3 p-4 pb-2'>
        <div className='size-50px'>
          <img src="https://i.ibb.co/PTrBjrY/Image-40.png" className="img-fluid w-100 h-100" alt="" />
        </div>
        <div className="w-100">
          <Inputlabel name={""} type={"text"} label={"What are you thinking?"} />
        </div>
      </div>
      <div className="flex-items justify-content-end gap-2 px-4 pb-4">
        <button onClick={toggleChatOpen} className="flex-items gap-2 justify-content-center medium-blue-button outline">
          Close
          <i className="bi bi-x-circle"></i>  
        </button>
        <button className="flex-items gap-2 justify-content-center medium-blue-button">
          Post
          <i className="bi bi-send sp-letter-05"></i>
        </button>
      </div>
      <h1 className="fw-fw-medium fs-px_18 px-4 clr-gray-300">See ALL comments</h1>
      <hr className="post-line" />
      <Comment />
    </section>
  ) ;
};

export default CommentSection;
