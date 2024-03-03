import React from 'react'

interface Props {
    name: string;
    iconClass: string; 
    customText: string; 
  }
const UserInfo: React.FC<Props> = ({ name, iconClass, customText }) => {
  return (
    <div className="flex-items bg-white rounded-3 shadow-lg flex-wrap col-10 mx-auto p-2 mx-auto gap-1">
    <div className="flex-items gap-3">
      <div className={`py-1 px-2 rounded-circle bg-main-blue text-white`}>
        <i className={iconClass} style={{ fontSize: "1.5rem" }}></i>
      </div>
      <p className="fw-medium fs-px-22 ln-ht-17px">{name}</p>
    </div>
    <p className="fs-px-22 fw-medium ln-ht-17px text-capitalize ml-auto">{customText}</p>
  </div>
  )
}

export default UserInfo