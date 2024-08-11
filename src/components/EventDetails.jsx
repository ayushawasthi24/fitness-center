import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginPopup from "./LoginPopup";

const schedules = {
  1: {
    "2024-08-11": [
      {
        timeSlot: "5:00 pm",
        activities: [
          { title: "Burn", metaData: ["Cardio", "Strength"] },
          { title: "HRX Workout", metaData: ["Endurance", "Stamina"] },
        ],
      },
      {
        timeSlot: "5:30 pm",
        activities: [
          { title: "Hatha Yoga Special", metaData: ["Flexibility", "Peace"] },
        ],
      },
      {
        timeSlot: "6:00 pm",
        activities: [
          { title: "Strength+", metaData: ["Muscle Building"] },
          { title: "Boxing Bag Workout", metaData: ["Cardio", "Strength"] },
        ],
      },
      {
        timeSlot: "6:30 pm",
        activities: [{ title: "Dance Fitness", metaData: ["Dance", "Cardio"] }],
      },
    ],
    "2024-08-12": [
      {
        timeSlot: "5:00 pm",
        activities: [
          { title: "Burn", metaData: ["Cardio", "Strength"] },
          { title: "HRX Workout", metaData: ["Endurance", "Stamina"] },
        ],
      },
      {
        timeSlot: "5:30 pm",
        activities: [
          { title: "Hatha Yoga Special", metaData: ["Flexibility", "Peace"] },
        ],
      },
      {
        timeSlot: "6:00 pm",
        activities: [
          { title: "Strength+", metaData: ["Muscle Building"] },
          { title: "Boxing Bag Workout", metaData: ["Cardio", "Strength"] },
        ],
      },
      {
        timeSlot: "6:30 pm",
        activities: [{ title: "Dance Fitness", metaData: ["Dance", "Cardio"] }],
      },
    ],
  },
  2: {
    "2024-08-11": [
      {
        timeSlot: "5:00 pm",
        activities: [
          { title: "Burn", metaData: ["Cardio", "Strength"] },
          { title: "HRX Workout", metaData: ["Endurance", "Stamina"] },
        ],
      },
      {
        timeSlot: "5:30 pm",
        activities: [
          { title: "Hatha Yoga Special", metaData: ["Flexibility", "Peace"] },
        ],
      },
      {
        timeSlot: "6:00 pm",
        activities: [
          { title: "Strength+", metaData: ["Muscle Building"] },
          { title: "Boxing Bag Workout", metaData: ["Cardio", "Strength"] },
        ],
      },
      {
        timeSlot: "6:30 pm",
        activities: [{ title: "Dance Fitness", metaData: ["Dance", "Cardio"] }],
      },
    ],
    "2024-08-12": [
      {
        timeSlot: "5:00 pm",
        activities: [
          { title: "Burn", metaData: ["Cardio", "Strength"] },
          { title: "HRX Workout", metaData: ["Endurance", "Stamina"] },
        ],
      },
      {
        timeSlot: "5:30 pm",
        activities: [
          { title: "Hatha Yoga Special", metaData: ["Flexibility", "Peace"] },
        ],
      },
      {
        timeSlot: "6:00 pm",
        activities: [
          { title: "Strength+", metaData: ["Muscle Building"] },
          { title: "Boxing Bag Workout", metaData: ["Cardio", "Strength"] },
        ],
      },
      {
        timeSlot: "6:30 pm",
        activities: [{ title: "Dance Fitness", metaData: ["Dance", "Cardio"] }],
      },
    ],
  },
};

function EventDetails() {
  const { centerId, eventId } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true" || false;
  });
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);

  const eventIndex = eventId.split("-"); // Extracting index for the event
  const centerSchedule = schedules[centerId];
  const event =
    centerSchedule &&
    centerSchedule[Object.keys(centerSchedule)[0]][eventIndex[0]].activities[
      eventIndex[1]
    ];

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleBookSlot = () => {
    if (!isLoggedIn) {
      setLoginPopupOpen(true);
    } else {
      alert("Slot booked successfully!");
    }
  };

  const toggleLoginPopup = () => {
    setLoginPopupOpen(!loginPopupOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginPopupOpen(false);
  };

  return (
    <div className="p-8 min-h-screen mt-20">
      <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
      <img
        src="https://via.placeholder.com/600x300"
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="flex flex-wrap gap-2 mb-6">
        {event.metaData.map((meta, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {meta}
          </span>
        ))}
      </div>
      <button
        onClick={handleBookSlot}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition"
      >
        Book Slot
      </button>
      {loginPopupOpen && (
        <LoginPopup
          onClose={toggleLoginPopup}
          onLogin={handleLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}

export default EventDetails;
