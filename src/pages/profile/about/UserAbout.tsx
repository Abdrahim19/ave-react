import Certifications from "./Certifications";
import Interdction from "./Interdction";
import Listdmaend from "./Listdmaend";
import "./userAbout.css";
const UserAbout = () => {
  return (
    <div className="d-grid gap-3">
      <Interdction />
      <Listdmaend />
      <Certifications />
    </div>
  )
}

export default UserAbout