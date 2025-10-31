import React, { useEffect, useState } from "react";
import { getActivities } from "../services/api";
import { useNavigate } from "react-router";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      const response = await getActivities();
      setActivities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 poppins">
      {activities.map((activity) => (
        <div
          key={activity.id}
          onClick={() => navigate(`/activities/${activity.id}`)}
          className="cursor-pointer bg-black/70 border border-yellow-400/30 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,221,0,0.4)]"
        >
          <h2 className="momo-trust-display text-yellow-400 text-2xl mb-2">
            {activity.type}
          </h2>
          <p className="text-yellow-100">Duration: {activity.duration} mins</p>
          <p className="text-yellow-100">Calories: {activity.caloriesBurned}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
