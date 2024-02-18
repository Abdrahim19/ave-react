import './carousel.css';
import half_circal from "../../../assets/Ellipse 63.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
export default function Carousel() {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } ]
  };
 
  return (
    <section className="min-vh-100 cenetr-grid">
      <div className="container">
        <div className="titel-box d-flex align-items-center" style={{ gap: '24px' , marginBottom:'clamp(2rem ,4vw , 4rem)' }}>
          <img src={half_circal} className="img-titel" alt="" />
          <h3 className="section-titel">Les Meilleurs <br /> <span>sellers</span></h3>
        </div>
        <Slider {...settings}>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
          <div className="user-card position-relative">
            {/* <img src={user_img} className="user-img" alt="" /> */}
            <div className="inner-content position-absolute">
              <h4 className="shadow-userTitel">Angela mars</h4>
              <span className="job-name">Nettoyage</span>
              <div className="flex-items mt-3 gap-2 flex-wrap">
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
                <span className="user-tag">Nettoyage</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
  }