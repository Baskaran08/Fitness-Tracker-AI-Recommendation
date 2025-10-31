import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-white px-6 py-24 font-poppins">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="font-momo text-4xl text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(255,221,0,0.5)]">
          Your Fitness Activities
        </h1>
        <p className="text-gray-300 text-lg">
          Log, track, and analyze your daily progress.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Activity Form */}
        <div className="bg-yellow-400/10 backdrop-blur-md border border-yellow-300/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,221,0,0.1)] hover:shadow-[0_0_40px_rgba(255,221,0,0.25)] transition-all duration-300">
          <h2 className="font-momo text-2xl text-yellow-400 mb-4">Add Activity</h2>
          <ActivityForm onActivitiesAdded={() => window.location.reload()} />
        </div>

        {/* Activity List */}
        <div className="bg-black border border-yellow-300/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,221,0,0.1)] hover:shadow-[0_0_40px_rgba(255,221,0,0.25)] transition-all duration-300">
          <h2 className="font-momo text-2xl text-yellow-400 mb-4">Activity Logs</h2>
          <ActivityList />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
