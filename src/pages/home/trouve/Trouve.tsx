import './trouve.css'
import user_img from "../../../assets/Image-40.png";
import circles from "../../../assets/circles.png";
import big_img from "../../../assets/image 1 (1).png"

const Trouve = () => {
  return (
    <section className="min-vh-100 my-4 cenetr-grid position-relative z-3">
    <div className="position-absolute circal-green z-2">
      <img src={circles} alt="" />
    </div>
    <div className="container-lg z-3">
      <h2 className="Trouve-titel mb-4 text-center text-md-start">Trouve quelqu’un qui <br />
       <span>répond à vos demandes</span></h2>
        <div className="row gap-4 gap-md-0 align-items-center">
          <div className="col-md-6">
            <div className="Trouve-big-cart bg-white mx-auto mx-md-0">
              <div className="flex-items gap-2 p-4">
                <img src={user_img} className="user-img" alt="" />
                <p className="user-name">Gilberto B. <br />
                  <span className="user-loction ">
              Vienne (Jean-Moulin) - 13,4 km
                  </span>
                </p>
              </div>
              <img src={big_img} className="request-img" alt="" />
              <div className="p-4 d-grid gap-3">
                <p className="request-discrption">
                Bonjour, Je cherche un plombier pour remplacer un wc à poser assez rapidement. 
                Je joins de photos de l'existant et de celui que nous avons commandé.
                </p>
                <p className="request-pupliched">
                Hier à 13h
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-grid" style={{gap:'clamp(10px ,4vw , 20px)'}}>
            <div className="reviews-card mx-auto">
              <div className="flex-items gap-2 mb-4">
                <img src={user_img} className="user-img" alt="" />
                <div className="d-flex flex-column">
                  <div className="flex-items">
                    <p className="user-name mb-0">Gilberto B.
                    </p>
                    <button className="revwie-button">Particulier</button>
                  </div>
                    <span className="user-rate flex-items gap-1">
                      (4.3)
                      <i className="bi bi-star-fill" 
                      style={{color:'rgb(252,221,46);font-size: 14px'}}></i>
                    </span>
                </div>
              </div>
              <div>
                <p className="review-discrption">Pour me contacter directement sois m'appeler au 
                  6. 82. 90. 08. 45 sois choisir la catégorie bricolage ou ...</p>
                  <a href="#" className="readmore-button">Voir plus</a>
              </div>
              <p className="review-publiched mt-4">Aujourd’hui à 13h</p>
            </div>
            <div className="reviews-card active">
              <div className="flex-items gap-2 mb-4">
                <img src={user_img} className="user-img" alt="" />
                <div className="d-flex flex-column">
                  <div className="flex-items">
                    <p className="user-name mb-0">Gilberto B.
                    </p>
                    <button className="revwie-button">Particulier</button>
                  </div>
                    <span className="user-rate flex-items gap-1">
                      (4.3)
                      <i className="bi bi-star-fill" 
                      style={{color:'rgb(252,221,46);font-size: 14px'}}></i>
                    </span>
                </div>
              </div>
              <div>
                <p className="review-discrption">Pour me contacter directement sois m'appeler au 
                  6. 82. 90. 08. 45 sois choisir la catégorie bricolage ou ...</p>
                  <a href="#" className="readmore-button">Voir plus</a>
              </div>
              <p className="review-publiched mt-4">Aujourd’hui à 13h</p>
            </div>
            <div className="reviews-card mx-auto">
              <div className="flex-items gap-2 mb-4">
                <img src={user_img} className="user-img" alt="" />
                <div className="d-flex flex-column">
                  <div className="flex-items">
                    <p className="user-name mb-0">Gilberto B.
                    </p>
                    <button className="revwie-button">Particulier</button>
                  </div>
                    <span className="user-rate flex-items gap-1">
                      (4.3)
                      <i className="bi bi-star-fill" style={{color:'rgb(252,221,46);font-size: 14px'}}></i>
                    </span>
                </div>
              </div>
              <div>
                <p className="review-discrption">Pour me contacter directement sois m'appeler au 
                  6. 82. 90. 08. 45 sois choisir la catégorie bricolage ou ...</p>
                  <a href="#" className="readmore-button">Voir plus</a>
              </div>
              <p className="review-publiched mt-4">Aujourd’hui à 13h</p>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Trouve