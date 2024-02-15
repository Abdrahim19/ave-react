import PopupDmaend from "../components/commen/popUps/PopupDmaend/PopupDmaend"
import PopupHome from "../components/commen/popUps/PopupHome/PopupHome"
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
      <div className="row gap-5 gap-lg-0 container">
          <div className="col-lg-8">
            <AddPost />
            <UserPost
  userName="Gilberto B."
  postTime="Hier à 13h"
  userLocation="Vienne (Jean-Moulin) - 13,4 km"
  postImage="../../../assets/request-imges/Image-40.png"
  postDescription="Bonjour, Je cherche un plombier pour remplacer un wc à poser assez rapidement. Je joins de photos de l'existant et de celui que nous avons commandé."
/>
          </div>
          <div className="col-lg-4">
            <DemandeCard />
            <ProposezCard />
          </div>
      </div>
  </div>
  <PopupDmaend />
  <PopupHome />
    </>
  )
}

export default DashbordLayout

