import Navbar from "../pages/dashbord/navbar/Navbar"
import ProfileCard from "../components/commen/cards/profileCard/ProfileCard"
import UserAbout from "../pages/profile/about/UserAbout"
import HeaderBackground from "../pages/profile/headerbackground/HeaderBackground"
import ProfileLoction from "../pages/profile/userLoction/ProfileLoction"

const ProfileLayout = () => {
  return (
    <>
    <Navbar />
    <HeaderBackground />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-lg">
          <div className="col-md-5 col-lg-4 min_top">
            <ProfileCard />
            <ProfileLoction />
          </div>
          <div className="col-md-7 col-lg-8">
            <UserAbout />
          </div>
      </div>
  </div>
    </>
  )
}

export default ProfileLayout