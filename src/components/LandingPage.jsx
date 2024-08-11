import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["./fitness1.jpg", "./fitness2.jpg", "./fitness3.jpg"];

function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-14 relative text-black py-16 flex flex-col items-center px-4">
      <motion.div
        className="w-full max-w-screen-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Fitness ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to the Best Fitness Experience!
      </motion.h2>
    </div>
  );
}

export default LandingPage;
