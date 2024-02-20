import Inputlabel from '../../../components/commen/ui/Inputlabel';
import UplodeFile from './UplodeFile';
import arrowDown from '../../../assets/Vector (1).png'
import './dmaned.css'
const DemandeCard = () => {
  return (
    <div className="Demande-card">
      <div className="flex-items mb-3" style={{ gap: '1rem' }}>
        <img src="./public/world 1.png" alt="" />
        <a href="#" className="flex-items gap-3 Demande-link">
          Demande publique
          <img src={arrowDown} alt="" />
        </a>
      </div>
      <div>
      <Inputlabel name={"besoin"} type={"text"} label={"Décrivez votre besoin"} error={""} />
      </div>
      <UplodeFile onFileUpload={(file: File) : void => {
       console.log(file);
      } } />
      <hr className="line-sparaiter" />
      <div className="flex-items justify-content-between">
        <p className="Lieu-text">Lieu</p>
        <a href="#" className="domicile-link">
          Mon domicile <strong>{'>'}</strong>
        </a>
      </div>
      <button className="green-button mt-4">Poster ma demande</button>
    </div>
  );
};

export default DemandeCard;
