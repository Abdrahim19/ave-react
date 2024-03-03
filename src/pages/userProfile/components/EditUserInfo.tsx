import React from "react";
import InputWithLabel from "../../../components/commen/ui/InputWithLabel"

const EditUserInfo = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="animate__animated animate__zoomIn">
      <div className="row px-4">
      <div className="col-sm-6 mb-2">
    <InputWithLabel label={"Name"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6 mb-2">
    <InputWithLabel label={"last name"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6">
    <InputWithLabel label={"email"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6">
    <InputWithLabel label={"password"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6 mb-2">
    <InputWithLabel label={"Name"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6 mb-2">
    <InputWithLabel label={"last name"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6">
    <InputWithLabel label={"email"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="col-sm-6">
    <InputWithLabel label={"password"} value={"Amrani" || inputValue} onChange={() => handleInputChange}
     placeholder={""} name={"Name"} type={"text"} />
      </div>
      <div className="flex-items gap-2 mt-3 justify-content-end flex-wrap">
        <button className="medium-blue-button outline">close</button>
        <button className="medium-blue-button ">save</button>
      </div>
      </div>
    </div>
  )
}

export default EditUserInfo