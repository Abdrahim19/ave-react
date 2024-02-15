import './dmaned.css'
const DemandeCard = () => {
  return (
    <div className="Demande-card">
      <div className="flex-items mb-3" style={{ gap: '1rem' }}>
        <img src="./public/world 1.png" alt="" />
        <a href="#" className="flex-items gap-3 Demande-link">
          Demande publique
          <img src="./public/Vector (1).png" alt="" />
        </a>
      </div>
      <div>
        <input type="text" className="inputText w-100 px-4" placeholder="Bonjour, " />
        <span className="floating-label">Décrivez votre besoin</span>
      </div>
      <div className="uplode-file">
        <p className="uplode-titel mb-3">Ajoutez des photos pour illustrer votre besoin :</p>
        <div className="uploder-file-placeholder cenetr-grid text-center">
          <i className="bi bi-cloud-arrow-up"></i>
          <p className="uplode-discrption">Faites glisser et déposez votre photo</p>
        </div>
      </div>
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
