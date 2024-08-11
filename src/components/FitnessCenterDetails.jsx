import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

function FitnessCenterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(
    Object.keys(schedules[id])[0]
  );
  const [selectedTag, setSelectedTag] = useState("");

  const centerSchedule = schedules[id];

  if (!centerSchedule) {
    return <div>Fitness Center not found</div>;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag === selectedTag ? "" : tag); // Toggle tag selection
  };

  const handleEventClick = (eventId) => {
    navigate(`/event/${id}/${eventId}`);
  };

  // Get all unique tags from the schedule
  const allTags = Array.from(
    new Set(
      centerSchedule[selectedDate].flatMap((slot) =>
        slot.activities.flatMap((activity) => activity.metaData)
      )
    )
  );

  // Filter activities based on the selected tag
  const filteredSchedule = centerSchedule[selectedDate]
    .map((slot) => ({
      ...slot,
      activities: slot.activities.filter((activity) =>
        selectedTag ? activity.metaData.includes(selectedTag) : true
      ),
    }))
    .filter((slot) => slot.activities.length > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
        Fitness Center Schedule
      </h2>

      {/* Date Selection */}
      <div className="flex flex-wrap justify-center lg:justify-start space-x-2 lg:space-x-4 mb-6">
        {Object.keys(centerSchedule).map((date) => (
          <button
            key={date}
            onClick={() => handleDateChange(date)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-sm ${
              selectedDate === date
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-400 hover:bg-gray-300"
            }`}
          >
            {new Date(date).toDateString().slice(0, 10)}
          </button>
        ))}
      </div>

      {/* Tag Filter */}
      <div className="flex flex-wrap justify-center lg:justify-start space-x-2 space-y-2 lg:space-x-4 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagChange(tag)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-sm ${
              selectedTag === tag
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-400 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Schedule Display */}
      {filteredSchedule.length > 0 ? (
        filteredSchedule.map((slot, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center lg:text-left">
              {slot.timeSlot}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slot.activities.map((activity, idx) => (
                <div
                  key={idx}
                  onClick={() => handleEventClick(`${index}-${idx}`)}
                  className="cursor-pointer p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">
                    {activity.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.metaData.map((meta, metaIdx) => (
                      <span
                        key={metaIdx}
                        className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold"
                      >
                        {meta}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center lg:text-left">
          No activities match the selected tag.
        </p>
      )}
    </div>
  );
}

export default FitnessCenterDetails;
