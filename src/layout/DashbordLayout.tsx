import PopupDmaend from "../components/commen/popUps/PopupDmaend/PopupDmaend"
import PopupHome from "../components/commen/popUps/PopupHome/PopupHome"
import { postsData } from "../data/Postes"
import ProposezCard from "../pages/dashbord/ProposezCard/ProposezCard"
import AddPost from "../pages/dashbord/addPost/AddPost"
import DemandeCard from "../pages/dashbord/dmaned/Dmanedcart"
import Navbar from "../pages/dashbord/navbar/Navbar"
import UserPost from "../pages/dashbord/post/UserPost"

const DashbordLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-lg">
          <div className="col-lg-8 order-2 order-lg-1">
            <AddPost />
            {postsData.map((postData, index) => (
      <UserPost key={index} {...postData} />
    ))}

          </div>
          <div className="col-lg-3  order-1 order-lg-2 position-relative">
            <div className="fixed__content col-lg-3">
            <DemandeCard />
            <ProposezCard />
            </div>
          </div>
      </div>
  </div>
  <PopupDmaend />
  <PopupHome />
    </>
  )
}

export default DashbordLayout

