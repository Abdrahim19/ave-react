import "./filter.css";
import { Link } from "react-router-dom";
import Dropdown from "./components/Dropdown";
const Filter = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  
  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };
  return (
    <div className="Filter__box">
      <div className="flex-items flex-wrap justify-content-center gap-3 m-3 gap-sm-4 gap-lg-0 
      justify-content-center align-items-center">
        <div className="flex-1">
        <Dropdown options={options} onSelect={handleSelect} placeHolder="Catégorie" />
        </div>
        <div className="flex-1">
        <Dropdown options={options} onSelect={handleSelect} placeHolder="Adresse" />
        </div>
        <div className="flex-1 flex-wrap justify-content-xl-end justify-content-center gap-xl-4 gap-2 flex-items">
          <Link to='' className="gray__link text-center">Effacer</Link>
          <button className="small_green_button">Rechercher</button>
        </div>
      </div>
    </div>
  )
}

export default Filter