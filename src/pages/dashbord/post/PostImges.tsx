import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
};

const PostImages: React.FC<Props> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (
    <div className="imgesPost-container">
      <Slider {...settings} className="col-3 col-sm-2 col-xl-1 px-0 text-center w-auto">
        {images.map((img: string, index: number) => {
          return (
                <img
                  src={img}
                  className="user-post-img"
                  style={{ height: 'clamp(60px, 4vw, 100px)' }}
                  alt=""
                  key={index}
                />
          );
        })}
      </Slider>
    </div>
  );
};

export default PostImages;