import React, { useState } from "react";
import { addActivity } from "../services/api";

const ActivityForm = ({ onActivitiesAdded }) => {
  const [activity, setActivity] = useState({
    type: "RUNNING",
    duration: "",
    caloriesBurned: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addActivity(activity);
      onActivitiesAdded();
      setActivity({ type: "RUNNING", duration: "", caloriesBurned: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/60 border border-yellow-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,221,0,0.2)] mb-8 backdrop-blur-lg text-white"
    >
      <h2 className="momo-trust-display text-2xl text-yellow-400 mb-6 text-center">
        Add a New Activity
      </h2>

      {/* Activity Type */}
      <div className="mb-5 relative">
        <label className="block text-yellow-300 mb-2 font-semibold">
          Activity Type
        </label>
        <div className="relative">
          <select
            value={activity.type}
            onChange={(e) => setActivity({ ...activity, type: e.target.value })}
            className="appearance-none w-full bg-zinc-900/70 border border-yellow-300/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 font-poppins cursor-pointer"
          >
            <option value="RUNNING">🏃 Running</option>
            <option value="WALKING">🚶 Walking</option>
            <option value="CYCLING">🚴 Cycling</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-5">
        <label className="block text-yellow-300 mb-2 font-semibold">
          Duration (minutes)
        </label>
        <input
          type="number"
          value={activity.duration}
          onChange={(e) =>
            setActivity({ ...activity, duration: e.target.value })
          }
          className="w-full bg-zinc-900/70 border border-yellow-300/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 font-poppins"
          placeholder="e.g., 45"
        />
      </div>

      {/* Calories Burned */}
      <div className="mb-8">
        <label className="block text-yellow-300 mb-2 font-semibold">
          Calories Burned
        </label>
        <input
          type="number"
          value={activity.caloriesBurned}
          onChange={(e) =>
            setActivity({ ...activity, caloriesBurned: e.target.value })
          }
          className="w-full bg-zinc-900/70 border border-yellow-300/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 font-poppins"
          placeholder="e.g., 200"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,221,0,0.6)]"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
