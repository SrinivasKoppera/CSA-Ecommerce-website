import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner-carousel.css";
import welcomeBanner1 from "../../assets/offersbanner2.png";
import welcomeBanner2 from "../../assets/first_banner.webp";

const OfferBanner = () => {
  const banners = [welcomeBanner1, welcomeBanner2];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="offer-banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner-slide">
            <img
              src={banner}
              alt={`banner-${index}`}
              className="banner-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferBanner;
