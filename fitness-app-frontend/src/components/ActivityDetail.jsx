import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getActivityDetail, getActivity } from "../services/api";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activityData, setActivityData] = useState(null);
  const [activity, setActivity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await getActivity(id);
        setActivityData(response.data);
      } catch (error) {
        console.error(error);
      } 
    }
    const fetchActivityDetail = async () => {
      try {
        const response = await getActivityDetail(id);
        setActivity(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivity();
    fetchActivityDetail();
  }, [id]);


  if (!activity) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-yellow-400 font-poppins text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 font-poppins pt-18">
      {/* Header Section */}
      <header className="w-full bg-yellow-400 text-black py-8 px-10 flex justify-between items-center shadow-[0_4px_20px_rgba(255,221,0,0.3)]">
        <h1 className="font-momo text-4xl tracking-wide">Activity Details</h1>
       <button
        onClick={() => navigate("/activities")}
        className="bg-black text-yellow-400 font-semibold py-2 px-6 rounded-full border border-yellow-400 
                  transition-all duration-300 
                  hover:bg-yellow-400 hover:text-black hover:border-black hover:shadow-[0_0_12px_rgba(0,0,0,0.6)]"
      >
  ← Back
</button>
      </header>

      {/* Activity Info */}
      <section className="w-full py-14 px-12 border-b border-yellow-400/30 bg-gradient-to-r from-black via-zinc-950 to-black">
        <h2 className="text-2xl font-momo text-yellow-400 mb-8 tracking-wide">
          Summary
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 text-lg">
          <div>
            <p className="text-yellow-400 font-semibold">Type</p>
            <p>{activityData.type}</p>
          </div>
          <div>
            <p className="text-yellow-400 font-semibold">Duration</p>
            <p>{activityData.duration} min</p>
          </div>
          <div>
            <p className="text-yellow-400 font-semibold">Calories Burned</p>
            <p>{activityData.caloriesBurned}</p>
          </div>
          <div>
            <p className="text-yellow-400 font-semibold">Date</p>
            <p>{new Date(activityData.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* AI Recommendation Section */}
      {activity.recommendation && (
        <section className="w-full py-16 px-12 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
          <h2 className="text-3xl font-momo text-yellow-400 mb-10 tracking-wide">
            AI Recommendation
          </h2>

          <div className="space-y-14">
            {/* Analysis */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                Analysis
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {activity.recommendation}
              </p>
            </div>

            {/* Improvements */}
            {activity.improvements?.length > 0 && (
              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  Improvements
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {activity.improvements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggestions */}
            {activity.suggestions?.length > 0 && (
              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  Suggestions
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {activity.suggestions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Safety */}
            {activity.safety?.length > 0 && (
              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  Safety Guidelines
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {activity.safety.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-yellow-400 text-black text-center py-6 mt-10 font-semibold tracking-wide">
        ⚡ AI-Powered Insights — Stay Fit, Stay Smart ⚡
      </footer>
    </div>
  );
};

export default ActivityDetail;
