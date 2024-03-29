import Navbar from "../pages/dashbord/navbar/Navbar";
import user__background from '../assets/Rectangle 191.png';
import user__img from '../assets/Ellipse 54.png';
import styles from '../pages/userProfile/account.module.css';
import { Link } from "react-router-dom";
import UserInfo from "../pages/userProfile/components/UserInfo";
import { useState } from "react";
import EditUserInfo from "../pages/userProfile/components/EditUserInfo";

const AccountLayout = () => {
  const [isEditInfo, setEditInfo] = useState<boolean>(true);

  const handleClick = () => {
    setEditInfo(!isEditInfo);
  };
  const people = [
    {name: "name", iconClass: "bi bi-person-circle", customText: "hamza" },
    {name: "last name", iconClass: "bi bi-person", customText: "abd rahim" },
    {name: "email", iconClass: "bi bi-envelope", customText: "essh4014@gmail.com" },
    {name: "phone", iconClass: "bi bi-telephone-fill", customText: "0668700685" },
    {name: "siteWeb", iconClass: "bi bi-browser-chrome", customText: "www.symloop.com" },
    {name: "siteWeb", iconClass: "bi bi-geo", customText: "setife" },
  ];

  // const MonCompt = [
  //   {name: "name", iconClass:"bi bi-person-circle", customText: "hamza" },
  // ] 
  return (
    <>
      <Navbar />
      <div className={`main-page mobile-flex-col position-relative overflow-hidden flex-items 
      justify-content-center py-4`}>
        <div className="col-lg-8 col-xxl-4 col-11 mx-auto bg-white shadow-lg pb-4 rounded-5">
          <div className={styles.userBackground}>
            <img src={user__background} alt="" className="h-100 w-100 object-fit-cover" />
          </div>
          <div className={styles.profileUser + " text-center"}>  {/* Concatenate the class names */}
            <img src={user__img} alt="" />
          </div>
          <div className="flex-items justify-content-center gap-2 px-2 px-lg-4 mt-2 justify-content-sm-between flex-wrap gap-1">
            <p className="fw-medium fs-px_20 ln-ht-20px">Informations personels</p>
            <Link onClick={handleClick} to={""}
             className={`${isEditInfo && 'outline'} medium-blue-button d-grid place-items-center`}>
              Modifire
            </Link>
          </div>
          {isEditInfo ? (
            <div className="mt-3 animate__animated animate__zoomIn d-grid gap-2">
          {people.map(person => (
        <UserInfo
          key={person.name}
          name={person.name}
          iconClass={person.iconClass}
          customText={person.customText}
        />
      ))}
          </div>
          ) : (
            <EditUserInfo />
          )}
          <div className="flex-items justify-content-between fw-medium col-lg-10 mx-auto my-4">
            <p className="fs-px_18 lh-base">Mon Compte</p>
            <Link to={""} className="clr-green-light fs-px_18 ln-ht-17px">
              modifier
            </Link>
          </div>
          <div className="d-grid gap-2">
          {people.map(person => (
              <UserInfo
                key={person.name}
                name={person.name}
                iconClass={person.iconClass}
                customText={person.customText}
                />
                ))}
                </div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
