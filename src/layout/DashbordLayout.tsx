import PopupDmaend from "../components/commen/popUps/PopupDmaend/PopupDmaend"
import PopupHome from "../components/commen/popUps/PopupHome/PopupHome"
import ProposezCard from "../pages/dashbord/ProposezCard/ProposezCard"
import AddPost from "../pages/dashbord/addPost/AddPost"
import DemandeCard from "../pages/dashbord/dmaned/Dmanedcart"
import Navbar from "../pages/dashbord/navbar/Navbar"
import AllPosts from "../pages/dashbord/post/AllPosts"

const DashbordLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row container-lg">
          <div className="col-md-8 order-2 order-md-1">
        <AddPost />
    <AllPosts />
          </div>
          <div className="col-lg-3 col-md-4 order-1 order-md-2 position-relative">
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

