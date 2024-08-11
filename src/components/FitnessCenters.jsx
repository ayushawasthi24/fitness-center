import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const centers = [
  {
    id: 1,
    title: "Fitness Center 1",
    subtile: "Dwarka Delhi NCR",
    tags: ["Gym", "Yoga", "Zumba"],
    labels: [
      {
        icon: "<url>",
        text: "Open 24/7",
      },
    ],
    imageList: [
      "https://via.placeholder.com/300x200?text=Image+1",
      "https://via.placeholder.com/300x200?text=Image+2",
      "https://via.placeholder.com/300x200?text=Image+3",
    ],
  },
  {
    id: 2,
    title: "Fitness Center 2",
    subtile: "Gurgaon Sector 44",
    tags: ["CrossFit", "Cardio", "Strength"],
    labels: [
      {
        icon: "<url>",
        text: "Open 6 AM - 10 PM",
      },
    ],
    imageList: [
      "https://via.placeholder.com/300x200?text=Image+1",
      "https://via.placeholder.com/300x200?text=Image+2",
      "https://via.placeholder.com/300x200?text=Image+3",
    ],
  },
  {
    id: 3,
    title: "Fitness Center 3",
    subtile: "Noida Sector 18",
    tags: ["Pilates", "Aerobics", "Dance"],
    labels: [
      {
        icon: "<url>",
        text: "Open 5 AM - 11 PM",
      },
    ],
    imageList: [
      "https://via.placeholder.com/300x200?text=Image+1",
      "https://via.placeholder.com/300x200?text=Image+2",
      "https://via.placeholder.com/300x200?text=Image+3",
    ],
  },
];

function FitnessCenters() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Nearby Fitness Centers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {centers.map((center, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <Slider {...settings}>
              {center.imageList.map((url, idx) => (
                <div key={idx}>
                  <img
                    src={url}
                    alt={`Fitness Center ${index + 1} Image ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
              ))}
            </Slider>
            <h3 className="text-xl font-semibold mb-2">{center.title}</h3>
            <p className="text-gray-700">{center.subtile}</p>
            <div className="flex flex-wrap mt-4">
              {center.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white text-sm px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-4">
              <img
                src={center.labels[0].icon}
                alt="Icon"
                className="w-4 h-4 mr-2"
              />
              <span>{center.labels[0].text}</span>
            </div>
            <Link
              to={`/fitness-center/${center.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FitnessCenters;
