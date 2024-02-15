import footer_logo from "../../../assets/svg file 1.png";
import badge_app_store from "../../../assets/badge-app-store.svg";
import badge_pla_store from "../../../assets/badge-playstore.svg";
import './footer.css'

const Footer = () => {
  return (
    <footer className="min-vh-100 d-grid" style={{placeItems:'center'}}>
      <div className="d-flex flex-column mt-3 flex-sm-row footer-wrapper align-items-start justify-content-center flex-wrap gap-5 container">
        <div className="flex-1">
          <img src={footer_logo} className="footer-img" alt="" />
          <ul className="d-grid gap-3" style={{ marginTop: 'clamp(30px, 5vw, 72px)' }}>
            <h2 className="footer-title">QUESTIONS FRÉQUENTES - AIDE</h2>
            <li className="footer-link"><a href="#">Je n'arrive pas à faire vérifier mon mobile</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à me connecter à mon compte</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à m'inscrire depuis le site web</a></li>
            <li className="footer-link"><a href="#">Comment réinitialiser / modifier mon mot de passe</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="d-grid gap-3">
            <h2 className="footer-title">QUESTIONS FRÉQUENTES - AIDE</h2>
            <li className="footer-link"><a href="#">Je n'arrive pas à faire vérifier mon mobile</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à me connecter à mon compte</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à m'inscrire depuis le site web</a></li>
            <li className="footer-link"><a href="#">Comment réinitialiser / modifier mon mot de passe</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="d-grid gap-3">
            <h2 className="footer-title">QUESTIONS FRÉQUENTES - AIDE</h2>
            <li className="footer-link"><a href="#">Je n'arrive pas à faire vérifier mon mobile</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à me connecter à mon compte</a></li>
            <li className="footer-link"><a href="#">Je n'arrive pas à m'inscrire depuis le site web</a></li>
            <li className="footer-link"><a href="#">Comment réinitialiser / modifier mon mot de passe</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-center d-grid">
            <h2 className="footer-title text-center">QUESTIONS FRÉQUENTES - AIDE</h2>
            <a href="#" className="footer-app-store-icon mb-3">
              <img src={badge_app_store } alt="" />
            </a>
            <a href="#" className="footer-playstore-icon">
              <img src={badge_pla_store} alt="" />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;