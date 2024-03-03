import SandInput from "./SandInput"
import  masg_user_img from "../../../assets/masg-user-img.png";
import MessageResponse from "./MessageResponse";
import MessageSent from "./MessageSent";
import { Suspense } from "react";
import Lodingpage from "../../../components/commen/pages/loding/Lodingpage";
import { MassgesContext } from "../../../context/MassgesContext";


const TalkArea = () => {
  const {SelectedUser} =  MassgesContext()
    const messageResponseData =[
       {
       userId:1,
        userImage: masg_user_img,
        messageText: "Hey! I would like to know what do you want to fix?",
        messageTime: "13:01",
      },
      {
        userId:2,
         userImage: "https://i.postimg.cc/F7Q8pcc9/Image-60.png",
         messageText: "Hey! I would like to know what do you ?",
         messageTime: "15:01",
       },
       {
        userId:3,
         userImage: masg_user_img,
         messageText: "Hey! I would like to kfix?",
         messageTime: "19:01",
       }
    ];
      const messageSentData = {
        userId:2,
        userImage: masg_user_img,
        messageText:
          "hello! Thanks for reaching out so there are many problems of Lorem ipsum so i was looking for someone to help",
        messageTime: "13:01",
        seenTime: "13:05",
      };
      
  return (
    <>
       <Suspense fallback={<Lodingpage />}>
        <MessageResponse {...messageResponseData[SelectedUser]} />
        <MessageSent {...messageSentData}  />
        <MessageResponse {...messageResponseData[SelectedUser]} />
        <MessageSent {...messageSentData}  />
        <MessageResponse {...messageResponseData[SelectedUser]} />
        <MessageSent {...messageSentData}  />
      </Suspense>
      <SandInput />
      </>
  )
}

export default TalkArea